import {
  ArrowDownToLine,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Globe2,
  Link2,
  MousePointerClick,
  Search,
  Star,
  TrendingUp,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Total Clicks", value: "1,240", delta: "25%", icon: MousePointerClick, color: "blue", series: "clicks" },
  { label: "Total Impressions", value: "36,872", delta: "24%", icon: Search, color: "purple", series: "impressions" },
  { label: "Average CTR", value: "3.36%", delta: "0.4pp", icon: MousePointerClick, color: "green", series: "ctr" },
  { label: "Average Position", value: "12.4", delta: "1.8", icon: BarChart3, color: "orange", series: "position" },
  { label: "Total Users (from Search)", value: "1,050", delta: "22%", icon: Users, color: "blue", series: "clicks" },
  { label: "Top Page Clicks", value: "420", delta: "28%", icon: ClipboardList, color: "green", series: "ctr" }
];

const queries = [
  ["ferguson valley accommodation", "210", "2,450", "8.6%", "3.2", "+1.4"],
  ["henty lodge", "150", "1,320", "11.4%", "1.1", "+0.3"],
  ["accommodation bunbury", "95", "1,080", "8.8%", "4.7", "+0.9"],
  ["ferguson valley bed and breakfast", "80", "860", "9.3%", "2.8", "-0.6"],
  ["romantic getaway perth", "65", "720", "9.0%", "5.6", "+1.2"],
  ["weekend getaway from perth", "60", "610", "9.8%", "6.3", "+1.7"],
  ["henty lodge ferguson valley", "50", "480", "10.4%", "1.5", "+0.2"],
  ["places to stay in ferguson valley", "48", "460", "10.4%", "7.1", "+2.0"]
];

const pages = [
  ["/", "420", "7,820", "5.4%", "2.1", "+0.6"],
  ["/rooms-suites", "210", "4,120", "5.1%", "3.2", "+0.4"],
  ["/ferguson-valley-accommodation", "186", "3,210", "5.8%", "2.4", "+0.7"],
  ["/romantic-getaway", "130", "2,310", "5.6%", "3.0", "+1.1"],
  ["/things-to-do", "98", "1,920", "5.1%", "6.2", "+1.5"],
  ["/gallery", "76", "1,110", "6.8%", "4.1", "+0.5"],
  ["/contact", "52", "680", "7.6%", "5.0", "+0.8"],
  ["/blog/winter-escape", "38", "420", "10.0%", "8.3", "+1.7"]
];

const searchAppearance = [
  ["Web", "1,220", "36,120", "24%"],
  ["Rich results", "162", "4,210", "18%"],
  ["FAQ", "98", "1,210", "32%"],
  ["Sitelinks", "76", "980", "21%"],
  ["Review snippets", "52", "620", "25%"],
  ["Videos", "12", "310", "12%"]
];

const countries = [
  ["Australia", "1,150", "33,210"],
  ["United States", "38", "1,120"],
  ["United Kingdom", "24", "620"],
  ["New Zealand", "18", "410"],
  ["Canada", "10", "280"],
  ["Other", "0", "192"]
];

const opportunities = [
  ["Add FAQ schema to increase rich results", "High", "danger"],
  ["Improve meta descriptions", "Medium", "warning"],
  ["Add internal links to top pages", "Medium", "warning"],
  ["Improve page speed for mobile", "Low", "success"]
];

function Panel({
  title,
  children,
  className
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]", className)}>
      {title ? <h2 className="mb-4 text-base font-bold text-zinc-950">{title}</h2> : null}
      {children}
    </section>
  );
}

function TinySpark({ color }: { color: string }) {
  return (
    <svg className="mt-3 h-8 w-full" viewBox="0 0 160 34" aria-hidden="true">
      <polyline
        fill="none"
        points="2,29 18,28 34,26 50,23 66,24 82,18 98,27 114,20 130,22 146,17 158,7"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  const Icon = kpi.icon;
  const colors = {
    blue: ["bg-blue-50 text-blue-600", "#4d6cff"],
    purple: ["bg-violet-50 text-violet-600", "#7c3aed"],
    green: ["bg-emerald-50 text-emerald-600", "#079669"],
    orange: ["bg-orange-50 text-orange-600", "#f06423"]
  } as const;
  const [tone, stroke] = colors[kpi.color as keyof typeof colors];

  return (
    <Panel className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-zinc-950">{kpi.label}</p>
          <p className="mt-4 text-3xl font-bold">{kpi.value}</p>
          <p className="mt-2 text-sm font-semibold text-emerald-700">↑ {kpi.delta}</p>
          <p className="mt-1 text-xs text-zinc-500">vs Apr 1 – Apr 23, 2025</p>
        </div>
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", tone)}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <TinySpark color={stroke} />
    </Panel>
  );
}

function PerformanceChart() {
  const lines = [
    { color: "#4d6cff", points: "0,160 42,130 84,145 126,112 168,122 210,95 252,104 294,78 336,91 378,64 420,72 462,118 504,105 546,92 588,66 630,58 672,74 714,118 756,103 798,78 840,102 882,75 924,84 966,68 1008,48 1050,60 1092,54 1134,82 1176,98" },
    { color: "#7c3aed", points: "0,115 42,80 84,88 126,82 168,78 210,60 252,72 294,42 336,51 378,23 420,34 462,79 504,85 546,64 588,50 630,43 672,48 714,78 756,82 798,61 840,80 882,57 924,58 966,50 1008,36 1050,25 1092,41 1134,36 1176,58" },
    { color: "#079669", points: "0,185 42,172 84,184 126,176 168,181 210,164 252,173 294,155 336,162 378,183 420,176 462,169 504,174 546,166 588,151 630,158 672,176 714,185 756,177 798,169 840,181 882,170 924,172 966,167 1008,151 1050,164 1092,168 1134,151 1176,169" },
    { color: "#f06423", points: "0,226 42,220 84,226 126,219 168,224 210,216 252,223 294,211 336,226 378,233 420,228 462,222 504,226 546,214 588,220 630,230 672,236 714,233 756,224 798,234 840,225 882,226 924,222 966,216 1008,207 1050,219 1092,224 1134,214 1176,222" }
  ];

  return (
    <Panel>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-6 text-xs">
          {[
            ["Clicks", "#4d6cff"],
            ["Impressions", "#7c3aed"],
            ["CTR", "#079669"],
            ["Average Position", "#f06423"]
          ].map(([label, color]) => (
            <span className="flex items-center gap-2" key={label}>
              <i className="h-1.5 w-6 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </span>
          ))}
        </div>
        <button className="flex h-8 items-center gap-2 rounded-md border border-zinc-200 px-3 text-xs font-semibold">
          Full report <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>
      <svg viewBox="0 0 1210 270" className="h-60 w-full" aria-label="Performance over time chart">
        {[0, 1, 2, 3, 4].map((line) => (
          <line
            key={line}
            stroke="#e7e9ed"
            strokeWidth="1"
            x1="0"
            x2="1180"
            y1={line * 54 + 16}
            y2={line * 54 + 16}
          />
        ))}
        {lines.map((line) => (
          <polyline
            fill="none"
            key={line.color}
            points={line.points}
            stroke={line.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        ))}
        {["May 1", "May 5", "May 9", "May 13", "May 17", "May 21"].map((label, index) => (
          <text fill="#667085" fontSize="14" key={label} x={index * 210 + 20} y="258">
            {label}
          </text>
        ))}
      </svg>
    </Panel>
  );
}

function DataTable({
  title,
  headers,
  rows,
  action
}: {
  title: string;
  headers: string[];
  rows: string[][];
  action: string;
}) {
  return (
    <Panel title={title}>
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-500">
          <tr>
            {headers.map((header) => (
              <th className="border-b border-zinc-200 py-2 font-semibold" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-b border-zinc-100 last:border-b-0" key={row.join("-")}>
              {row.map((cell, index) => (
                <td className={cn("py-2.5", index > 0 && "text-right")} key={`${cell}-${index}`}>
                  {index === row.length - 1 && cell.startsWith("+") ? (
                    <Badge tone="success">↑ {cell.slice(1)}</Badge>
                  ) : index === row.length - 1 && cell.startsWith("-") ? (
                    <Badge tone="danger">↓ {cell.slice(1)}</Badge>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
        {action} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </Panel>
  );
}

function SearchAppearance() {
  const icons = [Globe2, Star, Search, Link2, Star, FileText];
  return (
    <Panel title="Search Appearance">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-500">
          <tr>
            <th className="border-b border-zinc-200 py-2"> </th>
            <th className="border-b border-zinc-200 py-2 text-right">Clicks</th>
            <th className="border-b border-zinc-200 py-2 text-right">Impressions</th>
            <th className="border-b border-zinc-200 py-2 text-right"> </th>
          </tr>
        </thead>
        <tbody>
          {searchAppearance.map(([label, clicks, impressions, change], index) => {
            const Icon = icons[index];
            return (
              <tr className="border-b border-zinc-100 last:border-b-0" key={label}>
                <td className="py-3">
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    {label}
                  </span>
                </td>
                <td className="py-3 text-right">{clicks}</td>
                <td className="py-3 text-right">{impressions}</td>
                <td className="py-3 text-right text-emerald-700">↑ {change}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
        View full report <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </Panel>
  );
}

function CountriesPanel() {
  return (
    <Panel title="Countries">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative h-48 rounded-lg bg-[radial-gradient(circle_at_74%_74%,#0f6a4d_0_5%,transparent_6%),radial-gradient(circle_at_68%_28%,#48a782_0_2%,transparent_3%),radial-gradient(circle_at_19%_38%,#b8d8c8_0_8%,transparent_9%),linear-gradient(140deg,#e5e7e9,#f4f5f5)]">
          <div className="absolute bottom-8 right-14 h-12 w-16 rounded-[55%_45%_50%_45%] bg-[#0f6a4d]" />
          <div className="absolute left-10 top-14 h-12 w-16 rounded-[60%_35%_60%_45%] bg-[#cbd8d0]" />
          <div className="absolute right-28 top-20 h-16 w-12 rounded-[45%] bg-[#d7ddd9]" />
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-zinc-500">
            <tr>
              <th className="border-b border-zinc-200 py-2">Country</th>
              <th className="border-b border-zinc-200 py-2 text-right">Clicks</th>
              <th className="border-b border-zinc-200 py-2 text-right">Impressions</th>
            </tr>
          </thead>
          <tbody>
            {countries.map(([country, clicks, impressions]) => (
              <tr className="border-b border-zinc-100 last:border-b-0" key={country}>
                <td className="py-2.5">{country}</td>
                <td className="py-2.5 text-right">{clicks}</td>
                <td className="py-2.5 text-right">{impressions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
        View full report <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </Panel>
  );
}

function Donut({ colors = "conic-gradient(#2563eb 0 57%,#7c3aed 57% 93%,#f5b524 93% 100%)" }: { colors?: string }) {
  return (
    <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full" style={{ background: colors }}>
      <div className="h-20 w-20 rounded-full bg-white" />
    </div>
  );
}

export default function SearchConsolePage() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] px-5 py-8 text-zinc-950 lg:px-8">
      <header className="mb-8 flex flex-col gap-5 2xl:flex-row 2xl:items-start 2xl:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Google Search Console</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Track your website&apos;s search performance and discover opportunities to grow.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 2xl:justify-end">
          <button className="flex h-11 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            <Globe2 className="h-4 w-4" aria-hidden="true" />
            hentylodge.com.au
            <Badge tone="success">Verified</Badge>
          </button>
          <button className="flex h-11 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            May 1 – May 23, 2025
          </button>
          <button className="h-11 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            Compare: Apr 1 – Apr 23, 2025
          </button>
          <button className="flex h-11 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            <ArrowDownToLine className="h-4 w-4" aria-hidden="true" />
            Export
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1.42fr_1fr]">
        <PerformanceChart />
        <SearchAppearance />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr_1.35fr]">
        <DataTable
          action="View all queries"
          headers={["Query", "Clicks", "Impressions", "CTR", "Position", ""]}
          rows={queries}
          title="Top Queries"
        />
        <DataTable
          action="View all pages"
          headers={["Page", "Clicks", "Impressions", "CTR", "Position", ""]}
          rows={pages}
          title="Top Pages"
        />
        <CountriesPanel />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-4">
        <Panel title="Top Devices">
          <div className="grid grid-cols-[150px_1fr] items-center gap-6">
            <Donut />
            <div className="space-y-4 text-sm">
              {[
                ["Mobile", "702", "56.6%", "21%"],
                ["Desktop", "450", "36.3%", "18%"],
                ["Tablet", "88", "7.1%", "12%"]
              ].map(([device, clicks, share, growth]) => (
                <div className="grid grid-cols-[1fr_auto_auto] gap-4" key={device}>
                  <span>{device}</span>
                  <span>{clicks}</span>
                  <span className="text-emerald-700">↑ {growth}</span>
                  <span className="col-start-2 text-zinc-500">{share}</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel title="Core Web Vitals">
          {["Mobile", "Desktop", "HTTPS"].map((item) => (
            <div className="mb-5 grid grid-cols-[80px_70px_1fr] items-center gap-4 text-sm" key={item}>
              <span>{item}</span>
              <Badge tone="success">Good</Badge>
              <span className="h-2 rounded-full bg-zinc-100">
                <span className="block h-2 w-[88%] rounded-full bg-emerald-600" />
              </span>
            </div>
          ))}
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            View Core Web Vitals report <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </Panel>

        <Panel title="Index Coverage">
          <div className="grid grid-cols-[140px_1fr] items-center gap-5">
            <Donut colors="conic-gradient(#47b881 0 85%,#f5b524 85% 95%,#ef4444 95% 100%)" />
            <div className="space-y-4 text-sm">
              {[
                ["Valid", "246", "85.4%", "bg-emerald-600"],
                ["Warnings", "28", "9.7%", "bg-amber-400"],
                ["Errors", "14", "4.9%", "bg-red-500"]
              ].map(([label, count, pct, color]) => (
                <div className="grid grid-cols-[1fr_auto_auto] gap-4" key={label}>
                  <span className="flex items-center gap-2">
                    <i className={cn("h-2.5 w-2.5 rounded-full", color)} />
                    {label}
                  </span>
                  <span>{count}</span>
                  <span>{pct}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            View coverage report <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </Panel>

        <Panel title="Opportunities">
          <div className="space-y-1">
            {opportunities.map(([item, priority, tone]) => (
              <div className="flex items-center justify-between border-b border-zinc-100 py-3 text-sm last:border-b-0" key={item}>
                <span>{item}</span>
                <Badge tone={tone as "success" | "warning" | "danger"}>{priority}</Badge>
              </div>
            ))}
          </div>
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
            View all opportunities <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </Panel>
      </section>
    </div>
  );
}
