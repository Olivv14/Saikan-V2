import { useEffect, type ReactNode, type RefObject } from "react";
import { useSnapCarousel } from "../../hooks/useSnapCarousel";

export type SnapCarouselRenderState = {
  active: number;
  goTo: (index: number) => void;
  trackRef: RefObject<HTMLDivElement | null>;
};

export type SnapCarouselProps = {
  ariaLabel: string;
  dotLabel: string;
  slideCount: number;
  slideClassName: string;
  children: (state: SnapCarouselRenderState) => ReactNode;
  className?: string;
  trackClassName?: string;
  dotsClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
  enableMouseDrag?: boolean;
  hideInactiveSlides?: boolean;
  dotsAriaHidden?: boolean;
};

export function SnapCarousel({
  ariaLabel,
  dotLabel,
  slideCount,
  slideClassName,
  children,
  className = "",
  trackClassName = "",
  dotsClassName = "",
  dotClassName = "",
  activeDotClassName = "active",
  enableMouseDrag = false,
  hideInactiveSlides = false,
  dotsAriaHidden = false,
}: SnapCarouselProps) {
  const { active, getNearestIndex, goTo, trackRef } =
    useSnapCarousel<HTMLDivElement>(`.${slideClassName}`);

  useEffect(() => {
    if (!enableMouseDrag) return undefined;

    const track = trackRef.current;
    if (!track) return undefined;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      isDown = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add("is-dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDown) return;
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 6) moved = true;
      if (!moved) return;
      track.style.scrollSnapType = "none";
      track.scrollLeft = startScroll - dx;
    };

    const endDrag = () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("is-dragging");
      if (!moved) return;
      track.style.scrollSnapType = "";
      const index = getNearestIndex();
      if (index >= 0) goTo(index);
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    track.addEventListener("click", onClickCapture, true);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      track.removeEventListener("click", onClickCapture, true);
    };
  }, [enableMouseDrag, getNearestIndex, goTo, trackRef]);

  return (
    <div
      className={`landing-carousel ${className}`.trim()}
      data-active-slide={active}
      data-hide-inactive-slides={hideInactiveSlides ? "true" : undefined}
      aria-label={ariaLabel}
    >
      <div className={`landing-carousel__track ${trackClassName}`.trim()} ref={trackRef}>
        {children({ active, goTo, trackRef })}
      </div>

      <div
        className={`landing-carousel__dots ${dotsClassName}`.trim()}
        role={dotsAriaHidden ? undefined : "tablist"}
        aria-label={dotsAriaHidden ? undefined : `${dotLabel} navigation`}
        aria-hidden={dotsAriaHidden ? "true" : undefined}
      >
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            type="button"
            key={index}
            className={`${dotClassName} ${index === active ? activeDotClassName : ""}`.trim()}
            aria-label={`Go to ${dotLabel} ${index + 1}`}
            aria-selected={dotsAriaHidden ? undefined : index === active}
            role={dotsAriaHidden ? undefined : "tab"}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
