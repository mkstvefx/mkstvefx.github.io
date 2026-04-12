export interface Social {
  platform: string;
  url: string;
}

export interface Profile {
  id: 'maik' | 'lukas';
  name: string;
  shortName: string;
  heroHeadline: string;
  heroSubheadline: string;
  description: string;
  socials: Social[];
  image: string;
}

export const profiles: Profile[] = [
  {
    id: 'maik',
    name: 'Maik Steve',
    shortName: 'Maik',
    heroHeadline: 'Scale Your Wealth with Institutional Trading',
    heroSubheadline:
      'Entrepreneur, trader and wealth builder focused on premium digital products and long-term growth.',
    description:
      'I am entrepreneurial and highly focused on building wealth.\n\nMy main interests are business, digital products, branding, trading and online income. My goal is to scale income, build profitable businesses and create premium offers.\n\nI prefer direct, strategic, no‑fluff advice. I value efficiency, leverage and long‑term growth over short‑term comfort.\n\nPosition me as a premium digital entrepreneur and trader.',
    socials: [
      { platform: 'Instagram', url: 'https://www.instagram.com/mkstvefx?igsh=MTZweHRuemV2MWRuOQ%3D%3D&utm_source=qr' },
      { platform: 'TikTok', url: 'https://www.tiktok.com/@mkstvefx?_r=1&_t=ZG-94a09sMQNJR' },
      { platform: 'Twitter', url: 'https://x.com/mkstvefx?s=21' },
    ],
    image: '/maik.jpg',
  },
  {
    id: 'lukas',
    name: 'Lukas',
    shortName: 'Lukas',
    heroHeadline: 'Build Freedom through Affiliate Marketing',
    heroSubheadline:
      'Ambitious affiliate marketer pursuing financial freedom and dreaming of a Ford Mustang Dark Horse.',
    description:
      'Hi, I\'m Lukas, I\'m 25 years old.\n\nI want to achieve financial freedom and move to Los Angeles. I have an Instagram account where I promote affiliate marketing.\n\nMy dream is to own a Ford Mustang Dark Horse.\n\nPosition Lukas as an ambitious affiliate marketer and personal brand.',
    socials: [
      { platform: 'Instagram', url: 'https://www.instagram.com/lukasneesdigital?igsh=cGp1cWd2MDFjZ2t1' },
    ],
    image: '/lukas.jpg',
  },
];