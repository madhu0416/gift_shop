import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'apps', 'web', 'public', 'images', 'photos');
await fs.mkdir(out, { recursive: true });

const images = {
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

for (const [name, url] of Object.entries(images)) {
  const file = path.join(out, `${name}.jpg`);
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await fs.writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log(`downloaded ${name}`);
  } catch (error) {
    console.warn(`skipped ${name}: ${error.message}`);
  }
}
