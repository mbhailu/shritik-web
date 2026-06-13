'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const INTERVAL = 4500;
const FLASH_PEAK = 185;
const FLASH_DURATION = 580;

const slides = [
  { src: '/images/slide-5.png', label: 'Premium Cashew Kernels',   sub: 'W180–W450 · All Grades & Splits'    },
  { src: '/images/slide-8.png', label: 'Fresh Cashew Harvest',     sub: 'From Orchard to Global Markets'     },
  { src: '/images/slide-1.png', label: 'Dehydrated Red Onion',     sub: 'Powder · Flakes · Granules'          },
  { src: '/images/slide-2.png', label: 'Dehydrated Garlic',        sub: 'Powder · Flakes · Granules'          },
  { src: '/images/slide-9.png', label: 'Premium Raw Cashews',      sub: 'Whole Kernels · Natural & Pure'      },
  { src: '/images/slide-4.png', label: 'Moringa Leaf Powder',      sub: 'Nutrient-Rich Superfood Export'      },
  { src: '/images/slide-3.png', label: 'Dehydrated Beetroot',      sub: 'Powder & Flakes'                     },
  { src: '/images/slide-7.png', label: 'Cashew Processing Line',   sub: 'In-House Manufacturing'              },
  { src: '/images/slide-6.png', label: 'GMP Processing Facility',  sub: 'Certified Quality Controls'          },
  { src: '/images/slide-10.png', label: 'Processing Equipment',    sub: 'State-of-the-Art Machinery'          },
];

export default function HeroSlideshow() {
  const [current, setCurrent]     = useState(0);
  const [flashing, setFlashing]   = useState(false);
  const [flashId, setFlashId]     = useState(0);
  const [progress, setProgress]   = useState(0);

  const timerRef        = useRef<ReturnType<typeof setTimeout>>(null);
  const progressRef     = useRef<ReturnType<typeof setInterval>>(null);
  const progressStart   = useRef(Date.now());
  const isTransitioning = useRef(false);

  const stopProgress = () => { if (progressRef.current) clearInterval(progressRef.current); };

  const startProgress = useCallback(() => {
    stopProgress();
    setProgress(0);
    progressStart.current = Date.now();
    progressRef.current = setInterval(() => {
      const pct = Math.min(((Date.now() - progressStart.current) / INTERVAL) * 100, 100);
      setProgress(pct);
    }, 30);
  }, []);

  const transition = useCallback((targetIndex?: number) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    clearTimeout(timerRef.current!);
    stopProgress();
    setProgress(100);
    setFlashing(true);
    setFlashId(id => id + 1);

    setTimeout(() => {
      setCurrent(c => targetIndex !== undefined ? targetIndex : (c + 1) % slides.length);
    }, FLASH_PEAK);

    setTimeout(() => {
      setFlashing(false);
      isTransitioning.current = false;
      startProgress();
    }, FLASH_DURATION);
  }, [startProgress]);

  useEffect(() => {
    startProgress();
    return () => { stopProgress(); clearTimeout(timerRef.current!); };
  }, [startProgress]);

  useEffect(() => {
    timerRef.current = setTimeout(() => transition(), INTERVAL);
    return () => clearTimeout(timerRef.current!);
  }, [current, transition]);

  const nextIdx = (current + 1) % slides.length;
  const kbClass = `slide-kb-${current % 3}`;

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)]">

      {/* Active image with ken burns */}
      <div key={`img-${current}`} className={`absolute inset-0 ${kbClass}`}>
        <Image
          src={slides[current].src}
          alt={slides[current].label}
          fill
          className="object-cover"
          priority={current === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 700px"
        />
      </div>

      {/* Preload next image silently */}
      <div className="absolute inset-0 opacity-0 pointer-events-none" aria-hidden>
        <Image
          src={slides[nextIdx].src}
          alt=""
          fill
          className="object-cover"
          sizes="1px"
        />
      </div>

      {/* Vignette / gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />

      {/* Flash overlay */}
      {flashing && (
        <div key={`flash-${flashId}`} className="absolute inset-0 z-30 slide-flash pointer-events-none" />
      )}

      {/* Bottom label + progress */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
        <div key={`lbl-${current}`} className="slide-label-enter">
          <p className="text-[#f0c040] text-[10px] font-black uppercase tracking-[0.22em] mb-1 drop-shadow">
            {slides[current].sub}
          </p>
          <h3 className="text-white font-serif text-xl font-bold leading-snug drop-shadow-md">
            {slides[current].label}
          </h3>
        </div>
        {/* Progress bar */}
        <div className="mt-3 h-[2px] rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded-full"
            style={{ width: `${progress}%`, transition: 'width 30ms linear' }}
          />
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => transition(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full cursor-pointer transition-all duration-300 ${
              i === current
                ? 'w-2 h-7 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]'
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
