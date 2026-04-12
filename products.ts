export interface Product {
  slug: string;
  owner: 'maik' | 'lukas';
  name: string;
  description: string;
  price: string;
  link: string;
  thumbnail?: string;
  ctaLabel?: string;
}

export const products: Product[] = [
  {
    slug: 'institutional-blueprint',
    owner: 'maik',
    name: 'The Institutional Blueprint',
    description:
      'Master institutional trading with this 75‑page blueprint. Learn how professional traders think, decode institutional footprints and build a framework for consistent success. Includes setups, frameworks and checklists to remove guesswork.',
    price: '€19.99',
    link: 'https://maikstevefx.gumroad.com/l/xzrwuv',
  },
  {
    slug: 'sniper-entry-trap-strategy',
    owner: 'maik',
    name: 'The Sniper Entry & Trap Strategy System',
    description:
      'A concise 12‑page guide that teaches trap strategies for cleaner entries, better timing and smarter execution. Designed for small account traders seeking precision and confidence in their trades.',
    price: '€9.99',
    link: 'http://maikstevefx.gumroad.com/l/bsyvo',
  },
  {
    slug: 'beginner-trading-guide',
    owner: 'maik',
    name: 'You’re not losing because of bad luck – you’re losing because no one taught you this.',
    description:
      'Get a solid foundation with this free beginner trading guide. Learn risk management, trading psychology, common mistakes, market basics and build a simple trading plan—no fluff, just honest fundamentals.',
    price: 'Free',
    link: 'https://maikstevefx.gumroad.com/i/hlsfzb',
    ctaLabel: 'Download Free',
  },
  {
    slug: 'affiliate-workshop',
    owner: 'lukas',
    name: 'PVA Method Affiliate Workshop',
    description:
      'Join this free workshop to learn the PVA method—a simple system to earn €100–€200+ per day with your smartphone. Discover how to leverage AI tools to automate income, replicate proven strategies without showing your face and get a clear roadmap to start immediately.',
    price: 'Free',
    link: 'https://www.the-affiliate-code.de/beweisvideo/?aff=neesdigital&el=affiliate&source=affiliate',
    ctaLabel: 'Join Workshop',
  },
];