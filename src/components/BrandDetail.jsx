import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Target,
  Eye,
  Mail
} from 'lucide-react';
import BrandLogo from './BrandLogo';

function ContentCard({ title, text, icon: Icon, accent, iconBg, borderColor }) {
  return (
    <article className={`glass-strong group relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${borderColor ? `border-l-4 ${borderColor}` : ''}`}>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundColor: accent }} />

      <div className="relative mb-6 flex items-center gap-4">
        <span className="grid h-14 w-14 place-content-center rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ backgroundColor: iconBg }}>
          <Icon size={22} style={{ color: accent }} />
        </span>
        <h3 className="font-display text-2xl font-black tracking-tight text-slate-900">{title}</h3>
      </div>
      <p className="relative text-lg font-medium leading-relaxed text-slate-700">{text}</p>
    </article>
  );
}

export default function BrandDetail({ brand, onBack }) {
  const [logoError, setLogoError] = useState(false);
  const BrandIcon = brand.icon;
  const hasPdf = Boolean(brand.pdf);

  return (
    <div className="w-full min-h-screen pb-12 pt-0">
      <nav className="sticky top-0 z-40 animate-fade-in-down">
        <div className="glass-strong flex w-full items-center justify-between rounded-none px-4 py-4 shadow-lg backdrop-blur-2xl sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 transition-all hover:bg-slate-200 hover:text-slate-900"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Geri
          </button>

          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-content-center rounded-xl text-white shadow-lg transition-transform hover:scale-110"
              style={{ backgroundColor: brand.accent }}
            >
              <BrandIcon size={18} />
            </div>
            <span className="font-display text-xl font-black tracking-tight text-slate-900">{brand.name}</span>
          </div>

          <div className="w-[72px]" aria-hidden="true" />
        </div>
      </nav>

      <main className="mt-4 w-full px-4 sm:px-6 lg:px-10">
        <section className="animate-scale-in relative mb-10 overflow-hidden rounded-[3rem] px-8 py-12 shadow-2xl md:px-12 md:py-16" style={{ background: `linear-gradient(135deg, ${brand.accent} 0%, #3b82f6 45%, #6366f1 75%, #8b5cf6 100%)`, backgroundSize: '200% 200%', animation: 'gradient-shift 15s ease infinite' }}>
          <div className="hero-blob absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="hero-blob absolute -bottom-24 right-16 h-80 w-80 rounded-full bg-white/15" />
          <div className="hero-blob absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div className="text-white">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/15 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/25">
                <Sparkles size={14} className="animate-spin-slow" />
                {brand.categoryTag || 'Yapay Zeka Destekli Girişim'}
              </div>
              <h1 className="font-display text-6xl font-black tracking-tight drop-shadow-2xl md:text-8xl">{brand.name}</h1>
              <p className="mt-4 text-2xl font-bold italic text-white/95 drop-shadow-lg md:text-3xl">"{brand.slogan}"</p>
              <p className="mt-10 max-w-xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-md">{brand.summary}</p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="group relative h-72 w-72 overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-900 p-10 shadow-2xl ring-2 ring-white/20 transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] md:h-96 md:w-96">
                {!logoError ? (
                  <BrandLogo
                    src={`/logolar/${brand.logo}`}
                    alt={`${brand.name} logosu`}
                    className="h-full w-full rounded-3xl bg-white/98 p-8 object-contain shadow-xl ring-1 ring-slate-900/10"
                    accent={brand.accent}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="grid h-full w-full place-content-center rounded-3xl bg-slate-800 text-white/90">
                    <BrandIcon size={96} />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-8 md:col-span-2">
            <ContentCard
              title="Ürünümüz Nasıl Çalışır?"
              text={brand.howItWorks}
              icon={Sparkles}
              accent={brand.accent}
              iconBg={`${brand.accent}20`}
            />

            <ContentCard
              title="Fikrimiz Nasıl Ortaya Çıktı?"
              text={brand.ideaSource}
              icon={Lightbulb}
              accent="#d97706"
              iconBg="#fef3c7"
            />

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <ContentCard
                title="Vizyon"
                text={brand.vision}
                icon={Eye}
                accent={brand.accent}
                iconBg={`${brand.accent}20`}
                borderColor="border-l-blue-500"
              />
              <ContentCard
                title="Misyon"
                text={brand.mission}
                icon={Target}
                accent="#a855f7"
                iconBg="#f3e8ff"
                borderColor="border-l-purple-500"
              />
            </div>
          </div>

          <div className="space-y-8">
            <aside className="glass-strong rounded-[3rem] p-8 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-black tracking-tight text-slate-900">Kaynaklar ve İletişim</h2>

              <div className="mt-8 space-y-4">
                {hasPdf ? (
                  <a
                    href={brand.pdf}
                    download
                    className="group flex w-full items-center justify-between overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 shadow-md transition-all hover:scale-[1.02] hover:border-slate-300 hover:shadow-xl"
                  >
                    <span className="flex items-center gap-3 font-bold text-slate-800">
                      <span className="grid h-12 w-12 place-content-center rounded-xl bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-12">
                        <Download size={20} />
                      </span>
                      Sunumu İndir
                    </span>
                    <Download size={18} className="text-slate-500 transition-all group-hover:translate-y-1 group-hover:text-red-600" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex w-full cursor-not-allowed items-center justify-between rounded-2xl border-2 border-slate-200 bg-slate-50 p-5 text-slate-400 opacity-60"
                  >
                    <span className="flex items-center gap-3 font-bold">
                      <span className="grid h-12 w-12 place-content-center rounded-xl bg-slate-200">
                        <Download size={20} />
                      </span>
                      Sunumu İndir
                    </span>
                    <Download size={18} />
                  </button>
                )}

                <a
                  href={brand.contact}
                  target="_blank"
                  rel="noreferrer"
                  className="shimmer-effect group relative flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-5 font-black text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
                  style={{ backgroundColor: brand.accent, boxShadow: `0 15px 35px -10px ${brand.accent}80` }}
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    <ExternalLink size={18} className="transition-transform group-hover:rotate-12" />
                    Web Sitesini Ziyaret Et
                  </span>
                </a>
              </div>

              <div className="mt-10 border-t-2 border-slate-200 pt-8">
                <p className="mb-5 text-xs font-extrabold uppercase tracking-widest text-slate-400">Sosyal Medya</p>
                <div className="flex gap-3">
                  <a href="#" className="glass group grid h-14 w-14 place-content-center rounded-xl shadow-md transition-all hover:scale-110 hover:shadow-lg" style={{ hover: { backgroundColor: brand.accent } }}>
                    <Mail size={20} className="text-slate-600 transition-colors group-hover:text-blue-600" />
                  </a>
                  <a href="#" className="glass group grid h-14 w-14 place-content-center rounded-xl shadow-md transition-all hover:scale-110 hover:shadow-lg">
                    <Sparkles size={20} className="text-slate-600 transition-colors group-hover:text-blue-600" />
                  </a>
                  <a href="#" className="glass group grid h-14 w-14 place-content-center rounded-xl shadow-md transition-all hover:scale-110 hover:shadow-lg">
                    <Eye size={20} className="text-slate-600 transition-colors group-hover:text-blue-600" />
                  </a>
                </div>
              </div>
            </aside>

            <div className="group relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 animate-pulseGlow rounded-full blur-3xl" style={{ backgroundColor: brand.accent }} />
              <div className="relative">
                <h3 className="font-display text-2xl font-black">Geleceği Şekillendirenler</h3>
                <p className="mt-4 text-base font-medium leading-relaxed text-slate-300">
                  İnovasyon galerisine dönün ve diğer startup projelerini keşfedin.
                </p>
                <button
                  type="button"
                  onClick={onBack}
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-sm transition-all hover:gap-3 hover:bg-white/20"
                >
                  Galeriyi Görüntüle
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 py-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2 opacity-60">
            <BrandIcon size={16} style={{ color: brand.accent }} />
            <span className="font-display font-extrabold">{brand.name}</span>
          </div>
          <p className="text-sm text-slate-500">© 2024 {brand.name}. Tüm hakları saklıdır. Sağlığınız bizim önceliğimiz.</p>
        </footer>
      </main>
    </div>
  );
}
