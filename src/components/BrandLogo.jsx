import { useEffect, useState } from 'react';

export default function BrandLogo({ src, alt, accent, className = '', ...imgProps }) {
  const isSvg = src.endsWith('.svg');
  const [inlineSvg, setInlineSvg] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadInlineSvg() {
      if (!isSvg) {
        setInlineSvg('');
        return;
      }

      try {
        const response = await fetch(src);
        const raw = await response.text();

        if (!ignore) {
          // SVG dosyasi currentColor kullaniyorsa marka rengini dogrudan devralir.
          setInlineSvg(raw);
        }
      } catch {
        if (!ignore) setInlineSvg('');
      }
    }

    loadInlineSvg();

    return () => {
      ignore = true;
    };
  }, [src, isSvg]);

  if (isSvg && inlineSvg) {
    return (
      <div
        className={className}
        style={{ color: accent }}
        aria-label={alt}
        role="img"
        dangerouslySetInnerHTML={{ __html: inlineSvg }}
      />
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" {...imgProps} />;
}
