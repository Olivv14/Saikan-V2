import { useCallback, useEffect, useRef, useState } from "react";

export function useSnapCarousel<T extends HTMLElement>(slideSelector: string) {
  const trackRef = useRef<T>(null);
  const [active, setActive] = useState(0);

  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return -1;

    const slides = Array.from(track.querySelectorAll<HTMLElement>(slideSelector));
    if (!slides.length) return -1;

    const center = track.scrollLeft + track.clientWidth / 2;
    let best = Infinity;
    let index = 0;

    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < best) {
        best = dist;
        index = i;
      }
    });

    return index;
  }, [slideSelector]);

  const updateActive = useCallback(() => {
    const index = getNearestIndex();
    if (index >= 0) setActive(index);
  }, [getNearestIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const initialRaf = requestAnimationFrame(updateActive);
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          updateActive();
        });
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
      cancelAnimationFrame(initialRaf);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateActive]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const slide = track.querySelectorAll<HTMLElement>(slideSelector)[index];
      if (!slide) return;

      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActive(index);
    },
    [slideSelector],
  );

  return { active, getNearestIndex, goTo, setActive, trackRef, updateActive };
}
