"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Cinematic hero object: a procedural crystalline/molecular structure —
 * an abstract reference to silica, silicon and molecular hydrogen — floating
 * in a dark studio environment.
 *
 * Deliberately procedural (geometry + GLSL), not a fake product render.
 * Replace or augment with a real GLB of HDI hardware later by mounting it
 * into this scene.
 *
 * Performance: adaptive DPR, paused when offscreen or tab hidden,
 * single static frame under prefers-reduced-motion.
 */
export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const isSmall = mount.clientWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1.5 : 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    /* Core crystalline body — fresnel-lit, softly breathing surface */
    const coreGeometry = new THREE.IcosahedronGeometry(1.55, 3);
    const coreMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vec3 p = position;
          float swell = sin(p.x * 2.4 + uTime * 0.5) * sin(p.y * 2.1 - uTime * 0.4) * 0.035;
          p += normal * swell;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float fresnel = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.6);
          vec3 base = vec3(0.016, 0.024, 0.038);
          vec3 rim = vec3(0.184, 0.545, 1.0);      // hydrogen blue
          vec3 glint = vec3(0.275, 0.835, 0.949);   // plasma cyan
          float top = smoothstep(0.0, 1.0, vNormal.y * 0.5 + 0.5);
          vec3 color = base + rim * fresnel * 0.9 + glint * fresnel * fresnel * 0.35 + rim * top * 0.05;
          gl_FragColor = vec4(color, 0.96);
        }
      `,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    /* Fine structural lattice over the body */
    const latticeGeometry = new THREE.IcosahedronGeometry(1.62, 1);
    const lattice = new THREE.LineSegments(
      new THREE.WireframeGeometry(latticeGeometry),
      new THREE.LineBasicMaterial({
        color: 0x2f8bff,
        transparent: true,
        opacity: 0.14,
      })
    );
    group.add(lattice);

    /* Molecular sites at lattice vertices */
    const siteMaterial = new THREE.PointsMaterial({
      color: 0x8fc2ff,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sites = new THREE.Points(latticeGeometry, siteMaterial);
    group.add(sites);

    /* Ambient particle field — suspended matter in the dark */
    const fieldCount = isSmall ? 320 : 700;
    const fieldPositions = new Float32Array(fieldCount * 3);
    for (let i = 0; i < fieldCount; i++) {
      const r = 2.6 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      fieldPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      fieldPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      fieldPositions[i * 3 + 2] = r * Math.cos(phi) * 0.6 - 1.5;
    }
    const fieldGeometry = new THREE.BufferGeometry();
    fieldGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(fieldPositions, 3)
    );
    const field = new THREE.Points(
      fieldGeometry,
      new THREE.PointsMaterial({
        color: 0x3a6ea8,
        size: 0.022,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(field);

    /* Interaction state */
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    /* Render loop — paused when hero is offscreen or tab hidden */
    let visible = true;
    let rafId = 0;
    const clock = new THREE.Clock();

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(mount);

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      coreMaterial.uniforms.uTime.value = t;

      target.x += (pointer.y * 0.22 - target.x) * 0.04;
      target.y += (pointer.x * 0.3 - target.y) * 0.04;

      group.rotation.x = target.x + Math.sin(t * 0.12) * 0.05;
      group.rotation.y = t * 0.08 + target.y;
      lattice.rotation.y = -t * 0.03;
      sites.rotation.y = -t * 0.03;
      field.rotation.y = t * 0.012;
      group.position.y = Math.sin(t * 0.4) * 0.06;

      renderer.render(scene, camera);
    };

    const loop = () => {
      rafId = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      renderFrame();
    };

    if (reducedMotion) {
      renderFrame(); // single static frame
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      coreGeometry.dispose();
      latticeGeometry.dispose();
      fieldGeometry.dispose();
      coreMaterial.dispose();
      siteMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0"
    />
  );
}
