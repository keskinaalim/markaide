import BrandLogo from './BrandLogo';
import { ArrowRight } from 'lucide-react';

export default function BrandCard({ brand, onOpen }) {
  const Icon = brand.icon;

  return (
    <button
      type="button"
      onClick={() => onOpen(brand.id)}
      className="group relative flex w-full overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/75 p-5 text-left shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all duration-500 ease-spring hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(15,23,42,0.4)] sm:p-6"
    >
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${brand.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-35`}
      />

      <div className="relative flex w-full items-start gap-6 sm:gap-8">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_-12px_rgba(0,0,0,0.15)] sm:h-28 sm:w-28">
          <div className="flex h-full w-full items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105">
            <BrandLogo
              src={`/logolar/${brand.logo}`}
              alt={`${brand.name} logosu`}
              className="h-full w-full object-contain"
              accent={brand.accent}
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 pr-12 sm:pr-16">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {brand.name}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-sm font-medium leading-relaxed text-slate-500 sm:text-base">
            {brand.summary}
          </p>
          <div
            className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-2.5"
            style={{ color: brand.accent }}
          >
            <span>Projeyi İncele</span>
            <ArrowRight size={14} className="transition-transform" />
          </div>
        </div>

        <span
          className="absolute right-0 top-0 grid h-10 w-10 place-content-center rounded-2xl border border-white/60 bg-white/40 text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
          style={{ color: brand.accent }}
        >
          <Icon size={18} />
        </span>
      </div>
    </button>
  );
}
