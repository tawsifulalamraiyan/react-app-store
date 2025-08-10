import React, { useState, useEffect } from "react";
import { Download, Star, Search } from "lucide-react";

// Define the App interface
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

// Sample app data - replace this with your actual appData.json import
const sampleAppData: AppData[] = [
  {
    id: 1,
    name: "PhotoEditor Pro",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=center",
    category: "Photography",
    rating: 4.8,
    downloads: "1M+",
    size: "45MB",
    description: "Professional photo editing with advanced filters and tools",
    link: "https://expo.dev/artifacts/eas/j2xaq3HQ8n27jHVwD9mzz.apk",
  },
  {
    id: 2,
    name: "FitnessTracker",
    logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center",
    category: "Health & Fitness",
    rating: 4.6,
    downloads: "500K+",
    size: "28MB",
    description: "Track your workouts, calories, and fitness goals",
    // No link property - will show "Coming Soon"
  },
  {
    id: 3,
    name: "MusicStream",
    logo: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center",
    category: "Music",
    rating: 4.9,
    downloads: "2M+",
    size: "52MB",
    description: "Stream millions of songs with high-quality audio",
    link: "https://example.com/music-app.apk",
  },
  {
    id: 4,
    name: "TaskManager",
    logo: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=100&h=100&fit=crop&crop=center",
    category: "Productivity",
    rating: 4.5,
    downloads: "800K+",
    size: "15MB",
    description: "Organize your tasks and boost productivity",
    // No link property - will show "Coming Soon"
  },
  {
    id: 5,
    name: "GameCenter",
    logo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center",
    category: "Games",
    rating: 4.7,
    downloads: "3M+",
    size: "120MB",
    description: "Exciting puzzle and adventure games collection",
    link: "https://example.com/game-center.apk",
  },
  {
    id: 6,
    name: "WeatherPlus",
    logo: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=100&h=100&fit=crop&crop=center",
    category: "Weather",
    rating: 4.4,
    downloads: "1.5M+",
    size: "22MB",
    description: "Accurate weather forecasts and alerts",
    link: "https://example.com/weather-plus.apk",
  },
];

const App = () => {
  const [apps, setApps] = useState<AppData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    // In a real app, you would fetch from appData.json
    // fetch('./appData.json').then(res => res.json()).then(setApps);
    setApps(sampleAppData);
  }, []);

  const categories = ["All", ...new Set(apps.map((app) => app.category))];

  const filteredApps = apps.filter((app) => {
    const matchesSearch = app.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (link: string | undefined, appName: string): void => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert(`Download link not available for ${appName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">App Store</h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* App Grid */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Available Apps Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Available Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps
              .filter((app) => app.link)
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  {/* App Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={app.logo}
                        alt={`${app.name} logo`}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {app.name}
                        </h3>
                        <p className="text-sm text-gray-500">{app.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* App Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {/* App Stats */}
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{app.rating}</span>
                    </div>
                    <span>{app.downloads}</span>
                    <span>{app.size}</span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(app.link, app.name)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        {filteredApps.filter((app) => !app.link).length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps
                .filter((app) => !app.link)
                .map((app) => (
                  <div
                    key={app.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 relative overflow-hidden">
                    {/* Coming Soon Badge */}
                    <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      COMING SOON
                    </div>

                    {/* App Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={app.logo}
                          alt={`${app.name} logo`}
                          className="w-16 h-16 rounded-xl object-cover opacity-75"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-700">
                            {app.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {app.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* App Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {app.description}
                    </p>

                    {/* App Stats */}
                    <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span>{app.rating}</span>
                      </div>
                      <span>{app.downloads}</span>
                      <span>{app.size}</span>
                    </div>

                    {/* Coming Soon Button */}
                    <button
                      disabled
                      className="w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Coming Soon</span>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No apps found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
