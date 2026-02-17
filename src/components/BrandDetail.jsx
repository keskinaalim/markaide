import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Download,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Target,
  Eye
} from 'lucide-react';
import BrandLogo from './BrandLogo';

function ContentCard({ title, text, icon: Icon, accent, iconBg, borderColor }) {
  return (
    <article className={`glass hover-lift rounded-[2rem] p-7 ${borderColor ? `border-l-4 ${borderColor}` : ''}`}>
      <div className="mb-5 flex items-center gap-4">
        <span className="grid h-12 w-12 place-content-center rounded-2xl" style={{ backgroundColor: iconBg }}>
          <Icon size={20} style={{ color: accent }} />
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
      </div>
      <p className="text-lg leading-relaxed text-slate-600">{text}</p>
    </article>
  );
}

export default function BrandDetail({ brand, onBack }) {
  const [logoError, setLogoError] = useState(false);
  const BrandIcon = brand.icon;
  const hasPdf = Boolean(brand.pdf);

  return (
    <div className="w-full min-h-screen pb-12 pt-0">
      <nav className="sticky top-0 z-40">
        <div className="glass flex w-full items-center justify-between rounded-none px-4 py-3 shadow-sm sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Geri
          </button>

          <div className="flex items-center gap-2">
            <div
              className="grid h-8 w-8 place-content-center rounded-lg text-white"
              style={{ backgroundColor: brand.accent }}
            >
              <BrandIcon size={16} />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">{brand.name}</span>
          </div>

          <div className="w-[58px]" aria-hidden="true" />
        </div>
      </nav>

      <main className="mt-4 w-full px-4 sm:px-6 lg:px-10">
        <section className="relative mb-8 overflow-hidden rounded-[2.5rem] py-10 shadow-2xl md:py-16 px-8 md:px-12" style={{ background: `linear-gradient(135deg, ${brand.accent} 0%, #3b82f6 55%, #8b5cf6 100%)` }}>
          <div className="hero-blob absolute right-[-4rem] top-[-2rem] h-80 w-80 rounded-full bg-white/25" />
          <div className="hero-blob absolute bottom-[-8rem] right-12 h-72 w-72 rounded-full bg-indigo-200/30" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div className="text-white">
              <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] backdrop-blur-md">
                {brand.categoryTag || 'Yapay Zeka Destekli Girişim'}
              </div>
              <h1 className="font-display text-5xl font-extrabold tracking-tight md:text-7xl">{brand.name}</h1>
              <p className="mt-3 text-2xl font-medium italic text-blue-100">"{brand.slogan}"</p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-blue-50/90">{brand.summary}</p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="group relative h-64 w-64 rotate-3 overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 shadow-2xl transition-transform duration-500 hover:rotate-0 md:h-80 md:w-80">
                {!logoError ? (
                  <BrandLogo
                    src={`/logolar/${brand.logo}`}
                    alt={`${brand.name} logosu`}
                    className="h-full w-full rounded-2xl object-contain bg-white/95 p-6"
                    accent={brand.accent}
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="grid h-full w-full place-content-center rounded-2xl bg-slate-800 text-white/85">
                    <BrandIcon size={84} />
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10" />
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
            <aside className="glass rounded-[2.5rem] p-8 lg:sticky lg:top-24">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">Kaynaklar ve İletişim</h2>

              <div className="mt-8 space-y-4">
                {hasPdf ? (
                  <a
                    href={brand.pdf}
                    download
                    className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-100 p-5 transition-all hover:bg-slate-200"
                  >
                    <span className="flex items-center gap-3 font-semibold text-slate-800">
                      <span className="grid h-10 w-10 place-content-center rounded-xl bg-red-100 text-red-600">
                        <Download size={18} />
                      </span>
                      Sunumu İndir
                    </span>
                    <Download size={16} className="text-slate-400 transition-transform group-hover:translate-y-0.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="flex w-full cursor-not-allowed items-center justify-between rounded-2xl border border-slate-200 bg-slate-100 p-5 text-slate-400"
                  >
                    <span className="flex items-center gap-3 font-semibold">
                      <span className="grid h-10 w-10 place-content-center rounded-xl bg-slate-200">
                        <Download size={18} />
                      </span>
                      Sunumu İndir
                    </span>
                    <Download size={16} />
                  </button>
                )}

                <a
                  href={brand.contact}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl px-5 py-4 font-bold text-white shadow-lg transition-all active:scale-95"
                  style={{ backgroundColor: brand.accent, boxShadow: `0 10px 24px -12px ${brand.accent}` }}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <span className="relative z-10 flex items-center gap-2">
                    <ExternalLink size={16} />
                    Web Sitesini Ziyaret Et
                  </span>
                </a>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-slate-400">Sosyal Medya</p>
                <div className="flex gap-4">
                  <a href="#" className="glass grid h-12 w-12 place-content-center rounded-xl transition-all hover:bg-primary hover:text-white">
                    <Mail size={18} />
                  </a>
                  <a href="#" className="glass grid h-12 w-12 place-content-center rounded-xl transition-all hover:bg-primary hover:text-white">
                    <Sparkles size={18} />
                  </a>
                  <a href="#" className="glass grid h-12 w-12 place-content-center rounded-xl transition-all hover:bg-primary hover:text-white">
                    <Eye size={18} />
                  </a>
                </div>
              </div>
            </aside>

            <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white">
              <div className="absolute -bottom-6 -right-5 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-150" />
              <h3 className="font-display text-xl font-bold">Geleceği Şekillendirenler</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                İnovasyon galerisine dönün ve diğer startup projelerini keşfedin.
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
              >
                Galeriyi Görüntüle
                <ArrowRight size={14} />
              </button>
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
