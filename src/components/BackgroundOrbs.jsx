const staticOrbs = [
  { size: 'h-[35rem] w-[35rem]', pos: 'left-[-8rem] top-[-6rem]', baseColor: 'bg-sky-400/25', delay: '0s' },
  { size: 'h-[45rem] w-[45rem]', pos: 'right-[-12rem] top-1/4', baseColor: 'bg-blue-400/20', delay: '2s' },
  { size: 'h-[38rem] w-[38rem]', pos: 'left-1/3 bottom-[-12rem]', baseColor: 'bg-cyan-400/20', delay: '4s' },
  { size: 'h-[32rem] w-[32rem]', pos: 'right-1/4 bottom-[-8rem]', baseColor: 'bg-indigo-400/15', delay: '6s' }
];

export default function BackgroundOrbs({ activeColor }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-sky-50/50" />

      {activeColor && (
        <>
          <div
            className="absolute right-1/4 top-1/3 h-[50rem] w-[50rem] animate-pulseGlow rounded-full blur-[140px] transition-all duration-1000"
            style={{ backgroundColor: `${activeColor}20` }}
          />
          <div
            className="absolute left-1/3 top-1/2 h-[40rem] w-[40rem] animate-pulseGlow rounded-full blur-[120px] transition-all duration-1000"
            style={{ backgroundColor: `${activeColor}15`, animationDelay: '1s' }}
          />
        </>
      )}

      {staticOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.size} ${orb.pos} ${orb.baseColor} animate-pulseGlow rounded-full blur-[130px]`}
          style={{ animationDelay: orb.delay }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full bg-gradient-to-r from-blue-200/10 via-sky-200/10 to-cyan-200/10 blur-[100px]" />
    </div>
  );
}
