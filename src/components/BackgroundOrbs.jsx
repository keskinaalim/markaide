const staticOrbs = [
  { size: 'h-80 w-80', pos: 'left-[-6rem] top-[-4rem]', baseColor: 'bg-cyan-300/20' },
  { size: 'h-[30rem] w-[30rem]', pos: 'right-[-8rem] top-1/4', baseColor: 'bg-rose-300/15' },
  { size: 'h-[25rem] w-[25rem]', pos: 'left-1/3 bottom-[-10rem]', baseColor: 'bg-emerald-300/15' }
];

export default function BackgroundOrbs({ activeColor }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic Brand Color Orb */}
      {activeColor && (
        <div
          className="absolute right-1/4 top-1/4 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full blur-[120px] transition-colors duration-1000"
          style={{ backgroundColor: `${activeColor}15` }}
        />
      )}

      {staticOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.size} ${orb.pos} ${orb.baseColor} animate-pulseGlow rounded-full blur-[100px]`}
          style={{ animationDelay: `${i * 1.5}s` }}
        />
      ))}
    </div>
  );
}
