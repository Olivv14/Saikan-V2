import type { ImgHTMLAttributes } from "react";

type SketchImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

function sketchVariants(src: string) {
  if (!src.startsWith("/assets/sketch/")) {
    return { display: src, srcSet: undefined as string | undefined };
  }

  const k4 = src.replace("/assets/sketch/", "/assets/sketch/4k/");

  return {
    display: src,
    srcSet: `${src} 1x, ${k4} 2x`,
  };
}

/** Sketch landing images with 4K / HD srcSet from /assets/sketch/4k/ and /hd/. */
export default function SketchImage({
  src,
  srcSet,
  sizes,
  className,
  alt = "",
  ...props
}: SketchImageProps) {
  const variants = sketchVariants(src);

  return (
    <img
      src={variants.display}
      srcSet={srcSet ?? variants.srcSet}
      sizes={sizes ?? "(max-width: 430px) 430px, 430px"}
      alt={alt}
      className={className ? `sketch-img ${className}` : "sketch-img"}
      decoding="async"
      {...props}
    />
  );
}
