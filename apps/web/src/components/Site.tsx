'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';

const nav = [['Wedding','/wedding'],['Occasions','/occasions'],['Anniversary','/anniversary'],['Hampers','/hampers'],['Personalised','/personalised'],['Lifestyle','/lifestyle']];

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="promo"><div className="promo-inner full-bleed-inner">
      <div className="promo-left"><span>🎁 Same Day Delivery</span><span>♥ Make Every Moment Special</span><span>🚚 Free Shipping on Orders Above ₹999</span></div>
      <div className="promo-links"><Link href="/track-order">Track Order</Link><Link href="/faq">Help</Link><Link href="/corporate">Corporate Gifting</Link></div>
    </div></div>
    <header className="main-header full-bleed-inner">
      <button className="icon-btn mobile-only" onClick={() => setOpen(v => !v)} aria-label="Open menu"><Icon name={open ? 'close' : 'menu'} /></button>
      <Link href="/" className="brand brand-logo"><img src="/brand/giftly-wordmark.svg" alt="Giftly - Gifts for Happier Moments" /></Link>
      <div className="header-search"><Icon name="search" size={19}/><input aria-label="Search gifts" placeholder="Search for flowers, cakes, gifts and more..."/><Link href="/search">Search</Link></div>
      <Link href="/delivery" className="header-action desktop-only"><Icon name="map"/><span><small>Deliver to</small><b>Mumbai</b></span><Icon name="chevron" size={14}/></Link>
      <Link href="/account" className="header-action desktop-only"><Icon name="user"/><span><b>Sign In</b><small>My Account</small></span></Link>
      <Link href="/account/wishlist" className="header-text-action desktop-only"><Icon name="heart"/><span>Wishlist</span></Link>
      <Link href="/cart" className="header-text-action cart-action"><span className="cart-icon"><Icon name="cart"/><i>0</i></span><span className="desktop-only">Cart</span></Link>
    </header>
    <div className="mobile-search full-bleed-inner"><div className="mobile-search-box"><Icon name="search" size={17}/><input placeholder="Search gifts, occasions, people..."/><Link href="/search">Go</Link></div></div>
    <nav className={`main-nav ${open ? 'open' : ''}`}><div className="nav-inner full-bleed-inner"><div className="nav-items">{nav.map(([label,href],i)=><Link key={href} href={href} className={i===0?'active':''}>{label}{(label==='Wedding'||label==='Occasions')&&<Icon name="chevron" size={13}/>}</Link>)}</div><Link href="/offers" className="offer-pill"><Icon name="gift" size={15}/> Offers</Link></div></nav>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="full-shell footer-grid">
    <div className="footer-brand"><Link href="/" className="brand"><span>Giftly</span><small>GIFTS FOR HAPPIER MOMENTS</small></Link><p>Beautiful gifting for weddings, celebrations and all the moments worth remembering.</p><div className="footer-badges"><span><Icon name="shield" size={16}/> Secure payments</span><span><Icon name="truck" size={16}/> Reliable delivery</span></div></div>
    <div><h4>Shop</h4><Link href="/wedding">Wedding</Link><Link href="/occasions">Occasions</Link><Link href="/anniversary">Anniversary</Link><Link href="/hampers">Hampers</Link><Link href="/personalised">Personalised</Link><Link href="/lifestyle">Lifestyle</Link></div>
    <div><h4>Discover</h4><Link href="/gifts-mall">Gift Mall</Link><Link href="/bestsellers">Best Sellers</Link><Link href="/new-arrivals">New Arrivals</Link><Link href="/offers">Offers</Link><Link href="/gifts/for-her">Gifts For Her</Link><Link href="/gifts/for-him">Gifts For Him</Link></div>
    <div><h4>Wedding</h4><Link href="/wedding">Wedding Gifts</Link><Link href="/wedding/culture/punjabi">Culture Wise</Link><Link href="/wedding/state/maharashtra">State Wise</Link><Link href="/wedding/combos">Wedding Combos</Link><Link href="/hampers/wedding">Wedding Hampers</Link><Link href="/personalised/wedding">Personalised Wedding</Link></div>
    <div><h4>Help</h4><Link href="/track-order">Track Order</Link><Link href="/contact">Contact Us</Link><Link href="/shipping">Shipping</Link><Link href="/returns">Returns</Link><Link href="/faq">FAQs</Link><Link href="/policies/privacy">Privacy</Link></div>
  </div><div className="footer-bottom full-shell"><span>© 2026 Giftly. All rights reserved.</span><span>Made with love ♥ · Secure · Premium · Thoughtful</span></div></footer>;
}

export function MobileNav(){ return <div className="mobile-bottom"><Link href="/"><Icon name="gift" size={19}/><span>Home</span></Link><Link href="/search"><Icon name="search" size={19}/><span>Search</span></Link><Link href="/cart"><Icon name="cart" size={19}/><span>Cart</span></Link><Link href="/account"><Icon name="user" size={19}/><span>Account</span></Link></div> }
