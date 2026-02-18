import BrandLogo from './BrandLogo';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandCard({ brand, onOpen }) {
  const Icon = brand.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(brand.id)}
      className="card-hover-glow group relative flex h-full flex-col overflow-hidden rounded-[2rem] border-2 border-white/80 bg-gradient-to-br from-white/90 to-white/70 p-5 text-left shadow-xl backdrop-blur-xl transition-all duration-700 ease-spring hover:-translate-y-2 hover:scale-[1.02] hover:border-white hover:shadow-2xl sm:p-6"
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-all duration-700 group-hover:opacity-50" style={{ background: `radial-gradient(circle at 30% 30%, ${brand.accent}15, transparent 70%)` }} />

      <div className="shimmer-effect absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-40" style={{ background: `radial-gradient(circle, ${brand.accent}40, transparent)` }} />

      <div className="relative mb-4 flex items-start justify-between gap-3">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-blue-50 to-orange-50 shadow-lg shadow-slate-900/10 ring-2 ring-white transition-all duration-700 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-white/80" style={{ boxShadow: `0 12px 30px -10px ${brand.accent}30` }}>
          <div className="flex h-full w-full items-center justify-center p-3 transition-all duration-700 group-hover:rotate-6 group-hover:scale-105">
            <BrandLogo
              src={`/logolar/${brand.logo}`}
              alt={`${brand.name} logosu`}
              className="h-full w-full object-contain drop-shadow-lg"
              accent={brand.accent}
            />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-white/50 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        <span
          className="grid h-12 w-12 shrink-0 place-content-center rounded-xl border-2 border-white bg-gradient-to-br shadow-md backdrop-blur-sm transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-125 group-hover:border-white/80 group-hover:shadow-lg"
          style={{ backgroundImage: `linear-gradient(135deg, ${brand.accent}20, ${brand.accent}05)` }}
        >
          <Icon size={20} className="transition-transform duration-700" style={{ color: brand.accent }} />
        </span>

        <div className="absolute right-5 top-5 h-12 w-12 animate-pulse-ring rounded-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ backgroundColor: brand.accent }} />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-xl font-black tracking-tight text-slate-900 transition-all duration-500 sm:text-2xl line-clamp-1">
            {brand.name}
          </h3>
          <Sparkles size={16} className="text-orange-500 opacity-0 transition-all duration-500 group-hover:opacity-100 shrink-0" />
        </div>
        <p className="mt-2 line-clamp-2 font-body text-sm font-semibold leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-700">
          {brand.summary}
        </p>
      </div>

      <div
        className="mt-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] transition-all duration-500 group-hover:gap-3"
        style={{ color: brand.accent }}
      >
        <span className="relative">
          Keşfet
          <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full rounded-full" style={{ backgroundColor: brand.accent }} />
        </span>
        <ArrowRight size={14} className="transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110 shrink-0" />
      </div>
    </button>
  );
}
