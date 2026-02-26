import { useState, useMemo } from "react";
import { categories, mcps, bundles, hipaaLevels, clinicalScores, stats } from "./data";

function HipaaBadge({ level }) {
  const info = hipaaLevels[level];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${info.color}`}>
      <span className={`w-2 h-2 rounded-full ${info.dot}`} />
      L{level} {info.badge}
    </span>
  );
}

function ClinicalBadge({ score }) {
  const info = clinicalScores[score];
  return (
    <span className={`text-xs font-semibold ${info.color}`}>
      {score} — {info.label}
    </span>
  );
}

function McpCard({ mcp }) {
  const [expanded, setExpanded] = useState(false);
  const catNames = mcp.categories.map(
    (cid) => categories.find((c) => c.id === cid)?.icon + " " + categories.find((c) => c.id === cid)?.name
  );

  return (
    <div
      className={`group relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10 ${
        mcp.featured
          ? "border-gold-500/40 bg-gradient-to-br from-navy-800 to-navy-900 shadow-lg shadow-gold-500/5"
          : "border-navy-700/50 bg-navy-900/80 hover:border-teal-600/40"
      }`}
    >
      {mcp.featured && (
        <div className="absolute -top-3 left-4">
          <span className="bg-gradient-to-r from-gold-600 to-gold-400 text-navy-950 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            FEATURED
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate">{mcp.name}</h3>
            <p className="text-sm text-navy-500 font-mono mt-0.5">{mcp.source}</p>
          </div>
          {mcp.tool_count && (
            <span className="ml-3 shrink-0 bg-teal-500/15 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-lg">
              {mcp.tool_count} tools
            </span>
          )}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{mcp.description}</p>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <HipaaBadge level={mcp.hipaa_level} />
          <ClinicalBadge score={mcp.clinical_score} />
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {catNames.map((name) => (
            <span key={name} className="text-xs bg-navy-800 text-slate-400 px-2 py-0.5 rounded-md">
              {name}
            </span>
          ))}
          {mcp.languages?.map((lang) => (
            <span key={lang} className="text-xs bg-navy-800 text-teal-400 px-2 py-0.5 rounded-md">
              {lang}
            </span>
          ))}
        </div>

        {mcp.tools.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-teal-400 hover:text-teal-300 font-medium cursor-pointer transition-colors"
            >
              {expanded ? "Hide tools ▲" : `View ${mcp.tools.length} tools ▼`}
            </button>
            {expanded && (
              <div className="mt-2 flex flex-wrap gap-1">
                {mcp.tools.map((t) => (
                  <code key={t} className="text-xs bg-navy-950 text-teal-300 px-2 py-0.5 rounded font-mono">
                    {t}
                  </code>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          {mcp.url && (
            <a
              href={mcp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Repository
            </a>
          )}
          {mcp.maintainer && (
            <span className="text-xs text-navy-600">by {mcp.maintainer}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function BundleCard({ bundle }) {
  return (
    <div className="rounded-2xl border border-navy-700/50 bg-gradient-to-br from-navy-800/80 to-navy-900 p-6 hover:border-teal-600/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{bundle.icon}</span>
        <h3 className="text-lg font-bold text-white">{bundle.name}</h3>
      </div>
      <p className="text-sm text-slate-400 mb-4">{bundle.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {bundle.tags.map((tag) => (
          <span key={tag} className="text-xs bg-teal-500/10 text-teal-400 px-2.5 py-1 rounded-full border border-teal-500/20">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-navy-500">
        {bundle.mcps.length} MCPs included
      </p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-navy-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredMcps = useMemo(() => {
    let results = mcps;

    if (activeCategory !== "all") {
      results = results.filter((m) => m.categories.includes(activeCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.source.toLowerCase().includes(q) ||
          m.tools.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (sortBy === "featured") {
      results = [...results].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === "hipaa") {
      results = [...results].sort((a, b) => b.hipaa_level - a.hipaa_level);
    } else if (sortBy === "clinical") {
      const order = { A: 4, B: 3, C: 2, D: 1 };
      results = [...results].sort((a, b) => order[b.clinical_score] - order[a.clinical_score]);
    }

    return results;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-navy-950 to-navy-950" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "radial-gradient(circle at 50% 0%, rgba(13,148,136,0.15), transparent 60%)"}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm font-medium text-teal-400">Physician-Vetted &bull; HIPAA-Rated &bull; Production-Ready</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-white">MCP for </span>
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Healthcare</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              The first curated marketplace of Model Context Protocol servers for healthcare.
              Every MCP reviewed for clinical relevance, HIPAA compliance, and operational readiness.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="https://github.com/rdmgator12/MCP-marketplace" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-teal-600/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
              <a href="https://github.com/rdmgator12/awesome-healthcare-mcp-servers" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-navy-700">
                Awesome List
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <StatCard value={stats.totalMcps} label="MCPs Listed" />
              <StatCard value={stats.totalTools} label="Total Tools" />
              <StatCard value={stats.totalCategories} label="Categories" />
              <StatCard value={stats.hipaaRated} label="HIPAA Rated" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Search + Sort */}
        <div className="sticky top-0 z-30 bg-navy-950/90 backdrop-blur-xl pt-4 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-navy-800/50">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search MCPs, tools, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-white placeholder-navy-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-navy-900 border border-navy-700 rounded-xl text-white focus:outline-none focus:border-teal-500 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="hipaa">Sort: HIPAA Level</option>
              <option value="clinical">Sort: Clinical Score</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mt-6 mb-8">
          {categories.map((cat) => {
            const count = cat.id === "all" ? mcps.length : mcps.filter((m) => m.categories.includes(cat.id)).length;
            if (count === 0 && cat.id !== "all") return null;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
                    : "bg-navy-800/80 text-slate-400 hover:bg-navy-700 hover:text-white border border-navy-700/50"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.name}
                <span className={`text-xs ml-1 ${activeCategory === cat.id ? "text-teal-200" : "text-navy-600"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* MCP Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {activeCategory === "all" ? "All MCPs" : categories.find((c) => c.id === activeCategory)?.name}
            </h2>
            <span className="text-sm text-navy-500">{filteredMcps.length} results</span>
          </div>

          {filteredMcps.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-navy-600">No MCPs match your search.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="mt-4 text-teal-400 hover:text-teal-300 font-medium cursor-pointer">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMcps.map((mcp) => (
                <McpCard key={mcp.id} mcp={mcp} />
              ))}
            </div>
          )}
        </section>

        {/* Bundles */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">Workflow Bundles</h2>
            <p className="text-slate-400 mt-2">Pre-configured MCP stacks for specific healthcare workflows</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundles.map((b) => (
              <BundleCard key={b.id} bundle={b} />
            ))}
          </div>
        </section>

        {/* HIPAA Legend */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-6">Compliance Rating System</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[5, 4, 3, 2, 1].map((level) => {
              const info = hipaaLevels[level];
              return (
                <div key={level} className={`rounded-xl border p-4 ${info.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-3 h-3 rounded-full ${info.dot}`} />
                    <span className="font-bold">Level {level}</span>
                  </div>
                  <p className="text-sm font-semibold mb-1">{info.badge}</p>
                  <p className="text-xs opacity-80">{info.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center rounded-2xl border border-teal-600/30 bg-gradient-to-br from-teal-900/20 to-navy-900 p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Submit Your Healthcare MCP</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We want every healthcare MCP on this marketplace. Submission is free.
            Every MCP is reviewed for clinical relevance and assigned compliance ratings.
          </p>
          <a
            href="https://github.com/rdmgator12/MCP-marketplace/issues/new?template=mcp-submission.yml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-teal-600/20 text-lg"
          >
            Submit an MCP
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white">
                MCP for Healthcare
              </p>
              <p className="text-sm text-navy-500 mt-1">
                Built by <span className="text-gold-500">Ralph Martello, MD</span> &bull; Board-Certified Pediatric Hospitalist
              </p>
              <p className="text-sm text-navy-600 mt-0.5">
                Harvard/Stanford AI Certified &bull; ACMA Certified &bull; Medical-Legal Expert
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/rdmgator12/awesome-healthcare-mcp-servers" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors">
                Awesome List
              </a>
              <a href="https://github.com/rdmgator12/MCP-marketplace" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-navy-700 mt-8">
            The Physician-Vetted Healthcare MCP Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
}
