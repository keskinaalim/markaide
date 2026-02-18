import BrandLogo from './BrandLogo';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandCard({ brand, onOpen }) {
  const Icon = brand.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(brand.id)}
      className="card-hover-glow group relative flex w-full overflow-hidden rounded-[2.5rem] border-2 border-white/80 bg-gradient-to-br from-white/90 to-white/70 p-6 text-left shadow-2xl backdrop-blur-xl transition-all duration-700 ease-spring hover:-translate-y-3 hover:scale-[1.015] hover:border-white hover:shadow-2xl sm:p-8"
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-all duration-700 group-hover:opacity-50" style={{ background: `radial-gradient(circle at 30% 30%, ${brand.accent}15, transparent 70%)` }} />

      <div className="shimmer-effect absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-40" style={{ background: `radial-gradient(circle, ${brand.accent}40, transparent)` }} />

      <div className="relative flex w-full items-start gap-7 sm:gap-9">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-blue-50 to-orange-50 shadow-xl shadow-slate-900/15 ring-2 ring-white transition-all duration-700 group-hover:scale-125 group-hover:shadow-2xl group-hover:ring-white/80 sm:h-32 sm:w-32" style={{ boxShadow: `0 20px 50px -15px ${brand.accent}30` }}>
          <div className="flex h-full w-full items-center justify-center p-4 transition-all duration-700 group-hover:rotate-6 group-hover:scale-110">
            <BrandLogo
              src={`/logolar/${brand.logo}`}
              alt={`${brand.name} logosu`}
              className="h-full w-full object-contain drop-shadow-lg"
              accent={brand.accent}
            />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-white/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <div className="min-w-0 flex-1 pr-14 sm:pr-20">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-3xl font-black tracking-tight text-slate-900 transition-all duration-500 sm:text-4xl">
              {brand.name}
            </h3>
            <Sparkles size={20} className="text-orange-500 opacity-0 transition-all duration-500 group-hover:opacity-100" />
          </div>
          <p className="mt-4 line-clamp-2 font-body text-base font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-700 sm:text-lg">
            {brand.summary}
          </p>
          <div
            className="mt-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.15em] transition-all duration-500 group-hover:gap-4"
            style={{ color: brand.accent }}
          >
            <span className="relative">
              Projeyi Keşfet
              <span className="absolute -bottom-1 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full rounded-full" style={{ backgroundColor: brand.accent }} />
            </span>
            <ArrowRight size={18} className="transition-all duration-500 group-hover:translate-x-2 group-hover:scale-125" />
          </div>
        </div>

        <span
          className="absolute right-4 top-4 grid h-16 w-16 place-content-center rounded-2xl border-2 border-white bg-gradient-to-br shadow-lg backdrop-blur-sm transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-150 group-hover:border-white/80 group-hover:shadow-2xl sm:right-5 sm:top-5"
          style={{ backgroundImage: `linear-gradient(135deg, ${brand.accent}20, ${brand.accent}05)` }}
        >
          <Icon size={24} className="transition-transform duration-700" style={{ color: brand.accent }} />
        </span>

        <div className="absolute right-4 top-4 h-16 w-16 animate-pulse-ring rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ backgroundColor: brand.accent }} />
      </div>
    </button>
  );
}
