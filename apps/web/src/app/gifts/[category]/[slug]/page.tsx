'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Header, Footer, MobileNav } from '@/components/Site';
import { Section, SectionHeading, ProductGrid, FeatureStrip } from '@/components/Blocks';
import { products } from '@/lib/data';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Icon } from '@/components/Icon';

export default function ProductPage({params}:{params:{category:string;slug:string}}){
 const item=products.find(p=>p.href?.includes(params.slug))||products[0];
 const [qty,setQty]=useState(1);
 return <><Header/><main>
  <div className="breadcrumb">Home / {params.category.replaceAll('-',' ')} / {item.title}</div>
  <section className="section product-page"><div className="product-detail-new">
    <div className="product-gallery"><div className="product-main-image"><ResponsiveImage name={item.image||'giftBox'} alt={item.title} priority/><button className="product-gallery-wish"><Icon name="heart"/></button></div><div className="gallery-thumbs"><span><ResponsiveImage name={item.image||'giftBox'} alt="Product preview"/></span><span><ResponsiveImage name="giftWrap" alt="Packaging preview"/></span><span><ResponsiveImage name="luxuryGift" alt="Premium preview"/></span></div></div>
    <div className="product-buy-box"><span className="eyebrow">GIFTLY · CURATED PICK</span><h1>{item.title}</h1><div className="product-rating"><span>★</span> {item.rating||4.8} <b>Top Pick</b> · 120+ ratings</div><div className="product-price"><b>₹{item.price?.toLocaleString('en-IN')}</b>{item.oldPrice&&<del>₹{item.oldPrice.toLocaleString('en-IN')}</del>}<span>{item.tag}</span></div><p className="product-description">A beautifully presented Giftly favourite designed for celebrations. Final inventory, personalisation, delivery slots and serviceability will be resolved by the checkout APIs.</p>
      <div className="delivery-check"><div><Icon name="map"/><div><b>Deliver to Mumbai</b><small>Same-day options depend on pin code and inventory</small></div></div><button>Change</button></div>
      <div className="personalise-box"><div><Icon name="sparkle"/><div><b>Make it personal</b><small>Add a name, photo or message when supported</small></div></div><Link href="/personalised">Explore personalisation →</Link></div>
      <div className="quantity-row"><b>Quantity</b><div><button onClick={()=>setQty(Math.max(1,qty-1))}>−</button><span>{qty}</span><button onClick={()=>setQty(qty+1)}>+</button></div></div>
      <div className="buy-actions"><Link href="/cart" className="btn-primary">Add to Cart</Link><Link href="/checkout" className="btn-secondary">Buy Now</Link></div>
      <div className="mini-assurance"><span>✓ Secure payment</span><span>🚚 Delivery options</span><span>↻ Easy returns</span></div>
    </div>
  </div></section>
  <FeatureStrip items={[{icon:'truck',title:'Delivery',subtitle:'Serviceability based'},{icon:'shield',title:'Secure Payments',subtitle:'Verified checkout'},{icon:'star',title:'Premium Quality',subtitle:'Curated with care'},{icon:'gift',title:'Gift Ready',subtitle:'Beautiful presentation'}]}/>
  <Section tone="pink"><SectionHeading title="You may also like" subtitle="Keep exploring Giftly"/><ProductGrid items={products.filter(p=>p.key!==item.key).slice(0,6)} cols={6}/></Section>
  <Section><div className="product-story"><div><span className="eyebrow">GIFTLY EXPERIENCE</span><h2>Thoughtful from selection to doorstep.</h2><p>Every product detail is designed around a real gifting journey — discovery, personalisation, serviceability, delivery and verified checkout.</p></div><div className="product-story-cards"><div><b>4.8/5</b><small>Customer rating</small></div><div><b>₹999+</b><small>Free shipping threshold</small></div><div><b>Same Day</b><small>Selected locations</small></div></div></div></Section>
 </main><Footer/><MobileNav/></>;
}
