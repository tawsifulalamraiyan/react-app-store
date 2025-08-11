import { useState, useEffect } from "react";
import { Download, Star, Search } from "lucide-react";

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

import { sampleAppData } from "./constants/index";

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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-slate-900">
      {/* Header */}
      <header className="bg-zinc-800 shadow-sm border-b border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white mb-6">App Store</h1>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-zinc-600 bg-zinc-700 text-white placeholder-zinc-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    ? "bg-green-600 text-white"
                    : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
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
          <h2 className="text-2xl font-bold text-white mb-6">Available Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps
              .filter((app) => app.link)
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-zinc-700">
                  {/* App Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={app.logo}
                        alt={`${app.name} logo`}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {app.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{app.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* App Description */}
                  <p className="text-zinc-300 mb-4 line-clamp-2">
                    {app.description}
                  </p>

                  {/* App Stats */}
                  <div className="flex items-center space-x-4 mb-6 text-sm text-zinc-400">
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
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
            <h2 className="text-2xl font-bold text-white mb-6">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApps
                .filter((app) => !app.link)
                .map((app) => (
                  <div
                    key={app.id}
                    className="bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 relative overflow-hidden border border-zinc-700">
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
                          <h3 className="text-xl font-semibold text-zinc-300">
                            {app.name}
                          </h3>
                          <p className="text-sm text-zinc-500">
                            {app.category}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* App Description */}
                    <p className="text-zinc-400 mb-4 line-clamp-2">
                      {app.description}
                    </p>

                    {/* App Stats */}
                    <div className="flex items-center space-x-4 mb-6 text-sm text-zinc-500">
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
                      className="w-full bg-zinc-600 text-zinc-400 font-semibold py-3 px-4 rounded-lg cursor-not-allowed flex items-center justify-center space-x-2">
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
            <p className="text-zinc-400 text-lg">
              No apps found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
