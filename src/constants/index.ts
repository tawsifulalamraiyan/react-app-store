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

import dailyhidayah from "../assets/daily-hidayah.png";
import storynest from "../assets/storynest.png";
import wishpr from "../assets/wishpr.png";

export const sampleAppData: AppData[] = [
  {
    id: 1,
    name: "StoryNest",
    logo: storynest,
    category: "Productivity",
    rating: 4.5,
    downloads: "800K+",
    size: "15MB",
    description:
      "Discover a vast collection of captivating stories and immerse yourself in a world of imagination. StoryNest helps you relax and unwind with curated tales for every mood.",
    link: "https://expo.dev/artifacts/eas/pZCnP9RhXsUbqKmDZZfSZ2.apk",
  },
  {
    id: 2,
    name: "Daily Hidayah",
    logo: dailyhidayah,
    category: "Health & Fitness",
    rating: 4.6,
    downloads: "500K+",
    size: "28MB",
    description:
      "Stay motivated and on track with Daily Hidayah. Monitor your workouts, log calories, and achieve your fitness goals with personalized daily guidance and insights.",
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
    description:
      "Stream your favorite songs and discover new music every day. Wishpr delivers crystal-clear sound quality and a social platform to share your musical moments with friends.",
    link: "https://expo.dev/artifacts/eas/6BTrtexSz41fBBDUp5UW49.apk",
  },
];
