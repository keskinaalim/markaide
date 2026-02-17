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
        <div className="mb-6 inline-flex animate-float items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500 shadow-sm transition-transform hover:scale-105">
          <Sparkles size={14} className="text-primary" />
          ide'li markasını oluşturuyor
        </div>

        <h1 className="font-display text-6xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
          Geleceği
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Şekillendirenler</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl">
          ide ekosistemindeki markaların vizyonunu, teknoloji derinliğini ve tasarım odaklı yaklaşımını tek bir canlı vitrin içinde keşfedin.
        </p>
      </section>

      <section className="relative z-10 mx-auto mt-10 flex w-full max-w-5xl flex-col gap-5 px-4 sm:gap-6 sm:px-6">
        {brands.map((brand, index) => (
          <div key={brand.id} className="animate-float" style={{ animationDelay: `${index * 0.08}s` }}>
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
