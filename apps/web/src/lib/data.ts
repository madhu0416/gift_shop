export type Card = { key: string; title: string; subtitle?: string; image?: string; href?: string; price?: number; oldPrice?: number; tag?: string; rating?: number; badge?: string };

// Image sources are intentionally mapped one-to-one with visual cards to avoid repeating the same photograph inside a page.
// All Pexels images are marked free-to-use on their source pages. The asset downloader can mirror them into public/images/photos when network access is available.
export const remoteImages: Record<string,string> = {
  hero:'https://images.pexels.com/photos/5714455/pexels-photo-5714455.jpeg?auto=compress&cs=tinysrgb&w=1800',
  heroWedding:'https://images.pexels.com/photos/31002333/pexels-photo-31002333.jpeg?auto=compress&cs=tinysrgb&w=1800',
  heroPersonalised:'https://images.pexels.com/photos/30824760/pexels-photo-30824760.jpeg?auto=compress&cs=tinysrgb&w=1800',
  heroHampers:'https://images.pexels.com/photos/38482257/pexels-photo-38482257.jpeg?auto=compress&cs=tinysrgb&w=1800',
  weddingCulture:'https://images.pexels.com/photos/35872915/pexels-photo-35872915.jpeg?auto=compress&cs=tinysrgb&w=1400',
  weddingHaldi:'https://images.pexels.com/photos/31002035/pexels-photo-31002035.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingDecor:'https://images.pexels.com/photos/33331302/pexels-photo-33331302.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingVenue:'https://images.pexels.com/photos/33548157/pexels-photo-33548157.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingFlatlay:'https://images.pexels.com/photos/28315352/pexels-photo-28315352.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingCouple:'https://images.pexels.com/photos/18867033/pexels-photo-18867033.jpeg?auto=compress&cs=tinysrgb&w=1200',
  bridePortrait:'https://images.pexels.com/photos/32499912/pexels-photo-32499912.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ceremony:'https://images.pexels.com/photos/31002342/pexels-photo-31002342.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ritual:'https://images.pexels.com/photos/16846853/pexels-photo-16846853.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayCake:'https://images.pexels.com/photos/14457434/pexels-photo-14457434.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayPink:'https://images.pexels.com/photos/22882761/pexels-photo-22882761.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayElegant:'https://images.pexels.com/photos/30692083/pexels-photo-30692083.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayFloral:'https://images.pexels.com/photos/29721474/pexels-photo-29721474.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayMilestone:'https://images.pexels.com/photos/17294703/pexels-photo-17294703.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chocolateBox:'https://images.pexels.com/photos/18434553/pexels-photo-18434553.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chocolateRose:'https://images.pexels.com/photos/5714433/pexels-photo-5714433.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chocolatePremium:'https://images.pexels.com/photos/14275720/pexels-photo-14275720.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chocolateArt:'https://images.pexels.com/photos/14275713/pexels-photo-14275713.jpeg?auto=compress&cs=tinysrgb&w=1200',
  chocolateRoseBox:'https://images.pexels.com/photos/13831901/pexels-photo-13831901.jpeg?auto=compress&cs=tinysrgb&w=1200',
  giftBox:'https://images.pexels.com/photos/10819195/pexels-photo-10819195.jpeg?auto=compress&cs=tinysrgb&w=1200',
  giftBasket:'https://images.pexels.com/photos/5714455/pexels-photo-5714455.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cosmetics:'https://images.pexels.com/photos/30824760/pexels-photo-30824760.jpeg?auto=compress&cs=tinysrgb&w=1200',
  luxuryHamper:'https://images.pexels.com/photos/38482257/pexels-photo-38482257.jpeg?auto=compress&cs=tinysrgb&w=1200',
  luxuryGift:'https://images.pexels.com/photos/30562017/pexels-photo-30562017.jpeg?auto=compress&cs=tinysrgb&w=1200',
  anniversary:'https://images.pexels.com/photos/31761979/pexels-photo-31761979.jpeg?auto=compress&cs=tinysrgb&w=1200',
  coupleGift:'https://images.pexels.com/photos/7867767/pexels-photo-7867767.jpeg?auto=compress&cs=tinysrgb&w=1200',
  birthdayBalloons:'https://images.pexels.com/photos/30277077/pexels-photo-30277077.jpeg?auto=compress&cs=tinysrgb&w=1200',
  indianBride:'https://images.pexels.com/photos/36896552/pexels-photo-36896552.jpeg?auto=compress&cs=tinysrgb&w=1200',
  giftWrap:'https://images.pexels.com/photos/264771/pexels-photo-264771.jpeg?auto=compress&cs=tinysrgb&w=1200',
  saleGift:'https://images.pexels.com/photos/7957746/pexels-photo-7957746.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cakeClose:'https://images.pexels.com/photos/14454566/pexels-photo-14454566.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cakeVibrant:'https://images.pexels.com/photos/33632326/pexels-photo-33632326.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cakeFresh:'https://images.pexels.com/photos/32125119/pexels-photo-32125119.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cake27:'https://images.pexels.com/photos/35523253/pexels-photo-35523253.jpeg?auto=compress&cs=tinysrgb&w=1200',
  sweets:'https://images.pexels.com/photos/14275714/pexels-photo-14275714.jpeg?auto=compress&cs=tinysrgb&w=1200',
  celebration:'https://images.pexels.com/photos/5404193/pexels-photo-5404193.jpeg?auto=compress&cs=tinysrgb&w=1200',
  family:'https://images.pexels.com/photos/7489219/pexels-photo-7489219.jpeg?auto=compress&cs=tinysrgb&w=1200',
  weddingCeremony:'https://images.pexels.com/photos/31002333/pexels-photo-31002333.jpeg?auto=compress&cs=tinysrgb&w=1800',
};

export const localFallback: Record<string,string> = {
  hero:'/images/hero-gifting.svg', heroWedding:'/images/wedding.svg', heroPersonalised:'/images/personalised.svg', heroHampers:'/images/hamper.svg',
  weddingCulture:'/images/culture.svg', weddingHaldi:'/images/celebration.svg', weddingDecor:'/images/wedding.svg', weddingVenue:'/images/home-essentials.svg', weddingFlatlay:'/images/combo.svg', weddingCouple:'/images/couples.svg', bridePortrait:'/images/bride.svg', ceremony:'/images/celebration.svg', ritual:'/images/culture.svg',
  birthdayCake:'/images/cake.svg', birthdayPink:'/images/birthday.svg', birthdayElegant:'/images/birthday.svg', birthdayFloral:'/images/flower.svg', birthdayMilestone:'/images/anniversary.svg',
  chocolateBox:'/images/chocolate.svg', chocolateRose:'/images/chocolate.svg', chocolatePremium:'/images/premium-hamper.svg', chocolateArt:'/images/chocolate.svg', chocolateRoseBox:'/images/chocolate.svg',
  giftBox:'/images/custom-hamper.svg', giftBasket:'/images/hamper.svg', cosmetics:'/images/personalised.svg', luxuryHamper:'/images/hamper.svg', luxuryGift:'/images/premium-hamper.svg', anniversary:'/images/anniversary.svg', coupleGift:'/images/couples.svg', birthdayBalloons:'/images/balloons.svg', indianBride:'/images/bride.svg', giftWrap:'/images/custom-hamper.svg', saleGift:'/images/combo.svg', cakeClose:'/images/cake.svg', cakeVibrant:'/images/cake.svg', cakeFresh:'/images/cake.svg', cake27:'/images/cake.svg', sweets:'/images/chocolate.svg', celebration:'/images/celebration.svg', family:'/images/family.svg', weddingCeremony:'/images/wedding.svg',
};

export const categories: Card[] = [
 {key:'flowers',title:'Flowers',image:'birthdayFloral',href:'/gifts/flowers'},
 {key:'cakes',title:'Cakes',image:'birthdayCake',href:'/gifts/cakes'},
 {key:'personalised',title:'Personalised',image:'giftBox',href:'/personalised'},
 {key:'plants',title:'Plants',image:'family',href:'/gifts/plants'},
 {key:'chocolates',title:'Chocolates',image:'chocolatePremium',href:'/gifts/chocolates'},
 {key:'hampers',title:'Hampers',image:'giftBasket',href:'/hampers'},
 {key:'home',title:'Home & Living',image:'weddingVenue',href:'/lifestyle/home-living'},
 {key:'premium',title:'Premium Gifts',image:'cosmetics',href:'/gifts/premium'},
 {key:'soft-toys',title:'Soft Toys',image:'birthdayBalloons',href:'/gifts/soft-toys'},
 {key:'global',title:'Global Delivery',image:'celebration',href:'/gifts/global-delivery'},
];

export const occasions: Card[] = [
 {key:'birthday',title:'Birthday',subtitle:'Make their day brighter',image:'birthdayElegant',href:'/occasions/birthday'},
 {key:'valentine',title:"Valentine's Day",subtitle:'Love, wrapped beautifully',image:'anniversary',href:'/occasions/valentines-day'},
 {key:'rakhi',title:'Raksha Bandhan',subtitle:'Celebrate the bond',image:'coupleGift',href:'/occasions/raksha-bandhan'},
 {key:'diwali',title:'Diwali',subtitle:'Festive gifting',image:'saleGift',href:'/occasions/diwali'},
 {key:'wedding',title:'Wedding',subtitle:'For the big day',image:'ceremony',href:'/wedding'},
 {key:'anniversary',title:'Anniversary',subtitle:'Celebrate your story',image:'cake27',href:'/anniversary'},
 {key:'housewarming',title:'Housewarming',subtitle:'New home, new memories',image:'family',href:'/occasions/housewarming'},
 {key:'congratulations',title:'Congratulations',subtitle:'Celebrate every win',image:'giftWrap',href:'/occasions/congratulations'},
];

export const recipients: Card[] = [
 {key:'her',title:'For Her',image:'bridePortrait',href:'/gifts/for-her'}, {key:'him',title:'For Him',image:'coupleGift',href:'/gifts/for-him'}, {key:'couples',title:'For Couples',image:'weddingCouple',href:'/gifts/for-couples'}, {key:'mom',title:'For Mom',image:'family',href:'/gifts/for-mom'}, {key:'kids',title:'For Kids',image:'birthdayBalloons',href:'/gifts/for-kids'}, {key:'family',title:'For Family',image:'giftBasket',href:'/gifts/for-family'},
];

export const weddingCultures: Card[] = [
 {key:'punjabi',title:'Punjabi',image:'weddingCulture',href:'/wedding/culture/punjabi'}, {key:'maharashtrian',title:'Maharashtrian',image:'indianBride',href:'/wedding/culture/maharashtrian'}, {key:'bengali',title:'Bengali',image:'bridePortrait',href:'/wedding/culture/bengali'}, {key:'south-indian',title:'South Indian',image:'ceremony',href:'/wedding/culture/south-indian'}, {key:'gujarati',title:'Gujarati',image:'ritual',href:'/wedding/culture/gujarati'}, {key:'rajasthani',title:'Rajasthani',image:'weddingDecor',href:'/wedding/culture/rajasthani'}, {key:'muslim',title:'Muslim',image:'weddingCouple',href:'/wedding/culture/muslim'}, {key:'christian',title:'Christian',image:'weddingVenue',href:'/wedding/culture/christian'},
];

export const states = ['Maharashtra','Rajasthan','Punjab','Gujarat','West Bengal','Tamil Nadu','Karnataka','Kerala','Uttar Pradesh','Delhi NCR','Telangana','Goa','Bihar','Odisha','Assam','Madhya Pradesh'];

export const products: Card[] = [
 {key:'p1',title:'Rose & Chocolate Celebration Box',price:1299,oldPrice:1699,tag:'24% OFF',rating:4.8,image:'chocolateRose',href:'/gifts/chocolates/rose-chocolate-box'},
 {key:'p2',title:'Pastel Birthday Flower Cake',price:749,oldPrice:999,tag:'25% OFF',rating:4.9,image:'birthdayPink',href:'/gifts/cakes/pastel-birthday-cake'},
 {key:'p3',title:'Personalised Celebration Keepsake',price:999,oldPrice:1299,tag:'23% OFF',rating:4.8,image:'giftBox',href:'/gifts/personalised/celebration-keepsake'},
 {key:'p4',title:'Elegant Premium Chocolate Box',price:699,oldPrice:899,tag:'22% OFF',rating:4.9,image:'chocolateBox',href:'/gifts/chocolates/premium-box'},
 {key:'p5',title:'Luxury Celebration Hamper',price:2499,oldPrice:3299,tag:'24% OFF',rating:4.8,image:'luxuryHamper',href:'/gifts/hampers/luxury-celebration'},
 {key:'p6',title:'Wedding Wishes Gift Set',price:1899,oldPrice:2399,tag:'21% OFF',rating:4.8,image:'weddingFlatlay',href:'/gifts/wedding/wishes-gift-set'},
 {key:'p7',title:'Romantic Anniversary Surprise',price:1599,oldPrice:1999,tag:'20% OFF',rating:4.9,image:'anniversary',href:'/gifts/anniversary/romantic-surprise'},
 {key:'p8',title:'Premium Gourmet Gift Box',price:2899,oldPrice:3599,tag:'19% OFF',rating:4.8,image:'luxuryGift',href:'/gifts/premium/gourmet-box'},
 {key:'p9',title:'Birthday Bloom Celebration',price:1199,oldPrice:1499,tag:'20% OFF',rating:4.7,image:'birthdayFloral',href:'/gifts/birthday/bloom-celebration'},
 {key:'p10',title:'Indian Wedding Celebration Hamper',price:1999,oldPrice:2499,tag:'20% OFF',rating:4.8,image:'ceremony',href:'/gifts/wedding/celebration-hamper'},
 {key:'p11',title:'Pink Luxe Gift Box',price:1299,oldPrice:1599,tag:'19% OFF',rating:4.7,image:'cosmetics',href:'/gifts/personalised/pink-luxe-box'},
 {key:'p12',title:'Couple Celebration Set',price:1799,oldPrice:2199,tag:'18% OFF',rating:4.8,image:'coupleGift',href:'/gifts/couples/celebration-set'},
 {key:'p13',title:'Fresh Flower & Cake Moment',price:1499,oldPrice:1799,tag:'17% OFF',rating:4.9,image:'birthdayCake',href:'/gifts/combos/flower-cake-moment'},
 {key:'p14',title:'Artisan Chocolate Collection',price:1199,oldPrice:1499,tag:'20% OFF',rating:4.8,image:'chocolateArt',href:'/gifts/chocolates/artisan-collection'},
 {key:'p15',title:'Elegant White Rose Gift Box',price:1599,oldPrice:1899,tag:'16% OFF',rating:4.9,image:'chocolatePremium',href:'/gifts/premium/white-rose-box'},
 {key:'p16',title:'Festive Sweet Celebration Box',price:899,oldPrice:1199,tag:'25% OFF',rating:4.7,image:'sweets',href:'/gifts/festive/sweet-celebration'},
 {key:'p17',title:'Pink Floral Birthday Delight',price:1399,oldPrice:1699,tag:'18% OFF',rating:4.8,image:'cakeVibrant',href:'/gifts/cakes/pink-floral-delight'},
 {key:'p18',title:'Milestone Birthday Celebration',price:1699,oldPrice:2099,tag:'19% OFF',rating:4.8,image:'birthdayMilestone',href:'/gifts/cakes/milestone-celebration'},
];

export const weddingCategories: Card[] = [
 {key:'bride',title:'Gifts for Bride',image:'bridePortrait',href:'/wedding/combos/bride-essentials'}, {key:'groom',title:'Gifts for Groom',image:'weddingCouple',href:'/wedding/combos/groom-essentials'}, {key:'jewellery',title:'Jewellery Gifts',image:'indianBride',href:'/gifts/jewellery'}, {key:'wedding-hampers',title:'Gift Hampers',image:'luxuryHamper',href:'/hampers/wedding'}, {key:'personalised-wedding',title:'Personalised',image:'giftBox',href:'/personalised/wedding'}, {key:'home-decor',title:'Home Décor',image:'weddingDecor',href:'/lifestyle/home-living'}, {key:'furniture',title:'Furniture',image:'weddingVenue',href:'/wedding/furniture'}, {key:'electrical',title:'Electrical',image:'giftWrap',href:'/wedding/electrical'}, {key:'family-friends',title:'Family & Friends',image:'family',href:'/wedding/family-friends'}, {key:'premium-wedding',title:'Premium',image:'weddingFlatlay',href:'/wedding/premium'},
];

export const comboCards: Card[] = [
 {key:'bride',title:'Bride Essentials',subtitle:'Beauty, accessories & keepsakes',image:'bridePortrait',href:'/wedding/combos/bride-essentials'}, {key:'groom',title:'Groom Essentials',subtitle:'Lifestyle, accessories & celebration',image:'weddingCouple',href:'/wedding/combos/groom-essentials'}, {key:'home',title:'Home Essentials',subtitle:'Furniture, décor & useful gifting',image:'weddingVenue',href:'/wedding/combos/home-essentials'}, {key:'celebration',title:'Celebration Combo',subtitle:'Decor, hampers & memorable extras',image:'luxuryHamper',href:'/wedding/combos/celebration'}, {key:'complete',title:'Complete Wedding',subtitle:'A curated wedding shopping plan',image:'weddingFlatlay',href:'/wedding/combos/complete-wedding'},
];

export const homepageSections = {
  personalised:[
   {key:'photo',title:'Photo Memories',subtitle:'Frames, prints & keepsakes',image:'weddingFlatlay',href:'/personalised/photo-frames'},
   {key:'name',title:'Names & Initials',subtitle:'Made uniquely for them',image:'giftWrap',href:'/personalised/name-gifts'},
   {key:'custom',title:'Build a Hamper',subtitle:'Pick your favourite gifts',image:'luxuryGift',href:'/personalised/hampers'},
   {key:'statement',title:'Statement Gifts',subtitle:'Fun, expressive & memorable',image:'birthdayBalloons',href:'/personalised/statement-gifts'},
  ] as Card[],
  hampers:[
   {key:'wedding',title:'Wedding Hampers',subtitle:'Curated for the couple',image:'indianBride',href:'/hampers/wedding'},
   {key:'premium',title:'Premium Hampers',subtitle:'Luxury gifting, beautifully packed',image:'chocolateRoseBox',href:'/hampers/premium'},
   {key:'festive',title:'Festive Hampers',subtitle:'For family celebrations',image:'sweets',href:'/hampers/festive'},
   {key:'birthday',title:'Birthday Hampers',subtitle:'Surprises in every layer',image:'chocolateArt',href:'/hampers/birthday'},
  ] as Card[],
  anniversary:[
   {key:'couples',title:'For Couples',subtitle:'Celebrate your story',image:'anniversary',href:'/anniversary'},
   {key:'wife',title:'For Wife',subtitle:'Thoughtful & romantic',image:'cakeVibrant',href:'/anniversary/for-wife'},
   {key:'husband',title:'For Husband',subtitle:'Little luxuries, big feelings',image:'celebration',href:'/anniversary/for-husband'},
   {key:'milestones',title:'Milestone Anniversaries',subtitle:'1st, 10th, 25th & beyond',image:'cake27',href:'/anniversary/milestones'},
  ] as Card[],
};
