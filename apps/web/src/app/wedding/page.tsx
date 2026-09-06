import Link from 'next/link';
import { Header, Footer, MobileNav } from '@/components/Site';
import { Section, SectionHeading, CircleRail, ImageCardRail, ProductGrid, FeatureStrip, IconCategoryRail, BudgetRail, PromoTileGrid } from '@/components/Blocks';
import { weddingCategories, weddingCultures, comboCards, products, states } from '@/lib/data';
import { ResponsiveImage } from '@/components/ResponsiveImage';

const weddingEvents = [
 {title:'Engagement',icon:'💍',href:'/wedding/events/engagement'}, {title:'Haldi',icon:'🌼',href:'/wedding/events/haldi'}, {title:'Mehendi',icon:'🌿',href:'/wedding/events/mehendi'}, {title:'Sangeet',icon:'🎶',href:'/wedding/events/sangeet'}, {title:'Wedding',icon:'🪷',href:'/wedding/events/wedding'}, {title:'Reception',icon:'🥂',href:'/wedding/events/reception'}, {title:'Post-Wedding',icon:'🏠',href:'/wedding/events/post-wedding'},
];
const shopFor = [
 {title:'Bride',icon:'gift' as const,href:'/wedding/combos/bride-essentials'}, {title:'Groom',icon:'gift' as const,href:'/wedding/combos/groom-essentials'}, {title:'Bride & Groom',icon:'heart' as const,href:'/gifts/for-couples'}, {title:'Parents',icon:'heart' as const,href:'/wedding/family-friends'}, {title:'Family',icon:'building' as const,href:'/wedding/family-friends'}, {title:'Friends',icon:'sparkle' as const,href:'/wedding/family-friends'}, {title:'Colleagues',icon:'building' as const,href:'/corporate'}, {title:'Guests',icon:'gift' as const,href:'/wedding/family-friends'},
];
const budgets = [
 {title:'Under ₹500',subtitle:'Small & thoughtful',icon:'gift' as const,href:'/search?price=under-500'}, {title:'₹500 – ₹1,000',subtitle:'Popular gifts',icon:'sparkle' as const,href:'/search?price=500-1000'}, {title:'₹1,000 – ₹2,500',subtitle:'Premium gifts',icon:'star' as const,href:'/search?price=1000-2500'}, {title:'₹2,500 – ₹5,000',subtitle:'Special gifts',icon:'gift' as const,href:'/search?price=2500-5000'}, {title:'₹5,000+',subtitle:'Luxury gifts',icon:'heart' as const,href:'/search?price=5000-plus'},
];
const weddingPromos = [
 {key:'personalised',title:'Personalised Wedding Gifts',subtitle:'Make it unique. Make it theirs.',image:'giftBox',href:'/personalised/wedding'},
 {key:'premium',title:'Premium Wedding Collection',subtitle:'Luxury gifts for special moments',image:'indianBride',href:'/wedding/premium'},
 {key:'combos',title:'Curated Gift Combos',subtitle:'Handpicked bundles for every celebration',image:'luxuryHamper',href:'/wedding/combos'},
 {key:'lastminute',title:'Last-Minute Wedding Gifts',subtitle:'Need it soon? We have you covered.',image:'weddingFlatlay',href:'/wedding'},
];
export default function Wedding(){return <><Header/><main>
 <section className="wedding-hero collection-hero"><ResponsiveImage name="heroWedding" alt="Indian wedding couple and celebration" priority/><div className="collection-hero-copy"><span className="eyebrow">THE GIFTLY WEDDING EDIT</span><h1>Celebrate their<br/><em>Forever.</em></h1><p>Thoughtful gifts for every love story, wedding ritual and new beginning — from personalised keepsakes to complete wedding combos.</p><div className="hero-actions"><Link href="/wedding/combos" className="btn-primary">Explore Wedding Gifts <span>→</span></Link><Link href="/wedding/culture/punjabi" className="btn-secondary">Shop by Culture</Link></div></div><div className="wedding-hero-panel"><b>Wedding Delivery</b><span>Across India</span><b>Personalised Gifts</b><span>For Every Ritual</span><b>Premium Quality</b><span>Assured</span><b>Secure Payments</b><span>Safe checkout</span></div></section>

 <FeatureStrip items={[{icon:'truck',title:'Same Day Delivery',subtitle:'Selected cities'},{icon:'star',title:'Premium Quality',subtitle:'Curated with love'},{icon:'sparkle',title:'Easy Returns',subtitle:'Hassle-free support'},{icon:'shield',title:'Secure Payments',subtitle:'Safe checkout'}]}/>

 <Section tone="blue"><SectionHeading title="Shop By Wedding Event" subtitle="Find gifts for every part of the celebration" href="/wedding/events"/><div className="event-card-rail">{weddingEvents.map(item=><Link key={item.title} href={item.href}><span>{item.icon}</span><b>{item.title}</b></Link>)}</div></Section>

 <Section><SectionHeading title="Shop By Category" subtitle="Jewellery, wedding wear, home, hampers and more"/><CircleRail items={weddingCategories}/></Section>

 <Section tone="blue"><SectionHeading title="Shop For" subtitle="Choose who you are gifting"/><IconCategoryRail items={shopFor}/></Section>

 <Section><SectionHeading title="Shop By Budget" subtitle="Beautiful wedding gifting at every price"/><BudgetRail items={budgets}/></Section>

 <Section tone="pink"><SectionHeading title="Wedding Gifts by Culture" subtitle="Discover traditions across India" href="/wedding/culture/punjabi"/><CircleRail items={weddingCultures}/></Section>

 <Section><SectionHeading title="Weddings Across India" subtitle="State-wise collections built around local traditions"/><div className="state-grid">{states.map((state,i)=><Link key={state} href={`/wedding/state/${state.toLowerCase().replaceAll(' ','-')}`}><span>{String(i+1).padStart(2,'0')}</span><b>{state}</b><small>Explore →</small></Link>)}</div></Section>

 <Section tone="blue"><SectionHeading title="Trending Wedding Gifts" subtitle="Popular picks for couples, family and friends" href="/gifts/wedding"/><ProductGrid items={products.slice(5,11)} cols={6}/></Section>

 <Section><PromoTileGrid items={weddingPromos}/></Section>

 <Section tone="pink"><SectionHeading title="Wedding Combos" subtitle="A complete gifting journey, beautifully bundled" href="/wedding/combos"/><ImageCardRail items={comboCards} wide/></Section>

 <Section tone="blue"><div className="wedding-proof"><div className="proof-copy"><span className="eyebrow">WHY GIFTLY</span><h2>We make wedding gifting simple, special & memorable.</h2><p>Thousands of thoughtful choices across gifts, hampers, personalised keepsakes, home essentials and premium wedding collections.</p></div><div className="proof-stats"><div><b>4.8/5</b><span>Happy customer rating</span></div><div><b>100%</b><span>Secure payments</span></div><div><b>7 Days</b><span>Easy returns</span></div></div></div></Section>
 </main><Footer/><MobileNav/></>}
