/**
 * Small, honest marker used wherever a visual is a conceptual/procedural
 * representation rather than photography of actual HDI equipment.
 * Required by the project's factual-accuracy rules.
 */
export default function ConceptualNote({
  text = "Conceptual visualization",
}: {
  text?: string;
}) {
  return (
    <span className="meta-label inline-flex items-center gap-2 !text-[0.6rem] !tracking-[0.2em] text-dim/80">
      <span className="h-1 w-1 rounded-full bg-dim/60" aria-hidden="true" />
      {text}
    </span>
  );
}
