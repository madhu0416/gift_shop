'use client';

export type IconName =
  | 'search' | 'map' | 'user' | 'heart' | 'cart' | 'menu' | 'close' | 'arrow'
  | 'truck' | 'shield' | 'sparkle' | 'building' | 'gift' | 'star' | 'clock'
  | 'phone' | 'mail' | 'chevron' | 'filter' | 'minus' | 'plus' | 'check';

export function Icon({ name, size = 20, stroke = 1.8, className = '' }: { name: IconName; size?: number; stroke?: number; className?: string }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className, 'aria-hidden': true };
  switch (name) {
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>;
    case 'map': return <svg {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'user': return <svg {...p}><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>;
    case 'heart': return <svg {...p}><path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/></svg>;
    case 'cart': return <svg {...p}><path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L20 8H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>;
    case 'menu': return <svg {...p}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case 'close': return <svg {...p}><path d="m6 6 12 12M18 6 6 18"/></svg>;
    case 'arrow': return <svg {...p}><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
    case 'truck': return <svg {...p}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
    case 'shield': return <svg {...p}><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>;
    case 'sparkle': return <svg {...p}><path d="m12 3 1.5 6.5L20 12l-6.5 1.5L12 20l-1.5-6.5L4 12l6.5-2.5L12 3Z"/><path d="m19 3 .5 2.5L22 6l-2.5.5L19 9l-.5-2.5L16 6l2.5-.5L19 3Z"/></svg>;
    case 'building': return <svg {...p}><path d="M4 21V5l8-3 8 3v16M4 21h16M8 9h2M14 9h2M8 13h2M14 13h2M8 17h2M14 17h2"/></svg>;
    case 'gift': return <svg {...p}><path d="M3 10h18v11H3zM12 10v11M2 7h20v3H2z"/><path d="M12 7H8.5A2.5 2.5 0 1 1 11 4.5L12 7Zm0 0h3.5A2.5 2.5 0 1 0 13 4.5L12 7Z"/></svg>;
    case 'star': return <svg {...p}><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/></svg>;
    case 'clock': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'phone': return <svg {...p}><path d="M6 3h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2v3c0 1.1-.9 2-2 2C10.7 20 4 13.3 4 5a2 2 0 0 1 2-2Z"/></svg>;
    case 'mail': return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
    case 'chevron': return <svg {...p}><path d="m6 9 6 6 6-6"/></svg>;
    case 'filter': return <svg {...p}><path d="M4 6h16M7 12h10M10 18h4"/></svg>;
    case 'minus': return <svg {...p}><path d="M5 12h14"/></svg>;
    case 'plus': return <svg {...p}><path d="M12 5v14M5 12h14"/></svg>;
    case 'check': return <svg {...p}><path d="m5 12 4 4L19 6"/></svg>;
  }
}
