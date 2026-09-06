import type React from 'react';
import Link from 'next/link';
import { Card } from '@/lib/data';
import { ResponsiveImage } from './ResponsiveImage';
import { Icon } from './Icon';

export function Section({ children, tone='white', className='' }: {children:React.ReactNode;tone?:'white'|'pink'|'blue'|'cream';className?:string}) { return <section className={`section ${tone} ${className}`}>{children}</section> }
export function SectionHeading({ title, subtitle, href }: {title:string;subtitle?:string;href?:string}) { return <div className="section-heading"><div><h2>{title}</h2>{subtitle&&<p>{subtitle}</p>}</div>{href&&<Link href={href}>View All <Icon name="arrow" size={15}/></Link>}</div> }
export function CircleRail({items}:{items:Card[]}) { return <div className="circle-rail">{items.map(item=><Link href={item.href||'#'} key={item.key} className="circle-item"><span><ResponsiveImage name={item.image||item.key} alt={item.title}/></span><b>{item.title}</b>{item.subtitle&&<small>{item.subtitle}</small>}</Link>)}</div> }
export function ImageCardRail({items,wide=false}:{items:Card[];wide?:boolean}) { return <div className={`image-rail ${wide?'wide':''}`}>{items.map(item=><Link href={item.href||'#'} key={item.key} className="image-card"><ResponsiveImage name={item.image||item.key} alt={item.title}/><div><b>{item.title}</b>{item.subtitle&&<span>{item.subtitle}</span>}<em>Explore <Icon name="arrow" size={13}/></em></div></Link>)}</div> }
export function ProductCard({item}:{item:Card}) { return <Link href={item.href||'#'} className="product-card"><div className="product-media">{item.tag&&<span className="discount">{item.tag}</span>}<button className="wish" aria-label="Wishlist"><Icon name="heart" size={18}/></button><ResponsiveImage name={item.image||item.key} alt={item.title}/></div><div className="product-info"><div className="rating"><Icon name="star" size={12}/> 4.8 · <span>Top pick</span></div><h3>{item.title}</h3>{item.price&&<div className="price"><b>₹{item.price.toLocaleString('en-IN')}</b>{item.oldPrice&&<del>₹{item.oldPrice.toLocaleString('en-IN')}</del>}</div>}<small>Free shipping available</small></div></Link> }
export function ProductGrid({items,cols=6}:{items:Card[];cols?:4|5|6}) { return <div className={`product-grid cols-${cols}`}>{items.map(item=><ProductCard key={item.key} item={item}/>)}</div> }
export function TrustStrip(){ const items=[['truck','Same Day Delivery','Across major cities'],['shield','100% Secure Payments','Safe checkout'],['star','Premium Quality','Curated with care'],['building','Corporate Gifting','Solutions for teams'] as const]; return <Section tone="blue"><div className="trust-grid full-shell">{items.map(([icon,title,sub])=><div key={title} className="trust-item"><span><Icon name={icon as any}/></span><div><b>{title}</b><small>{sub}</small></div></div>)}</div></Section> }
export function FilterBar(){return <div className="filter-bar"><button><Icon name="filter" size={17}/> Filter</button><div><button>Category <Icon name="chevron" size={13}/></button><button>Price <Icon name="chevron" size={13}/></button><button>Delivery <Icon name="chevron" size={13}/></button><button>Sort: Recommended <Icon name="chevron" size={13}/></button></div></div>}

export function FeatureStrip({items}:{items:{icon:'truck'|'shield'|'star'|'building'|'gift'|'clock'|'sparkle'|'heart';title:string;subtitle:string}[]}) {
  return <div className="feature-strip">{items.map(item=><div className="feature-strip-item" key={item.title}><span><Icon name={item.icon}/></span><div><b>{item.title}</b><small>{item.subtitle}</small></div></div>)}</div>;
}

export function IconCategoryRail({items}:{items:{title:string;icon:'gift'|'sparkle'|'heart'|'star'|'truck'|'shield'|'building'|'clock';href:string}[]}) {
  return <div className="icon-category-rail">{items.map(item=><Link href={item.href} key={item.title}><span><Icon name={item.icon}/></span><b>{item.title}</b></Link>)}</div>;
}

export function PromoTileGrid({items}:{items:Card[]}) {
  return <div className="promo-tile-grid">{items.map(item=><Link href={item.href||'#'} key={item.key} className="promo-tile"><ResponsiveImage name={item.image||item.key} alt={item.title}/><div><span>{item.subtitle}</span><b>{item.title}</b><em>Explore <Icon name="arrow" size={13}/></em></div></Link>)}</div>;
}

export function BudgetRail({items}:{items:{title:string;subtitle:string;href:string;icon:'gift'|'sparkle'|'star'|'heart'}[]}) {
 return <div className="budget-rail">{items.map(item=><Link href={item.href} key={item.title}><span><Icon name={item.icon}/></span><div><b>{item.title}</b><small>{item.subtitle}</small></div></Link>)}</div>;
}
