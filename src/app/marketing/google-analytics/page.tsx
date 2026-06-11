import {
  ArrowDownToLine,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  CircleDot,
  Clock3,
  Flag,
  Globe2,
  Goal,
  MousePointerClick,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const kpis = [
  { label: "Users", value: "1,240", delta: "25.3%", icon: Users, color: "blue", spark: "users" },
  { label: "Sessions", value: "1,587", delta: "22.1%", icon: Users, color: "blue", spark: "sessions" },
  { label: "Engaged Sessions", value: "1,021", delta: "28.4%", icon: MousePointerClick, color: "blue", spark: "engaged" },
  { label: "Engagement Rate", value: "64.3%", delta: "6.7%", icon: CircleDot, color: "purple", spark: "rate" },
  { label: "Conversions", value: "58", delta: "31.8%", icon: Flag, color: "orange", spark: "conversions" },
  { label: "Conversion Rate", value: "3.66%", delta: "0.6 pp", icon: Goal, color: "orange", spark: "rate2" },
  { label: "Event Count", value: "4,932", delta: "19.6%", icon: TrendingUp, color: "green", spark: "events" }
];

const trafficSources = [
  ["Organic Search", "612", "782", "68.3%", "+24.1%"],
  ["Direct", "412", "492", "62.1%", "+15.2%"],
  ["Paid Search", "138", "176", "71.6%", "+32.8%"],
  ["Referral", "46", "65", "55.4%", "+8.6%"],
  ["Social", "18", "24", "48.3%", "-2.1%"],
  ["Email", "8", "12", "66.7%", "+10.0%"],
  ["(Other)", "6", "8", "44.4%", "-5.6%"]
];

const topPages = [
  ["Home", "1,248", "812", "1.54", "00:01:32"],
  ["Rooms & Suites", "876", "542", "1.62", "00:01:48"],
  ["Ferguson Valley Accommodation", "654", "412", "1.59", "00:01:41"],
  ["Romantic Getaway", "432", "298", "1.45", "00:01:25"],
  ["Things to Do", "298", "214", "1.39", "00:01:12"],
  ["Blog - Winter Escape", "246", "177", "1.39", "00:01:10"],
  ["Contact", "188", "122", "1.54", "00:01:05"],
  ["Deluxe King Suite", "176", "98", "1.80", "00:01:36"]
];

const realtimePages = [
  ["/", "7"],
  ["/rooms-suites", "5"],
  ["/ferguson-valley-accommodation", "3"],
  ["/romantic-getaway", "2"],
  ["/blog/winter-escape", "1"]
];

const demographics = [
  ["18-24", "8.6%", "bg-blue-500"],
  ["25-34", "24.3%", "bg-indigo-500"],
  ["35-44", "28.7%", "bg-sky-500"],
  ["45-54", "22.1%", "bg-amber-400"],
  ["55-64", "11.2%", "bg-emerald-500"],
  ["65+", "5.1%", "bg-teal-600"]
];

const devices = [
  ["Mobile", "702", "56.6%", "+21.0%", "bg-blue-500"],
  ["Desktop", "450", "36.3%", "+18.4%", "bg-violet-500"],
  ["Tablet", "88", "7.1%", "+11.5%", "bg-amber-400"]
];

const conversions = [
  ["Book Now (Thank You Page)", "26", "1.64%", "A$3,380", "+30.0%"],
  ["Booking Enquiry (Form)", "18", "1.13%", "A$0", "+28.6%"],
  ["Phone Call (Click to Call)", "9", "0.57%", "A$0", "+12.5%"],
  ["Email Click", "5", "0.31%", "A$0", "-16.7%"]
];

const events = [
  ["page_view", "2,412", "+20.3%", "1,119"],
  ["scroll", "1,102", "+22.7%", "624"],
  ["click", "876", "+18.9%", "482"],
  ["view_item", "412", "+15.6%", "312"],
  ["form_start", "198", "+28.3%", "162"]
];

const insights = [
  ["Organic search traffic increased by 28%", "Users from organic search grew from 478 to 612"],
  ["Users who viewed blog pages are 3x more likely to convert", "Blog content is driving highly engaged visitors"],
  ["Mobile engagement rate improved", "Mobile engagement rate increased by 8.2%"]
];

function Panel({
  title,
  children,
  className,
  action
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
  action?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]",
        className
      )}
    >
      {title ? <h2 className="mb-4 text-base font-bold text-zinc-950">{title}</h2> : null}
      {children}
      {action ? (
        <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
          {action} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}
    </section>
  );
}

function GoogleAnalyticsMark() {
  return (
    <span className="flex h-11 w-11 items-end gap-1" aria-hidden="true">
      <i className="h-3 w-2.5 rounded-full bg-[#f6a02d]" />
      <i className="h-6 w-2.5 rounded-full bg-[#f28b1a]" />
      <i className="h-10 w-2.5 rounded-full bg-[#f36c21]" />
    </span>
  );
}

function TinySpark({ color, variant }: { color: string; variant: string }) {
  const points: Record<string, string> = {
    users: "2,29 15,28 28,26 41,27 54,22 67,24 80,17 93,23 106,12 119,19 132,15 145,21 158,8",
    sessions: "2,30 18,29 34,24 50,24 66,16 82,20 98,12 114,27 130,21 146,24 158,10",
    engaged: "2,28 18,27 34,25 50,18 66,18 82,13 98,18 114,27 130,20 146,23 158,8",
    rate: "2,28 18,25 34,26 50,21 66,23 82,17 98,22 114,20 130,26 146,14 158,21",
    conversions: "2,30 18,28 34,24 50,22 66,17 82,26 98,18 114,20 130,23 146,16 158,12",
    rate2: "2,27 18,24 34,26 50,20 66,24 82,16 98,25 114,12 130,22 146,17 158,14",
    events: "2,28 18,25 34,27 50,22 66,25 82,18 98,23 114,15 130,22 146,14 158,20"
  };

  return (
    <svg className="mt-3 h-8 w-full" viewBox="0 0 160 34" aria-hidden="true">
      <polyline
        fill="none"
        points={points[variant]}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
    </svg>
  );
}

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  const Icon = kpi.icon;
  const colors = {
    blue: ["bg-blue-50 text-blue-600", "#4169ff"],
    purple: ["bg-violet-50 text-violet-600", "#8b5cf6"],
    orange: ["bg-orange-50 text-orange-600", "#f36c21"],
    green: ["bg-emerald-50 text-emerald-600", "#079669"]
  } as const;
  const [tone, stroke] = colors[kpi.color as keyof typeof colors];

  return (
    <Panel className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold text-zinc-950">{kpi.label}</p>
          <p className="mt-4 text-3xl font-bold">{kpi.value}</p>
          <p className="mt-2 text-sm font-semibold text-emerald-700">+ {kpi.delta}</p>
          <p className="mt-1 text-xs text-zinc-500">vs Apr 1 - Apr 23, 2025</p>
        </div>
        <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", tone)}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <TinySpark color={stroke} variant={kpi.spark} />
    </Panel>
  );
}

function UsersChart() {
  const series = [
    {
      label: "Users",
      color: "#4169ff",
      points:
        "0,156 42,132 84,145 126,126 168,118 210,94 252,106 294,86 336,112 378,104 420,91 462,70 504,78 546,118 588,101 630,96 672,118 714,103 756,88 798,100 840,80 882,84 924,69 966,74 1008,92 1050,104 1092,86 1134,95 1176,110"
    },
    {
      label: "Sessions",
      color: "#7c3aed",
      points:
        "0,102 42,74 84,86 126,78 168,70 210,54 252,58 294,38 336,50 378,73 420,86 462,78 504,64 546,52 588,50 630,77 672,82 714,63 756,78 798,62 840,38 882,32 924,34 966,30 1008,44 1050,58 1092,68 1134,62 1176,70"
    },
    {
      label: "Engaged Sessions",
      color: "#079669",
      points:
        "0,190 42,174 84,186 126,180 168,181 210,165 252,172 294,156 336,164 378,185 420,178 462,174 504,176 546,162 588,152 630,160 672,184 714,176 756,184 798,174 840,162 882,151 924,158 966,166 1008,172 1050,164 1092,168 1134,176 1176,181"
    },
    {
      label: "Previous period (Users)",
      color: "#4169ff",
      dash: "7 7",
      points:
        "0,230 42,218 84,224 126,216 168,220 210,209 252,216 294,205 336,222 378,226 420,218 462,215 504,220 546,206 588,200 630,214 672,220 714,212 756,218 798,205 840,198 882,188 924,193 966,202 1008,211 1050,204 1092,210 1134,204 1176,215"
    }
  ];

  return (
    <Panel>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold text-zinc-950">Users Over Time</h2>
        <button className="flex h-8 items-center gap-2 rounded-md border border-zinc-200 px-3 text-xs font-semibold">
          Daily <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
      <div className="mb-5 flex flex-wrap gap-5 text-xs">
        {series.map((line) => (
          <span className="flex items-center gap-2" key={line.label}>
            <i
              className="h-1.5 w-7 rounded-full"
              style={{
                backgroundColor: line.dash ? "transparent" : line.color,
                borderTop: line.dash ? `2px dashed ${line.color}` : undefined
              }}
            />
            {line.label}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 1210 270" className="h-64 w-full" aria-label="Users over time chart">
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
        {["1K", "750", "500", "250", "0"].map((label, index) => (
          <text fill="#667085" fontSize="14" key={label} x="8" y={index * 54 + 22}>
            {label}
          </text>
        ))}
        {series.map((line) => (
          <polyline
            fill="none"
            key={line.label}
            points={line.points}
            stroke={line.color}
            strokeDasharray={line.dash}
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

function TrafficPanel() {
  const widthFor = ["w-[74%]", "w-[50%]", "w-[18%]", "w-[8%]", "w-[5%]", "w-[3%]", "w-[2%]"];

  return (
    <Panel title="Where your traffic comes from" action="View traffic acquisition report">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-500">
          <tr>
            <th className="border-b border-zinc-200 py-2">Session default channel group</th>
            <th className="border-b border-zinc-200 py-2 text-right">Users</th>
            <th className="border-b border-zinc-200 py-2 text-right">Sessions</th>
            <th className="border-b border-zinc-200 py-2 text-right">Engagement Rate</th>
            <th className="border-b border-zinc-200 py-2 text-right"> </th>
          </tr>
        </thead>
        <tbody>
          {trafficSources.map(([source, users, sessions, rate, change], index) => (
            <tr className="border-b border-zinc-100 last:border-b-0" key={source}>
              <td className="py-2.5">
                <span className="grid grid-cols-[100px_1fr] items-center gap-3">
                  {source}
                  <i className={cn("h-0.5 rounded-full bg-blue-600", widthFor[index])} />
                </span>
              </td>
              <td className="py-2.5 text-right">{users}</td>
              <td className="py-2.5 text-right">{sessions}</td>
              <td className="py-2.5 text-right">{rate}</td>
              <td
                className={cn(
                  "py-2.5 text-right font-semibold",
                  change.startsWith("-") ? "text-red-600" : "text-emerald-700"
                )}
              >
                {change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function RealtimePanel() {
  const bars = [34, 58, 44, 82, 53, 38, 67, 41, 56, 35, 72, 49, 43, 61, 36, 78, 45, 52];

  return (
    <Panel title="Active users right now" action="View realtime report">
      <div className="mb-5 flex items-start justify-between">
        <p className="text-4xl font-bold">24</p>
        <div className="flex gap-1.5">
          <Badge tone="success" className="h-5 px-2">
            G
          </Badge>
          <Badge tone="success" className="h-5 px-2">
            C
          </Badge>
        </div>
      </div>
      <p className="mb-2 text-xs text-zinc-500">Page views per minute</p>
      <div className="flex h-20 items-end gap-1.5">
        {bars.map((height, index) => (
          <i
            className="w-full rounded-t-sm bg-blue-500"
            key={`${height}-${index}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto] border-b border-zinc-200 pb-2 text-xs font-semibold text-zinc-500">
        <span>Top pages</span>
        <span>Users</span>
      </div>
      {realtimePages.map(([page, users]) => (
        <div className="grid grid-cols-[1fr_auto] border-b border-zinc-100 py-2 text-sm last:border-b-0" key={page}>
          <span>{page}</span>
          <span>{users}</span>
        </div>
      ))}
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
    <Panel title={title} action={action}>
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-500">
          <tr>
            {headers.map((header, index) => (
              <th className={cn("border-b border-zinc-200 py-2 font-semibold", index > 0 && "text-right")} key={header}>
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
                  {index === row.length - 1 && (cell.startsWith("+") || cell.startsWith("-")) ? (
                    <span className={cn("font-semibold", cell.startsWith("-") ? "text-red-600" : "text-emerald-700")}>
                      {cell}
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function Donut({
  colors = "conic-gradient(#4169ff 0 56%,#7c3aed 56% 92%,#f5b524 92% 100%)",
  size = "h-40 w-40"
}: {
  colors?: string;
  size?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center rounded-full", size)} style={{ background: colors }}>
      <div className="h-[58%] w-[58%] rounded-full bg-white" />
    </div>
  );
}

function DemographicsPanel() {
  return (
    <Panel title="Who is visiting?" action="View demographics report">
      <div className="mb-4 flex gap-7 border-b border-zinc-200 text-sm">
        {["Age", "Gender", "Interests"].map((tab, index) => (
          <span
            className={cn("pb-2", index === 0 && "border-b-2 border-primary font-semibold text-primary")}
            key={tab}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="grid items-center gap-5 sm:grid-cols-[190px_1fr]">
        <Donut colors="conic-gradient(#4169ff 0 9%,#7c3aed 9% 33%,#3b82f6 33% 62%,#f5b524 62% 84%,#21a36f 84% 95%,#0f766e 95% 100%)" />
        <div className="space-y-3 text-sm">
          {demographics.map(([age, pct, color]) => (
            <div className="grid grid-cols-[1fr_auto] gap-4" key={age}>
              <span className="flex items-center gap-2">
                <i className={cn("h-2.5 w-2.5 rounded-full", color)} />
                {age}
              </span>
              <span>{pct}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function DevicesPanel() {
  return (
    <Panel title="Users by device" action="View tech details">
      <div className="grid items-center gap-6 sm:grid-cols-[220px_1fr]">
        <Donut size="h-44 w-44" />
        <div className="space-y-5 text-sm">
          {devices.map(([device, users, share, growth, color]) => (
            <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-5" key={device}>
              <span className="flex items-center gap-3">
                <i className={cn("h-3 w-3 rounded-full", color)} />
                {device}
              </span>
              <span>{users}</span>
              <span className="text-zinc-500">{share}</span>
              <span className="font-semibold text-emerald-700">{growth}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function InsightsPanel() {
  return (
    <Panel title="Analytics Insights" action="View all insights">
      <div className="space-y-1">
        {insights.map(([title, body]) => (
          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-zinc-100 py-3 last:border-b-0" key={title}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold">{title}</span>
              <span className="mt-1 block text-xs text-zinc-500">{body}</span>
            </span>
            <Badge tone="primary">New</Badge>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default function GoogleAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f6] px-5 py-8 text-zinc-950 lg:px-8">
      <header className="mb-8 flex flex-col gap-5 2xl:flex-row 2xl:items-start 2xl:justify-between">
        <div className="flex items-start gap-4">
          <GoogleAnalyticsMark />
          <div>
            <h1 className="text-3xl font-bold">Google Analytics</h1>
            <p className="mt-2 text-sm text-zinc-600">
              Understand how visitors find and engage with your website.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 2xl:justify-end">
          <button className="flex h-12 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            <Globe2 className="h-4 w-4" aria-hidden="true" />
            hentylodge.com.au
            <ChevronDown className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          </button>
          <button className="flex h-12 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-left text-sm font-semibold shadow-sm">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            <span>
              May 1 - May 23, 2025
              <span className="mt-1 block text-xs font-normal text-zinc-500">Compare: Apr 1 - Apr 23, 2025</span>
            </span>
            <ChevronDown className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          </button>
          <button className="flex h-12 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-semibold shadow-sm">
            <ArrowDownToLine className="h-4 w-4 text-primary" aria-hidden="true" />
            Export
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1.7fr_1.05fr_0.75fr]">
        <UsersChart />
        <TrafficPanel />
        <RealtimePanel />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1.28fr_0.76fr_1.1fr]">
        <DataTable
          action="View pages and screens report"
          headers={["Page title and screen class", "Views", "Users", "Views per user", "Avg. engagement time"]}
          rows={topPages}
          title="Top Pages"
        />
        <DemographicsPanel />
        <DevicesPanel />
      </section>

      <section className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
        <DataTable
          action="View conversions report"
          headers={["Conversion name", "Conversions", "Conversion rate", "Value", ""]}
          rows={conversions}
          title="Conversions"
        />
        <DataTable action="View events report" headers={["Event name", "Event count", "% change", "Users"]} rows={events} title="Events" />
        <InsightsPanel />
      </section>
    </div>
  );
}
