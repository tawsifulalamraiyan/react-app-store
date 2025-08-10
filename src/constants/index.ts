interface AppData {
  id: number;
  name: string;
  logo: string;
  category: string;
  rating: number;
  downloads: string;
  size: string;
  description: string;
  link?: string; // Optional since some apps might not have links
}

import storynestadmin from "../assets/storynest-admin.png";
import dailyhidayah from "../assets/daily-hidayah.png";
import storynest from "../assets/storynest.png";
import wishpr from "../assets/wishpr.png";

export const sampleAppData: AppData[] = [
  {
    id: 1,
    name: "Storynest Admin",
    logo: storynestadmin,
    category: "Photography",
    rating: 4.8,
    downloads: "1M+",
    size: "45MB",
    description: "Professional photo editing with advanced filters and tools",
    link: "https://expo.dev/artifacts/eas/sSJedwwMKD3778JHYqJT26.apk",
  },
  {
    id: 2,
    name: "Daily Hidayah",
    logo: dailyhidayah,
    category: "Health & Fitness",
    rating: 4.6,
    downloads: "500K+",
    size: "28MB",
    description: "Track your workouts, calories, and fitness goals",
    link: "https://expo.dev/artifacts/eas/wUUCcCta8zDgEJKNKevKRe.apk",
  },
  {
    id: 3,
    name: "Wishpr social app",
    logo: wishpr,
    category: "Music",
    rating: 4.9,
    downloads: "2M+",
    size: "52MB",
    description: "Stream millions of songs with high-quality audio",
    link: "https://expo.dev/artifacts/eas/6BTrtexSz41fBBDUp5UW49.apk",
  },
  {
    id: 4,
    name: "StoryNest",
    logo: storynest,
    category: "Productivity",
    rating: 4.5,
    downloads: "800K+",
    size: "15MB",
    description: "Read story and enjoy it",
    link: "https://expo.dev/artifacts/eas/j2xaq3HQ8n27jHVwD9mzz.apk",
    // No link property - will show "Coming Soon"
  },
];
