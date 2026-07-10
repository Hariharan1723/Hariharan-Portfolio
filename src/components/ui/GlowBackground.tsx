export default function GlowBackground() {
  return (
    <>
      <div className="absolute -left-40 top-40 h-72 w-72 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
    </>
  );
}