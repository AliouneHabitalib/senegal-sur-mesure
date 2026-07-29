import { useEffect, useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const total = images.length;
  const [fade, setFade] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const change = useCallback(
    (next: number) => {
      const n = (next + total) % total;
      setFade(true);
      requestAnimationFrame(() => {
        onIndexChange(n);
        requestAnimationFrame(() => setFade(false));
      });
    },
    [onIndexChange, total]
  );

  const prev = useCallback(() => change(index - 1), [change, index]);
  const next = useCallback(() => change(index + 1), [change, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse d'images"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Image précédente"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Image suivante"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-smooth hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
            {index + 1} / {total}
          </div>
        </>
      )}

      <figure
        className="relative flex max-h-[92vh] w-full max-w-[92vw] flex-col items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) { dx > 0 ? prev() : next(); }
          touchStartX.current = null;
        }}
      >
        <img
          src={current.src}
          alt={current.alt}
          className={cn(
            "max-h-[82vh] w-auto max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-200",
            fade ? "opacity-0" : "opacity-100"
          )}
        />
        {current.alt && (
          <figcaption className="mt-3 max-w-2xl text-center text-sm text-white/80">
            {current.alt}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    setIndex,
  };
}
