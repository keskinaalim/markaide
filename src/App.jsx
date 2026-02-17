import { useMemo, useState } from 'react';
import { Sparkles, Dot } from 'lucide-react';
import BackgroundOrbs from './components/BackgroundOrbs';
import BrandCard from './components/BrandCard';
import BrandDetail from './components/BrandDetail';
import { brands } from './data/brands';

function HomeScreen({ onOpen }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-14 pt-16">
      <section className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-8 inline-flex animate-bounce-subtle items-center gap-2.5 rounded-full border border-blue-200/60 bg-gradient-to-r from-blue-50/90 to-sky-50/90 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600 shadow-lg shadow-blue-500/10 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
          <Sparkles size={16} className="animate-spin-slow text-blue-500" />
          ide'li markasını oluşturuyor
        </div>

        <h1 className="font-display text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="animate-fade-in-down text-slate-900">Geleceği</span>
          <br />
          <span className="text-gradient animate-fade-in-up inline-block text-7xl sm:text-8xl lg:text-9xl">
            Şekillendirenler
          </span>
        </h1>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-400/20 via-sky-400/20 to-cyan-400/20 blur-2xl" />
          <p className="relative animate-scale-in text-lg font-semibold leading-relaxed text-slate-600 sm:text-xl">
            ide ekosistemindeki markaların vizyonunu, teknoloji derinliğini ve tasarım odaklı yaklaşımını tek bir canlı vitrin içinde keşfedin.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl flex-col gap-6 px-4 sm:gap-7 sm:px-6">
        {brands.map((brand, index) => (
          <div
            key={brand.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
          >
            <BrandCard brand={brand} onOpen={onOpen} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default function App() {
  const [activeBrandId, setActiveBrandId] = useState(null);
  const activeBrand = useMemo(() => brands.find((item) => item.id === activeBrandId), [activeBrandId]);

  // Geçiş sınıfları spring benzeri hissi destekler.
  const viewClass = 'transform-gpu transition-all duration-700 ease-spring';

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-body text-slate-900">
      <BackgroundOrbs activeColor={activeBrand?.accent} />

      <div className={`${viewClass} ${activeBrand ? 'opacity-0 pointer-events-none translate-y-4 scale-[0.98] absolute inset-0' : 'opacity-100 translate-y-0 scale-100'} `}>
        <HomeScreen onOpen={setActiveBrandId} />
      </div>

      <div className={`${viewClass} ${activeBrand ? 'opacity-100 translate-y-0 scale-100' : 'pointer-events-none absolute inset-0 opacity-0 translate-y-8 scale-[1.02]'} `}>
        {activeBrand ? <BrandDetail brand={activeBrand} onBack={() => setActiveBrandId(null)} /> : null}
      </div>
    </div>
  );
}
