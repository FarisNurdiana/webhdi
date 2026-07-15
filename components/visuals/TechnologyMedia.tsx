import dynamic from "next/dynamic";
import ConceptualNote from "@/components/ui/ConceptualNote";
import SkidSchematic from "@/components/visuals/SkidSchematic";
import type { Technology } from "@/data/technologies";

const HydrosiVisual = dynamic(
  () => import("@/components/visuals/HydrosiVisual")
);
const PlasmaField = dynamic(() => import("@/components/visuals/PlasmaField"));

/**
 * ASSET REPLACEMENT POINT — TechnologyMedia
 *
 * Single mounting point for each technology's media. Today every visual is
 * an honest procedural/conceptual representation (schematic, particle
 * system, plasma canvas) because authentic HDI product photography and 3D
 * models are not yet in the repository.
 *
 * To upgrade with real assets later, swap the branch for that technology
 * with an <Image>, <video> or GLB viewer — the surrounding layout does not
 * need to change.
 */
export default function TechnologyMedia({
  technology,
  frameless = false,
}: {
  technology: Technology;
  frameless?: boolean;
}) {
  const media =
    technology.visual === "skid" ? (
      <SkidSchematic />
    ) : technology.visual === "hydrosi" ? (
      <HydrosiVisual />
    ) : (
      <div className="aspect-[4/3] w-full">
        <PlasmaField />
      </div>
    );

  return (
    <figure
      className={
        frameless
          ? ""
          : "relative border hairline bg-graphite/60 p-6 sm:p-10"
      }
    >
      {!frameless && (
        <>
          {/* corner ticks — technical drawing frame */}
          <span aria-hidden className="absolute left-0 top-0 h-3 w-3 border-l border-t border-line-strong" />
          <span aria-hidden className="absolute right-0 top-0 h-3 w-3 border-r border-t border-line-strong" />
          <span aria-hidden className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-line-strong" />
          <span aria-hidden className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-line-strong" />
        </>
      )}
      {media}
      <figcaption className="mt-4">
        <ConceptualNote
          text={`Conceptual representation — ${technology.name}`}
        />
      </figcaption>
    </figure>
  );
}
