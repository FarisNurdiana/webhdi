/**
 * Conceptual process schematic for the Skid Hydrogen Generator.
 *
 * Deliberately drawn as a clean technical flow diagram — NOT a render of
 * the actual machine. When official product photography or a GLB model
 * becomes available, mount it in TechnologyMedia and retire this fallback.
 */
export default function SkidSchematic() {
  return (
    <svg
      viewBox="0 0 560 420"
      role="img"
      aria-label="Conceptual process diagram of a modular skid hydrogen generator: feedstock enters a production module and hydrogen is delivered to application systems"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="skid-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#141a21" />
          <stop offset="1" stopColor="#0b0f14" />
        </linearGradient>
      </defs>

      {/* frame rails of the skid */}
      <rect x="70" y="330" width="420" height="10" fill="#1a2129" />
      <rect x="86" y="340" width="14" height="18" fill="#1a2129" />
      <rect x="460" y="340" width="14" height="18" fill="#1a2129" />

      {/* main production module */}
      <rect x="160" y="130" width="180" height="200" fill="url(#skid-panel)" stroke="rgba(255,255,255,0.14)" />
      <rect x="176" y="150" width="148" height="8" fill="rgba(255,255,255,0.06)" />
      <rect x="176" y="166" width="148" height="8" fill="rgba(255,255,255,0.06)" />
      <circle cx="250" cy="248" r="42" fill="none" stroke="rgba(47,139,255,0.5)" strokeWidth="1.5" />
      <circle cx="250" cy="248" r="28" fill="none" stroke="rgba(47,139,255,0.25)" strokeWidth="1" />
      <circle cx="250" cy="248" r="4" fill="#2f8bff" className="pulse-node" />

      {/* buffer / separator vessel */}
      <rect x="390" y="170" width="60" height="160" rx="30" fill="url(#skid-panel)" stroke="rgba(255,255,255,0.14)" />
      <line x1="390" y1="230" x2="450" y2="230" stroke="rgba(255,255,255,0.1)" />

      {/* feed line in */}
      <path d="M20 248 H160" fill="none" stroke="rgba(200,181,144,0.55)" strokeWidth="1.5" className="flow-line" />
      <circle cx="20" cy="248" r="3.5" fill="#c8b590" />

      {/* transfer line */}
      <path d="M340 248 H390" fill="none" stroke="rgba(47,139,255,0.6)" strokeWidth="1.5" className="flow-line" />

      {/* hydrogen out */}
      <path d="M450 210 H540" fill="none" stroke="rgba(70,213,242,0.8)" strokeWidth="1.5" className="flow-line" />
      <circle cx="540" cy="210" r="3.5" fill="#46d5f2" className="pulse-node" />

      {/* labels */}
      <g
        fill="#7d878e"
        fontSize="10"
        letterSpacing="2"
        fontFamily="'Space Grotesk Variable', sans-serif"
      >
        <text x="20" y="232">FEEDSTOCK</text>
        <text x="170" y="118">PRODUCTION MODULE</text>
        <text x="376" y="158">SEPARATION</text>
        <text x="470" y="196" fill="#46d5f2">H₂ OUT</text>
        <text x="70" y="376">MODULAR SKID FRAME — TRANSPORTABLE UNIT</text>
      </g>

      {/* capacity note (verified: tens–hundreds kg/day) */}
      <g
        fill="#4a545b"
        fontSize="9"
        letterSpacing="1.6"
        fontFamily="'Space Grotesk Variable', sans-serif"
      >
        <text x="70" y="396">CAPACITY CONFIGURED PER DEPLOYMENT · TENS TO HUNDREDS OF KG H₂ / DAY</text>
      </g>
    </svg>
  );
}
