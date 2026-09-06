import Link from 'next/link';
import { Header, Footer, MobileNav } from '@/components/Site';
import { Icon } from '@/components/Icon';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { Section, SectionHeading, CircleRail, ImageCardRail, ProductGrid, FeatureStrip, PromoTileGrid, IconCategoryRail } from '@/components/Blocks';
import { categories, comboCards, occasions, products, recipients, homepageSections } from '@/lib/data';

const weddingSpotlight = [
 {key:'culture',title:'Culture-Wise Weddings',subtitle:'Traditions, rituals & gifts',image:'weddingCulture',href:'/wedding'},
 {key:'state',title:'State-Wise Weddings',subtitle:'Discover gifting by region',image:'weddingDecor',href:'/wedding'},
 {key:'combo',title:'Wedding Combos',subtitle:'Curated sets for every need',image:'weddingFlatlay',href:'/wedding/combos'},
];

const feeling = [
 {key:'love',title:'Love & Romance',subtitle:'Say it beautifully',image:'chocolateRoseBox',href:'/search?feeling=love'},
 {key:'thankyou',title:'Thank You',subtitle:'A thoughtful little gesture',image:'giftWrap',href:'/search?feeling=thank-you'},
 {key:'congrats',title:'Congratulations',subtitle:'Celebrate every win',image:'cakeFresh',href:'/occasions/congratulations'},
 {key:'thinking',title:'Thinking of You',subtitle:'Send a little warmth',image:'family',href:'/search?feeling=thinking-of-you'},
];

const luxe = [
 {key:'luxe-hamper',title:'The Luxe Hamper Edit',subtitle:'Premium packaging & elevated gifting',image:'luxuryGift',href:'/gifts/premium'},
 {key:'luxe-wedding',title:'Premium Wedding Collection',subtitle:'For moments that deserve more',image:'indianBride',href:'/wedding/premium'},
 {key:'luxe-chocolate',title:'Gourmet Chocolate Collection',subtitle:'Beautifully presented indulgence',image:'chocolatePremium',href:'/gifts/chocolates'},
];

export default function Home(){
 return <><Header/><main>
  <section className="home-hero">
    <ResponsiveImage name="hero" alt="Premium gifting with flowers, chocolates and celebration gifts" priority/>
    <div className="home-hero-overlay"/>
    <div className="home-hero-content">
      <span className="eyebrow">GIFTS THAT CREATE HAPPIER MOMENTS</span>
      <h1>Beautiful gifts.<br/><em>Beautiful moments.</em></h1>
      <p>Flowers, cakes, personalised gifts, hampers and thoughtful finds for the people who make life special.</p>
      <div className="hero-actions"><Link href="/gifts-mall" className="btn-primary">Shop Now <Icon name="arrow" size={16}/></Link><Link href="/wedding" className="btn-secondary">Explore Wedding</Link></div>
    </div>
    <div className="hero-floating-note"><Icon name="sparkle" size={17}/><span><b>Curated with love</b><small>Premium gifting, beautifully packed</small></span></div>
  </section>

  <FeatureStrip items={[{icon:'truck',title:'Same Day Delivery',subtitle:'Across major cities'},{icon:'shield',title:'100% Secure Payments',subtitle:'Safe & hassle free'},{icon:'star',title:'Premium Quality',subtitle:'Handpicked with love'},{icon:'building',title:'Corporate Gifting',subtitle:'For every business need'}]}/>

  <Section><SectionHeading title="Shop by category" subtitle="Start with the kind of gift you have in mind" href="/gifts-mall"/><CircleRail items={categories}/></Section>

  <Section tone="pink"><SectionHeading title="Wedding Spotlight" subtitle="India's celebrations, beautifully brought together" href="/wedding"/><ImageCardRail items={weddingSpotlight} wide/></Section>

  <Section tone="blue"><SectionHeading title="Special Days" subtitle="Find a beautiful reason to celebrate" href="/occasions"/><CircleRail items={occasions}/></Section>

  <Section><SectionHeading title="Best Sellers" subtitle="Thoughtful gifts, picked for memorable moments" href="/bestsellers"/><ProductGrid items={products.slice(0,6)} cols={6}/></Section>

  <Section tone="pink"><SectionHeading title="Gifts For Everyone" subtitle="Start with who you're celebrating" href="/gifts-mall"/><CircleRail items={recipients}/></Section>

  <Section tone="cream"><SectionHeading title="Wedding Combos" subtitle="More than a gift — complete curated experiences" href="/wedding/combos"/><ImageCardRail items={comboCards} wide/></Section>

  <Section><SectionHeading title="Make It Personal" subtitle="Add a name, photo or message to make it truly theirs" href="/personalised"/><PromoTileGrid items={homepageSections.personalised}/></Section>

  <Section tone="blue"><SectionHeading title="Trending Hampers" subtitle="Beautifully packed gifts for every celebration" href="/hampers"/><ImageCardRail items={homepageSections.hampers}/></Section>

  <Section><SectionHeading title="Anniversary Picks ♥" subtitle="For husband, wife, couples and milestone moments" href="/anniversary"/><ImageCardRail items={homepageSections.anniversary}/></Section>

  <Section tone="pink"><SectionHeading title="Gifts for Every Feeling" subtitle="When emotions matter most, send a gift that speaks from the heart" href="/search"/><PromoTileGrid items={feeling}/></Section>

  <Section tone="blue"><SectionHeading title="The Luxe Edit" subtitle="Elevated gifting for people and moments that deserve more" href="/gifts/premium"/><ImageCardRail items={luxe} wide/></Section>

  <Section><SectionHeading title="Freshly Added" subtitle="New collections and new gifting ideas" href="/new-arrivals"/><ProductGrid items={products.slice(6,12)} cols={6}/></Section>

  <Section tone="cream"><SectionHeading title="Gift by Budget" subtitle="Beautiful choices at every price point"/><IconCategoryRail items={[{title:'Under ₹500',icon:'gift',href:'/search?price=under-500'},{title:'₹500 – ₹1,000',icon:'sparkle',href:'/search?price=500-1000'},{title:'₹1,000 – ₹2,500',icon:'star',href:'/search?price=1000-2500'},{title:'₹2,500 – ₹5,000',icon:'heart',href:'/search?price=2500-5000'},{title:'₹5,000+',icon:'gift',href:'/search?price=5000-plus'}]}/></Section>

  <Section><SectionHeading title="Offers & Deals" subtitle="Save more on curated gifting collections" href="/offers"/><div className="offer-hero-grid"><Link href="/offers" className="offer-hero-card"><ResponsiveImage name="saleGift" alt="Gift offer collection"/><div><span>LIMITED-TIME OFFER</span><h3>More love.<br/>More value.</h3><b>Shop Offers <Icon name="arrow" size={15}/></b></div></Link><Link href="/corporate" className="offer-hero-card secondary"><ResponsiveImage name="cosmetics" alt="Corporate gifting collection"/><div><span>BUSINESS GIFTING</span><h3>Thoughtful gifting<br/>for teams.</h3><b>Explore Corporate <Icon name="arrow" size={15}/></b></div></Link></div></Section>

  <section className="seo-story"><div><span className="eyebrow">GIFTLY · BEAUTIFUL GIFTING</span><h2>A gift is a small thing that can make a big moment.</h2><p>Discover wedding gifting, occasion collections, anniversary surprises, personalised keepsakes, premium hampers and lifestyle gifts in one thoughtful destination.</p></div></section>
 </main><Footer/><MobileNav/></>;
}
