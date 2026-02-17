import BrandLogo from './BrandLogo';
import { ArrowRight } from 'lucide-react';

export default function BrandCard({ brand, onOpen }) {
  const Icon = brand.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(brand.id)}
      className="card-hover-glow group relative flex w-full overflow-hidden rounded-[2.5rem] border-2 border-white/80 bg-white/80 p-6 text-left shadow-card backdrop-blur-xl transition-all duration-700 ease-spring hover:-translate-y-2 hover:scale-[1.01] hover:border-white hover:bg-white/90 hover:shadow-card-hover sm:p-7"
    >
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${brand.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-40`}
      />

      <div className="shimmer-effect absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30" style={{ background: `radial-gradient(circle, ${brand.accent}40, transparent)` }} />

      <div className="relative flex w-full items-start gap-7 sm:gap-9">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 transition-all duration-700 group-hover:scale-110 group-hover:shadow-2xl sm:h-32 sm:w-32" style={{ boxShadow: `0 20px 40px -15px ${brand.accent}20` }}>
          <div className="flex h-full w-full items-center justify-center p-4 transition-all duration-700 group-hover:rotate-3 group-hover:scale-105">
            <BrandLogo
              src={`/logolar/${brand.logo}`}
              alt={`${brand.name} logosu`}
              className="h-full w-full object-contain drop-shadow-lg"
              accent={brand.accent}
            />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <div className="min-w-0 flex-1 pr-14 sm:pr-20">
          <h3 className="font-display text-3xl font-black tracking-tight text-slate-900 transition-all duration-500 group-hover:text-slate-800 sm:text-4xl">
            {brand.name}
          </h3>
          <p className="mt-3 line-clamp-2 font-body text-base font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-700 sm:text-lg">
            {brand.summary}
          </p>
          <div
            className="mt-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-500 group-hover:gap-3"
            style={{ color: brand.accent }}
          >
            <span className="relative">
              Projeyi İncele
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: brand.accent }} />
            </span>
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </div>
        </div>

        <span
          className="absolute right-4 top-4 grid h-14 w-14 place-content-center rounded-2xl border-2 border-white bg-white/60 shadow-lg backdrop-blur-sm transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-125 group-hover:border-white/80 group-hover:bg-white/80 group-hover:shadow-xl sm:right-5 sm:top-5"
          style={{ color: brand.accent }}
        >
          <Icon size={22} className="transition-transform duration-700" />
        </span>

        <div className="absolute right-4 top-4 h-14 w-14 animate-pulse-ring rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ backgroundColor: brand.accent }} />
      </div>
    </button>
  );
}
