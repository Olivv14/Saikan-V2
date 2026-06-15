import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useFixedFooterVisibility() {
  const { pathname } = useLocation();
  const enabled = pathname === "/";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const hero = document.getElementById("hero");
    const footer = document.getElementById("connect");

    if (!hero || !footer) return;

    let heroInView = true;
    let footerInView = false;

    const update = () => {
      setIsVisible(!heroInView && !footerInView);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) {
            heroInView = entry.isIntersecting;
          }
          if (entry.target === footer) {
            footerInView = entry.isIntersecting;
          }
        }
        update();
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    observer.observe(footer);

    return () => observer.disconnect();
  }, [enabled]);

  return enabled && isVisible;
}
