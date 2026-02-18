import { useMemo, useState } from 'react';
import { Sparkles, Dot, Zap, Rocket } from 'lucide-react';
import BackgroundOrbs from './components/BackgroundOrbs';
import BrandCard from './components/BrandCard';
import BrandDetail from './components/BrandDetail';
import { brands } from './data/brands';

function HomeScreen({ onOpen }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden pb-16 pt-0">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-blue-50 to-transparent pt-10 pb-16">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/15 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-flex animate-bounce-subtle items-center gap-2.5 rounded-full border-2 border-emerald-200/60 bg-gradient-to-r from-emerald-50/95 to-blue-50/95 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-700 shadow-xl shadow-emerald-500/10 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/20">
            <Zap size={18} className="animate-spin-slow text-orange-500" />
            Yeni Nesil İnovasyon Vitrin
          </div>

          <div className="mb-12">
            <h1 className="font-display text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl xl:text-9xl">
              <span className="animate-fade-in-down block text-slate-900">Geleceği</span>
              <span className="animate-fade-in-up relative inline-block mt-2">
                <span className="relative">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-emerald-400 via-blue-400 to-orange-400 opacity-60" />
                  <span className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Şekillendirenler
                  </span>
                </span>
              </span>
            </h1>
          </div>

          <div className="relative mx-auto mb-4 max-w-3xl">
            <p className="animate-scale-in text-lg font-semibold leading-relaxed text-slate-700 sm:text-xl lg:text-2xl">
              ide ekosistemindeki en yenilikçi markaları keşfedin. Vizyoner girişimler, keskin teknoloji ve tasarımla buluşan proje yumağı.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 shadow-md backdrop-blur-sm">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-sm font-bold text-slate-700">{brands.length} Proje</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 shadow-md backdrop-blur-sm">
              <Rocket size={16} className="text-orange-500" />
              <span className="text-sm font-bold text-slate-700">Yenilikçi Çözümler</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 shadow-md backdrop-blur-sm">
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-sm font-bold text-slate-700">YZ Destekli</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'backwards' }}
            >
              <BrandCard brand={brand} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-blue-600 to-orange-500 p-12 text-white shadow-2xl sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl font-black tracking-tight sm:text-5xl">
              Sende Hazır mısın?
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium text-white/90">
              ide ekosisteminin en gelişmiş markalarını keşfet. Her birinin hikayesi, teknolojisi ve vizyonunu yakından gör.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-white/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105">
                Projeleri Gez
                <Rocket size={20} />
              </button>
            </div>
          </div>
        </div>
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
