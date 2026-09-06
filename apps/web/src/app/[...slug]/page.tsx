import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer, MobileNav } from '@/components/Site';
import { FilterBar, ProductGrid, Section, SectionHeading, CircleRail, ImageCardRail, FeatureStrip, PromoTileGrid, IconCategoryRail } from '@/components/Blocks';
import { categories, occasions, products, recipients, comboCards, weddingCultures, homepageSections } from '@/lib/data';
import { ResponsiveImage } from '@/components/ResponsiveImage';

type Params={params:{slug:string[]}};

type Config={title:string;eyebrow:string;description:string;image:string;chips:string[]};
const configs: Record<string,Config> = {
 'gifts-mall':{title:'Gift Mall',eyebrow:'Explore the world of gifting',description:'Shop by occasion, recipient, category, price and celebration. Find thoughtful gifts without knowing exactly what to search for.',image:'giftBox',chips:['Bestsellers','New Arrivals','For Her','For Him','For Couples','Premium','Under ₹999','Combos']},
 bestsellers:{title:'Bestselling Gifts',eyebrow:'Loved by gifters',description:'A curated collection of popular gifting ideas across flowers, cakes, hampers, personalised gifts, plants and celebration combos.',image:'luxuryGift',chips:['All Gifts','Flowers','Cakes','Hampers','Personalised','Plants','Combos']},
 'new-arrivals':{title:'New Arrivals',eyebrow:'Freshly added',description:'Discover new gifting concepts, seasonal collections and premium finds before everyone else.',image:'birthdayBalloons',chips:['Latest','Wedding','Personalised','Hampers','Lifestyle']},
 occasions:{title:'Gifts for Every Occasion',eyebrow:'Celebrate every reason',description:'From birthdays and anniversaries to festivals, housewarmings and weddings, discover a gifting path for every special day.',image:'birthdayElegant',chips:['Birthday','Valentine’s Day','Raksha Bandhan','Diwali','Wedding','Housewarming','Congratulations']},
 anniversary:{title:'Anniversary Gifts',eyebrow:'Celebrate your story',description:'Thoughtful gifts for husbands, wives, couples and milestone anniversaries — from romantic keepsakes to premium surprises.',image:'anniversary',chips:['Best Sellers','For Husband','For Wife','For Couples','1st Anniversary','10th Anniversary','25th Anniversary','50th Anniversary']},
 hampers:{title:'Gift Hampers',eyebrow:'Happiness, beautifully packed',description:'Curated hampers for birthdays, weddings, anniversaries, festive moments, premium gifting and personalised surprises.',image:'heroHampers',chips:['Birthday Hampers','Wedding Hampers','Chocolate Hampers','Flower Hampers','Luxe Hampers','Dry Fruit','Personalised']},
 personalised:{title:'Personalised Gifts',eyebrow:'Create memories',description:'Add a name, photo, date, message or initials to make your gift feel unmistakably theirs.',image:'heroPersonalised',chips:['Mugs','Photo Frames','Cushions','Lamps','Accessories','Combos','Hampers','Wedding']},
 lifestyle:{title:'Lifestyle Gifting',eyebrow:'Useful can be beautiful',description:'Home, décor, plants, utility, premium lifestyle products and statement gifts for people with a point of view.',image:'weddingVenue',chips:['Home & Living','Plants','Décor','Premium','Desk Gifts','Travel','Wellness']},
 offers:{title:'Offers & Deals',eyebrow:'More love. More value.',description:'Discover seasonal discounts, combo savings and curated offers across popular gifting collections.',image:'saleGift',chips:['Under ₹499','Under ₹999','Wedding Offers','Hampers','Personalised','Premium']},
 flowers:{title:'Flowers',eyebrow:'Fresh gestures',description:'Bouquets, premium arrangements and flower combinations for birthdays, anniversaries, weddings and every thoughtful hello.',image:'birthdayFloral',chips:['Roses','Mixed Flowers','Premium','Same Day','New Arrivals','Flowers & Cakes']},
 cakes:{title:'Cakes',eyebrow:'Freshly baked celebrations',description:'Birthday, anniversary and celebration cakes paired with gifts and treats for a complete surprise.',image:'cakeClose',chips:['Chocolate','Butterscotch','Fresh Fruit','Premium','Same Day','Combos']},
 plants:{title:'Plants & Green Gifting',eyebrow:'Grow something beautiful',description:'Indoor plants, money plants, lucky bamboo and green gifts that keep giving.',image:'family',chips:['Money Plants','Lucky Bamboo','Peace Lily','Indoor Plants','Desk Plants']},
 chocolates:{title:'Chocolates',eyebrow:'Sweet little surprises',description:'Premium chocolate gifts, truffle boxes and celebration combinations for every sweet tooth.',image:'chocolateBox',chips:['Premium','Truffles','Combos','Wedding','Birthday']},
 'for-her':{title:'Gifts For Her',eyebrow:'Thoughtful gifts, chosen for her',description:'Beauty, flowers, personalised keepsakes, lifestyle gifts, hampers and premium surprises.',image:'bridePortrait',chips:['For Wife','For Mom','For Sister','For Friend','Personalised','Premium']},
 'for-him':{title:'Gifts For Him',eyebrow:'For the man who matters',description:'Useful, premium and personalised gifts for husbands, dads, brothers, friends and partners.',image:'coupleGift',chips:['For Husband','For Dad','For Brother','For Friend','Personalised','Premium']},
 'for-couples':{title:'Gifts For Couples',eyebrow:'Two hearts, one beautiful gift',description:'Anniversary, wedding, home and experience-inspired gifting for couples.',image:'weddingCouple',chips:['Anniversary','Wedding','New Home','Personalised','Hampers']},
 contact:{title:'Contact Giftly',eyebrow:'We are here to help',description:'Need help with an order, delivery, gifting recommendation or business gifting? Reach out to the Giftly team.',image:'family',chips:[]},
 'track-order':{title:'Track Your Order',eyebrow:'Your gift is on its way',description:'Enter your order number to see delivery status, address and available support.',image:'giftWrap',chips:[]},
 shipping:{title:'Shipping & Delivery',eyebrow:'Clear delivery expectations',description:'Delivery options are calculated by location, product delivery class, inventory and available slots.',image:'weddingVenue',chips:[]},
 returns:{title:'Returns & Support',eyebrow:'Simple, transparent support',description:'See return eligibility, replacements and support paths without leaving your gifting journey.',image:'giftBox',chips:[]},
 faq:{title:'Frequently Asked Questions',eyebrow:'Need a quick answer?',description:'Common questions about delivery, payments, personalisation, wedding combos and order support.',image:'coupleGift',chips:[]},
 corporate:{title:'Corporate Gifting',eyebrow:'Gifts for teams and clients',description:'Build branded, bulk and occasion-based gifting programs for teams, customers, partners and events.',image:'heroHampers',chips:['Employee Gifting','Client Gifts','Festive','Onboarding','Events','Bulk Orders']},
 account:{title:'My Account',eyebrow:'Your Giftly space',description:'Orders, addresses, wishlist, saved gifts and account preferences.',image:'family',chips:['Orders','Wishlist','Addresses','Profile']},
 cart:{title:'Your Cart',eyebrow:'Almost ready to gift',description:'Review your selected gifts, delivery options and personalisation before checkout.',image:'giftBox',chips:[]},
 checkout:{title:'Checkout',eyebrow:'One beautiful step to go',description:'A clean one-page checkout ready for address, serviceability, personalisation, coupons and verified payment.',image:'luxuryHamper',chips:[]},
 'all-gifts':{title:'All Gifts',eyebrow:'The complete Giftly catalogue',description:'Browse gifts across occasions, recipients, product types, price points and celebration styles.',image:'giftBox',chips:['Bestsellers','New Arrivals','Flowers','Cakes','Hampers','Personalised','Plants','Premium']},
 birthday:{title:'Birthday Gifts',eyebrow:'Make their day brighter',description:'Flowers, cakes, personalised keepsakes, hampers and surprise gifts for every age and personality.',image:'birthdayElegant',chips:['For Her','For Him','For Kids','Cakes','Flowers','Personalised','Hampers']},
 'valentines-day':{title:'Valentine’s Day Gifts',eyebrow:'Love, wrapped beautifully',description:'Romantic gifts for partners and couples, from flowers and keepsakes to premium surprises.',image:'anniversary',chips:['For Her','For Him','For Couples','Flowers','Personalised','Premium']},
 'raksha-bandhan':{title:'Raksha Bandhan Gifts',eyebrow:'Celebrate the bond',description:'Rakhi-inspired gifting for brothers, sisters and the whole family.',image:'coupleGift',chips:['For Brother','For Sister','Bhaiya Bhabhi','Hampers','Personalised','Chocolates']},
 diwali:{title:'Diwali Gifts',eyebrow:'Festive gifting, beautifully done',description:'Premium hampers, sweets, dry fruits, décor and thoughtful gifts for family, friends and teams.',image:'luxuryHamper',chips:['Hampers','Dry Fruits','Premium','Corporate','Family','Personalised']},
 housewarming:{title:'Housewarming Gifts',eyebrow:'New home, new memories',description:'Useful and beautiful home gifts, plants, décor and celebration hampers for a new beginning.',image:'weddingVenue',chips:['Home & Living','Plants','Décor','Premium','Couples']},
 congratulations:{title:'Congratulations Gifts',eyebrow:'Celebrate every win',description:'Thoughtful gifts for promotions, achievements, new beginnings and proud moments.',image:'giftWrap',chips:['For Her','For Him','Premium','Personalised','Hampers']},
 search:{title:'Search Gifts',eyebrow:'Find something beautiful',description:'Search across products, categories, occasions, recipients and wedding collections.',image:'giftBox',chips:['Wedding','Birthday','Anniversary','Hampers','Personalised','Premium']},
};

function titleFromPath(parts:string[]){ return parts.map(p=>p.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())).join(' / '); }

const pageTiles = {
  occasions:[{key:'birthday',title:'Birthday',subtitle:'Cake + flowers + keepsakes',image:'birthdayPink',href:'/occasions/birthday'},{key:'wedding',title:'Wedding',subtitle:'Gifts for every ritual',image:'weddingCulture',href:'/wedding'},{key:'anniversary',title:'Anniversary',subtitle:'Celebrate your story',image:'anniversary',href:'/anniversary'},{key:'diwali',title:'Festive',subtitle:'Premium family gifting',image:'sweets',href:'/occasions/diwali'}],
  personalised:homepageSections.personalised,
  hampers:homepageSections.hampers,
  anniversary:homepageSections.anniversary,
  flowers:[{key:'bouquets',title:'Signature Bouquets',subtitle:'Fresh and elegant',image:'birthdayFloral',href:'#products'},{key:'rose',title:'Roses',subtitle:'Classic love',image:'chocolateRoseBox',href:'#products'},{key:'premium',title:'Premium Flowers',subtitle:'For special moments',image:'weddingDecor',href:'#products'},{key:'combos',title:'Flowers & Cakes',subtitle:'Complete surprises',image:'birthdayCake',href:'#products'}],
  cakes:[{key:'chocolate',title:'Chocolate Cakes',subtitle:'Rich and indulgent',image:'cakeClose',href:'#products'},{key:'floral',title:'Floral Cakes',subtitle:'Pretty enough to gift',image:'cakeVibrant',href:'#products'},{key:'milestone',title:'Milestone Cakes',subtitle:'For big birthdays',image:'birthdayMilestone',href:'#products'},{key:'fresh',title:'Fresh Cream',subtitle:'Light and celebratory',image:'cakeFresh',href:'#products'}],
  chocolates:[{key:'premium',title:'Premium Chocolates',subtitle:'Gourmet gifting',image:'chocolatePremium',href:'#products'},{key:'artisan',title:'Artisan Collection',subtitle:'Beautifully made',image:'chocolateArt',href:'#products'},{key:'roses',title:'Roses & Chocolates',subtitle:'Classic romance',image:'chocolateRose',href:'#products'},{key:'giftbox',title:'Chocolate Gift Boxes',subtitle:'Ready to delight',image:'chocolateBox',href:'#products'}],
};

function InfoPanel({type}:{type:string}){
 const copy:Record<string,[string,string]>={contact:['Talk to the Giftly team','Need help with an order, delivery, gifting recommendation or business gifting? Our customer experience flow is ready for the support API.'],track:['Track your gift','Enter your order number to connect this screen to the order-tracking API.'],shipping:['Delivery made clear','Serviceability, delivery slots, bulky-item rules and location-based options can connect here.'],returns:['Support when you need it','Connect return eligibility, replacement requests and customer support without changing the storefront.'],faq:['Quick answers','Delivery, payment, personalisation, wedding combos and order-support questions can be surfaced here.'],account:['Your account dashboard','Orders, wishlist, addresses and profile preferences belong here.'],cart:['Your cart is waiting','Cart items, delivery options, personalisation and inventory reservations connect here.'],checkout:['One page to checkout','Address, serviceability, coupons, personalisation and verified Razorpay payment connect here.']};
 const [title,text]=copy[type]||copy.faq;
 return <section className="section"><div className="full-shell"><div className="info-panel"><div><span className="eyebrow">GIFTLY CUSTOMER EXPERIENCE</span><h2>{title}</h2><p>{text}</p></div><div className="hero-actions"><Link href="/" className="btn-primary">Continue Shopping</Link><Link href="/contact" className="btn-secondary">Get Help</Link></div></div></div></section>
}

export default function GenericPage({params}:Params){
 const parts=params.slug; const key=parts[parts.length-1]||'search';
 // A missing static file (e.g. an image the local/remote fallback chain failed to find)
 // has a file extension in its last segment. Without this guard, Next would fall through
 // to this catch-all and return a 200 HTML page instead of a real 404 for that request,
 // which breaks <Image>'s error handling and any other caller expecting a proper 404.
 if (/\.[a-zA-Z0-9]+$/.test(key)) notFound();
 const base=configs[key] || {title:titleFromPath(parts),eyebrow:'Giftly collection',description:'Explore this Giftly collection with the same premium design system and product discovery experience.',image:'giftBox',chips:['Bestsellers','New Arrivals','Personalised','Premium']};
 const isInfo=['contact','track-order','shipping','returns','faq','account','cart','checkout'].includes(key);
 const pageProducts= key==='bestsellers'?products: key==='anniversary'?products.slice(6).concat(products.slice(0,4)): key==='offers'?products.slice(2).concat(products.slice(0,3)):products;
 const tiles=pageTiles[key as keyof typeof pageTiles];
 return <><Header/><main>
  <section className="collection-hero"><ResponsiveImage name={base.image} alt={base.title} priority/><div className="collection-hero-copy"><span className="eyebrow">{base.eyebrow}</span><h1>{base.title}</h1><p>{base.description}</p>{!isInfo&&<div className="hero-actions"><Link href="#products" className="btn-primary">Shop Collection <IconArrow/></Link>{key==='wedding'&&<Link href="/wedding" className="btn-secondary">Explore Wedding</Link>}</div>}</div></section>
  {base.chips.length>0 && <section className="chip-section"><div className="chip-row">{base.chips.map((chip,i)=><Link key={chip} href="#products" className={`chip ${i===0?'active':''}`}>{chip}</Link>)}</div></section>}
  {key==='gifts-mall' && <><Section tone="blue"><SectionHeading title="Gifts For Everyone" subtitle="Start with who you're celebrating"/><CircleRail items={recipients}/></Section><Section><SectionHeading title="Shop by Category" subtitle="Popular gifting categories"/><CircleRail items={categories}/></Section></>}
  {tiles && <Section tone="pink"><SectionHeading title={key==='personalised'?'Make It Personal':key==='hampers'?'Explore Hamper Styles':key==='anniversary'?'Anniversary Favourites':'Explore This Collection'} subtitle="Visual discovery before you shop the full catalogue"/><PromoTileGrid items={tiles}/></Section>}
  {key==='occasions' && <Section tone="blue"><SectionHeading title="Shop Special Days" subtitle="Visual discovery for every celebration"/><CircleRail items={occasions}/></Section>}
  {key==='personalised' && <Section><SectionHeading title="Personalisation Ideas" subtitle="Choose how you want to make the gift yours"/><IconCategoryRail items={[{title:'Photo Gifts',icon:'heart',href:'#products'},{title:'Name & Initials',icon:'sparkle',href:'#products'},{title:'Custom Hampers',icon:'gift',href:'#products'},{title:'Engraved Gifts',icon:'star',href:'#products'},{title:'Wedding Personalised',icon:'heart',href:'#products'}]}/></Section>}
  {key==='corporate' && <Section tone="pink"><SectionHeading title="Corporate Gifting Programs" subtitle="For teams, clients, events and festive campaigns"/><PromoTileGrid items={homepageSections.hampers}/></Section>}
  {key==='lifestyle' && <Section tone="blue"><SectionHeading title="Lifestyle Collections" subtitle="Useful can be beautiful"/><CircleRail items={categories.slice(3)}/></Section>}
  {key==='bestsellers' && <Section tone="blue"><SectionHeading title="Why These Sell" subtitle="A mix of gifting essentials, premium picks and thoughtful keepsakes"/><FeatureStrip items={[{icon:'truck',title:'Fast Delivery',subtitle:'Selected cities'},{icon:'star',title:'Top Rated',subtitle:'Customer favourites'},{icon:'gift',title:'Gift Ready',subtitle:'Beautiful packaging'},{icon:'shield',title:'Secure',subtitle:'Verified checkout'}]}/></Section>}
  {isInfo ? <InfoPanel type={key}/> : <section id="products" className="section"><SectionHeading title={key==='offers'?'Featured Offers':'Shop The Collection'} subtitle="Curated for this collection"/><FilterBar/><ProductGrid items={pageProducts} cols={6}/></section>}
  {!isInfo && <Section tone="cream"><SectionHeading title="More ways to discover" subtitle="Keep exploring Giftly"/><ImageCardRail items={comboCards}/></Section>}
 </main><Footer/><MobileNav/></>;
}

function IconArrow(){return <span aria-hidden="true">→</span>}
