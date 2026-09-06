'use client';
import { useState } from 'react';
import Image from 'next/image';
import { localFallback, remoteImages } from '@/lib/data';

export function ResponsiveImage({ name, alt, className = '', priority = false }: { name: string; alt: string; className?: string; priority?: boolean }) {
  const localPhoto = `/images/photos/${name}.jpg`;
  const remote = remoteImages[name];
  const fallback = localFallback[name] || '/images/custom-hamper.svg';

  // Try the locally-downloaded photo first, fall back to the remote Pexels URL,
  // then to a local SVG placeholder if neither loads.
  const [src, setSrc] = useState(localPhoto);
  const isSvgFallback = src === fallback && src.endsWith('.svg');

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 800px) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
      className={className}
      priority={priority}
      unoptimized={isSvgFallback}
      onError={() => {
        if (src === localPhoto && remote) {
          setSrc(remote);
        } else if (src !== fallback) {
          setSrc(fallback);
        }
      }}
    />
  );
}
