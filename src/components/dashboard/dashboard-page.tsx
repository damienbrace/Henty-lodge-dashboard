import {
  ArrowRight,
  BedDouble,
  CircleDollarSign,
  Home,
  Send,
  Sparkles,
  Star,
  Sun,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, formatCurrency } from "@/lib/utils";

const kpis = [
  {
    label: "Check-ins",
    value: "1",
    detail: "Today",
    sub: "2 this weekend",
    icon: ArrowRight,
    tone: "green"
  },
  {
    label: "Check-outs",
    value: "1",
    detail: "Today",
    sub: "2 this weekend",
    icon: ArrowRight,
    tone: "red"
  },
  {
    label: "Current guests",
    value: "3",
    detail: "Staying",
    sub: "2 rooms",
    icon: Users,
    tone: "purple"
  },
  {
    label: "Occupancy",
    value: "67%",
    detail: "This month",
    sub: "12% vs last month",
    icon: BedDouble,
    tone: "green"
  },
  {
    label: "Revenue (May)",
    value: formatCurrency(7320),
    detail: "",
    sub: "12% vs last month",
    icon: CircleDollarSign,
    tone: "gold"
  },
  {
    label: "Reviews (avg)",
    value: "4.9",
    detail: "24 reviews",
    sub: "★★★★★",
    icon: Star,
    tone: "blue"
  }
];

const upcomingBookings = [
  ["24", "May", "Sarah & James", "Deluxe King Suite", "1 night"],
  ["25", "May", "Emily Thompson", "Deluxe Queen Suite", "2 nights"],
  ["27", "May", "Michael & Anna", "Deluxe King Suite", "2 nights"],
  ["30", "May", "David & Karen", "Deluxe Queen Suite", "3 nights"],
  ["2", "Jun", "Returning Guest", "Deluxe King Suite", "2 nights"]
];

const tasks = [
  ["Prepare room for check-in", "Deluxe King Suite", "11:00 AM"],
  ["Stock breakfast provisions", "Kitchen", "11:00 AM"],
  ["Clean & inspect rooms", "Both rooms", "12:00 PM"],
  ["Check firewood levels", "Outdoor area", "2:00 PM"],
  ["Reply to guest messages", "2 pending", "3:00 PM"]
];

const guests = [
  ["Sarah & James", "Arrived May 24", "2 stays", "Romantic getaway"],
  ["Emily Thompson", "Staying now", "1 stay", "Wine lover"],
  ["Michael & Anna", "Stayed Feb 2025", "1 stay", "Wine weekend"],
  ["David & Karen", "Upcoming May 30", "3 stays", "Love the fireplace"]
];

const contentIdeas = [
  ["Romantic winter weekend near Bunbury", "High opportunity"],
  ["Ferguson Valley 2-night itinerary guide", "High opportunity"],
  ["Best wineries near Henty Lodge", "Medium opportunity"],
  ["Mid-week escape offer landing page", "High opportunity"]
];

const miniCalendar = [
  "empty",
  "empty",
  "empty",
  "empty",
  "gap",
  "empty",
  "booked",
  "booked",
  "booked",
  "booked",
  "booked",
  "empty",
  "booked",
  "booked",
  "booked",
  "booked",
  "empty",
  "empty",
  "booked",
  "booked",
  "booked",
  "booked",
  "gap",
  "gap",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty"
];

const miniCalendarTwo = [
  "booked",
  "booked",
  "booked",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "gap",
  "gap",
  "gap",
  "empty",
  "empty",
  "empty",
  "empty",
  "gap",
  "gap",
  "gap",
  "empty",
  "empty",
  "empty",
  "empty",
  "booked",
  "booked",
  "booked",
  "empty",
  "empty",
  "empty",
  "empty"
];

function MiniPanel({
  title,
  children,
  className
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]", className)}>
      <div className="bg-zinc-900 px-4 py-2.5 text-xs font-bold uppercase text-white">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}

function MetricCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "green"
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: typeof Home;
  tone?: "green" | "red" | "purple" | "gold" | "blue";
}) {
  const tones = {
    green: "bg-emerald-100 text-emerald-700",
    red: "bg-rose-100 text-rose-600",
    purple: "bg-violet-100 text-violet-700",
    gold: "bg-amber-100 text-amber-700",
    blue: "bg-sky-100 text-sky-700"
  };

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-3 shadow-[0_5px_16px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] font-bold uppercase text-zinc-600">{label}</p>
        {Icon ? (
          <span className={cn("flex h-9 w-9 items-center justify-center rounded-full", tones[tone])}>
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-2xl font-bold text-zinc-950">{value}</p>
      {delta ? <p className="mt-1 text-[11px] font-medium text-emerald-700">{delta}</p> : null}
    </div>
  );
}

function SparkLine() {
  return (
    <svg viewBox="0 0 160 54" className="h-14 w-full" aria-hidden="true">
      <polyline
        points="4,42 22,36 40,39 58,28 76,31 94,20 112,26 130,13 156,8"
        fill="none"
        stroke="#0b5a45"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <polyline
        points="4,48 22,44 40,41 58,39 76,35 94,31 112,25 130,20 156,18"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DonutChart() {
  return (
    <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[conic-gradient(#324652_0_48%,#8fb5a2_48%_68%,#a993d8_68%_82%,#d6b66c_82%_94%,#e9edf0_94%_100%)]">
      <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-white text-center">
        <span className="text-lg font-bold">1,240</span>
        <span className="text-[10px] text-zinc-500">Visitors</span>
      </div>
    </div>
  );
}

function FunnelChart() {
  return (
    <div className="mx-auto w-full max-w-[240px] space-y-1 py-2">
      {[
        ["Visitors", "w-[100%] bg-slate-600"],
        ["Availability", "w-[78%] bg-indigo-300"],
        ["Checkout", "w-[54%] bg-violet-300"],
        ["Bookings", "w-[28%] bg-purple-300"]
      ].map(([label, className]) => (
        <div className="flex items-center gap-2" key={label}>
          <div className={cn("mx-auto h-8 rounded-sm", className)} />
          <span className="w-20 text-[10px] text-zinc-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

function OccupancyCalendar({ cells }: { cells: string[] }) {
  return (
    <div className="grid grid-cols-7 gap-0.5">
      {cells.map((cell, index) => (
        <span
          className={cn(
            "aspect-square rounded-[3px] border border-zinc-200",
            cell === "booked" && "border-emerald-200 bg-emerald-300",
            cell === "gap" && "border-rose-200 bg-rose-200",
            cell === "blocked" && "border-zinc-500 bg-zinc-500"
          )}
          key={`${cell}-${index}`}
        />
      ))}
    </div>
  );
}

function MainDashboard() {
  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <header className="flex flex-col gap-4 border-b border-zinc-200 pb-7 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-950">Good morning, Lisa</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Here&apos;s what&apos;s happening at Henty Lodge today.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="flex min-w-28 items-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
            <Sun className="h-4 w-4 text-amber-500" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">12C</p>
              <p className="text-[10px] text-zinc-500">Ferguson Valley</p>
            </div>
          </div>
          <div className="min-w-28 rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.06)]">
            <p className="text-xs text-zinc-500">Friday</p>
            <p className="text-sm font-bold">23 May 2025</p>
          </div>
        </div>
      </header>

      <div className="mt-4">
        <p className="mb-3 text-xs font-bold uppercase text-zinc-800">Today at a glance</p>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {kpis.map((kpi) => (
            <MetricCard
              icon={kpi.icon}
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              delta={kpi.sub}
              tone={kpi.tone as "green" | "red" | "purple" | "gold" | "blue"}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1.05fr_1.6fr_1.05fr]">
        <div className="h-[330px] rounded-lg border border-zinc-200 bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase">Upcoming bookings</h2>
          </div>
          <div className="space-y-3">
            {upcomingBookings.map(([day, month, guest, room, nights]) => (
              <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3 text-xs" key={`${day}-${guest}`}>
                <div className="rounded-md bg-zinc-50 py-1 text-center">
                  <p className="font-bold">{day}</p>
                  <p className="text-[9px] uppercase text-zinc-500">{month}</p>
                </div>
                <div>
                  <p className="font-bold">{guest}</p>
                  <p className="text-zinc-500">{room}</p>
                </div>
                <p className="text-zinc-600">{nights}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-zinc-100 pt-3 text-center text-xs font-bold">
            View all bookings <ArrowRight className="inline h-3 w-3" aria-hidden="true" />
          </div>
        </div>

        <div className="h-[330px] rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-xs font-bold uppercase">Occupancy calendar (next 30 days)</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-bold">May</p>
              <OccupancyCalendar cells={miniCalendar} />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold">June</p>
              <OccupancyCalendar cells={miniCalendarTwo} />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-zinc-600">
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-emerald-300" />Booked</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm border border-zinc-200" />Available</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-rose-200" />Gap</span>
            <span className="flex items-center gap-1"><i className="h-3 w-3 rounded-sm bg-zinc-600" />Blocked</span>
          </div>
          <div className="mt-4 border-t border-zinc-100 pt-3 text-center text-xs font-bold">
            View full calendar <ArrowRight className="inline h-3 w-3" aria-hidden="true" />
          </div>
        </div>

        <div className="h-[330px] rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-xs font-bold uppercase">Today&apos;s tasks</h2>
          <div className="mt-4 space-y-3">
            {tasks.map(([title, location, time]) => (
              <div className="grid grid-cols-[18px_1fr_auto] gap-2 text-xs" key={title}>
                <span className="mt-0.5 h-3.5 w-3.5 rounded-sm border border-zinc-400" />
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-zinc-500">{location}</p>
                </div>
                <p className="text-zinc-600">{time}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-zinc-100 pt-3 text-center text-xs font-bold">
            View all tasks <ArrowRight className="inline h-3 w-3" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-xs font-bold uppercase">Guest messages</h2>
          {["Sarah & James", "Emily Thompson"].map((guest) => (
            <div className="mt-3 flex items-center gap-2 text-xs" key={guest}>
              <span className="h-7 w-7 rounded-full bg-zinc-200" />
              <div className="min-w-0 flex-1">
                <p className="font-bold">{guest}</p>
                <p className="truncate text-zinc-500">Hi, just confirming our arrival time...</p>
              </div>
              <Badge tone="ai">New</Badge>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-xs font-bold uppercase">Review requests</h2>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[conic-gradient(#ef8c79_0_20%,#8fb5a2_20%_80%,#f0d49c_80%_100%)]">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-white">
                <span className="text-xl font-bold">4</span>
                <span className="text-[9px] text-zinc-500">Queued</span>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <p>Today <b className="ml-6">1</b></p>
              <p>Tomorrow <b className="ml-2">2</b></p>
              <p>This week <b className="ml-5">1</b></p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-xs font-bold uppercase">Marketing overview</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div><p className="text-zinc-500">Website visitors</p><p className="text-xl font-bold">1,240</p><p className="text-emerald-700">+25%</p></div>
            <div><SparkLine /></div>
            <div><p className="text-zinc-500">Enquiry clicks</p><p className="text-xl font-bold">9</p><p className="text-emerald-700">+10%</p></div>
            <div><p className="text-zinc-500">Conversion rate</p><p className="text-xl font-bold">0.9%</p><p className="text-emerald-700">+8%</p></div>
          </div>
        </div>
        <div className="rounded-lg border border-amber-100 bg-[#fffaf0] p-4">
          <h2 className="flex items-center gap-2 text-xs font-bold uppercase">
            <Sparkles className="h-4 w-4 text-amber-600" aria-hidden="true" />
            AI suggestion
          </h2>
          <p className="mt-4 text-sm font-bold">You have 3 mid-week gaps next week.</p>
          <p className="mt-2 text-xs text-zinc-600">Create a mid-week escape offer to boost occupancy.</p>
          <Button className="mt-4 h-8 px-3 text-xs">Create campaign</Button>
        </div>
      </div>
    </section>
  );
}

function BookingsPreview() {
  const days = [
    ["23", "Fri"],
    ["24", "Sat"],
    ["25", "Sun"],
    ["26", "Mon"],
    ["27", "Tue"],
    ["28", "Wed"],
    ["29", "Thu"],
    ["30", "Fri"],
    ["31", "Sat"],
    ["2", "Sun"],
    ["2", "Mon"],
    ["3", "Tue"]
  ];
  const rows = [
    {
      room: "Deluxe King Suite",
      detail: "(1 room)",
      bars: [
        { label: "Sarah & James", start: 1, span: 3, type: "booked" },
        { label: "Emily Thompson", start: 5, span: 3, type: "booked" },
        { label: "Michael & Anna", start: 8, span: 3, type: "booked" },
        { label: "Gap (2 nights)", start: 11, span: 2, type: "gap" }
      ]
    },
    {
      room: "Deluxe Queen Suite",
      detail: "(1 room)",
      bars: [
        { label: "Gap (1 night)", start: 2, span: 2, type: "gap" },
        { label: "David & Karen", start: 4, span: 4, type: "booked" },
        { label: "Returning Guest", start: 9, span: 4, type: "booked" }
      ]
    }
  ];

  return (
    <MiniPanel className="h-[365px]" title="Bookings dashboard">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Bookings</h3>
        <button className="rounded-md border border-zinc-200 px-3 py-1 text-xs">Filters</button>
      </div>
      <div className="mt-3 flex gap-6 border-b border-zinc-200 text-xs">
        {["Calendar", "List", "Availability", "Sources"].map((tab, index) => (
          <span className={cn("pb-2", index === 0 && "border-b-2 border-primary font-bold")} key={tab}>
            {tab}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold">May - June 2025</span>
          <span className="text-zinc-400">‹</span>
          <span className="text-zinc-400">›</span>
          <button className="rounded-md border border-zinc-200 px-2 py-1">Today</button>
        </div>
        <div className="flex gap-2">
          <button className="rounded-md border border-zinc-200 px-2 py-1">All rooms</button>
          <button className="rounded-md border border-zinc-200 px-2 py-1">30 days</button>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200">
        <div className="grid grid-cols-[150px_repeat(12,minmax(34px,1fr))] border-b border-zinc-200 bg-white text-[10px] text-zinc-600">
          <span className="border-r border-zinc-200" />
          {days.map(([day, dow], index) => (
            <span
              className={cn(
                "flex h-12 flex-col items-center justify-center border-r border-zinc-100 last:border-r-0",
                ["Sat", "Sun"].includes(dow) && "bg-rose-50/55"
              )}
              key={`${day}-${dow}-${index}`}
            >
              <b className={cn("text-xs text-zinc-800", ["Sat", "Sun"].includes(dow) && "text-rose-500")}>{day}</b>
              <span className="mt-0.5 uppercase">{dow}</span>
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div
            className="grid h-[74px] grid-cols-[150px_repeat(12,minmax(34px,1fr))] border-b border-zinc-200 last:border-b-0"
            key={row.room}
          >
            <div className="flex flex-col justify-center border-r border-zinc-200 px-4">
              <p className="text-xs font-bold">{row.room}</p>
              <p className="mt-1 text-[10px] text-zinc-500">{row.detail}</p>
            </div>
            {days.map(([day, dow], index) => (
              <span
                className={cn(
                  "border-r border-zinc-100 last:border-r-0",
                  ["Sat", "Sun"].includes(dow) && "bg-rose-50/40"
                )}
                key={`${row.room}-${day}-${dow}-${index}`}
              />
            ))}
            {row.bars.map((bar) => (
              <div
                className={cn(
                  "z-10 my-auto ml-2 flex h-8 items-center px-4 text-xs font-semibold shadow-sm",
                  bar.type === "booked" && "bg-[#679a79] text-white",
                  bar.type === "gap" && "text-rose-800"
                )}
                key={`${row.room}-${bar.label}`}
                style={{
                  gridColumn: `${bar.start + 1} / span ${bar.span}`,
                  gridRow: 1,
                  clipPath:
                    bar.type === "booked"
                      ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)"
                      : "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
                  background:
                    bar.type === "gap"
                      ? "repeating-linear-gradient(135deg, rgba(244, 176, 190, 0.78) 0 8px, rgba(248, 205, 214, 0.9) 8px 16px)"
                      : undefined
                }}
              >
                {bar.label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-5 text-[10px] text-zinc-600">
        <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-[#679a79]" />Booked</span>
        <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-rose-200" />Gap</span>
        <span className="flex items-center gap-1"><i className="h-2.5 w-2.5 rounded-sm bg-zinc-600" />Blocked</span>
      </div>
    </MiniPanel>
  );
}

function MarketingPreview() {
  return (
    <MiniPanel className="h-[470px]" title="Marketing dashboard">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Marketing Overview</h3>
        <button className="rounded-md border border-zinc-200 px-3 py-1 text-xs">This month</button>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-5">
        <MetricCard label="Website visitors" value="1,240" delta="+25%" />
        <MetricCard label="Book now clicks" value="176" delta="+18%" />
        <MetricCard label="Enquiries" value="9" delta="-10%" tone="red" />
        <MetricCard label="Direct bookings" value="8" delta="+33%" />
        <MetricCard label="Conversion rate" value="0.9%" delta="+6%" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr_0.8fr]">
        <div className="rounded-lg border border-zinc-200 p-3">
          <h4 className="text-xs font-bold">Booking Funnel</h4>
          <FunnelChart />
        </div>
        <div className="rounded-lg border border-zinc-200 p-3">
          <h4 className="text-xs font-bold">Traffic Sources</h4>
          <div className="mt-2 grid grid-cols-[130px_1fr] items-center gap-3">
            <DonutChart />
            <div className="space-y-2 text-xs">
              {["Google 48%", "Direct 24%", "Facebook 12%", "Instagram 6%"].map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-zinc-200 p-3">
          <h4 className="text-xs font-bold">Top Pages</h4>
          {["Home 420", "Accommodation 310", "Rooms 260", "Local Guide 150"].map((item) => (
            <div className="mt-3 flex justify-between border-b border-zinc-100 pb-2 text-xs" key={item}>
              <span>{item.split(" ")[0]}</span>
              <b>{item.split(" ").at(-1)}</b>
            </div>
          ))}
        </div>
      </div>
    </MiniPanel>
  );
}

function GuestsPreview() {
  return (
    <MiniPanel title="Guests dashboard">
      <h3 className="text-lg font-bold">Guest Directory</h3>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.9fr]">
        <div className="rounded-lg border border-zinc-200 p-3">
          {guests.map(([name, stay, visits, tag]) => (
            <div className="grid grid-cols-[32px_1fr_auto] gap-3 border-b border-zinc-100 py-2 text-xs last:border-b-0" key={name}>
              <span className="h-8 w-8 rounded-full bg-zinc-200" />
              <div><p className="font-bold">{name}</p><p className="text-zinc-500">{stay}</p></div>
              <div className="text-right"><p>{visits}</p><p className="text-zinc-500">{tag}</p></div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-200 p-3 text-xs">
          <h4 className="font-bold">Guest Profile</h4>
          <p className="mt-3 font-bold">Sarah & James</p>
          <p className="text-zinc-500">sarah.james@email.com</p>
          <ul className="mt-4 list-disc space-y-1 pl-4 text-zinc-600">
            <li>Love red wine and local produce</li>
            <li>Enjoy late check-out</li>
            <li>Celebrated anniversary in June</li>
          </ul>
          <Button variant="secondary" className="mt-5 h-8 w-full text-xs">
            <Send className="h-3 w-3" aria-hidden="true" />
            Send message
          </Button>
        </div>
      </div>
    </MiniPanel>
  );
}

function ReviewsPreview() {
  return (
    <MiniPanel title="Reviews dashboard">
      <h3 className="text-lg font-bold">Reviews Overview</h3>
      <div className="mt-4 grid grid-cols-4 gap-3">
        <MetricCard label="Average rating" value="4.9" delta="+0.2" tone="gold" />
        <MetricCard label="New reviews" value="7" delta="This month" />
        <MetricCard label="Total reviews" value="24" delta="All time" />
        <MetricCard label="Review score" value="4.9" delta="+0.3" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-3 text-xs">
          <h4 className="font-bold">Recent Reviews</h4>
          {["Absolutely beautiful stay!", "Perfect weekend escape."].map((review) => (
            <div className="mt-3 border-b border-zinc-100 pb-3 last:border-b-0" key={review}>
              <p className="font-bold">Emma B.</p>
              <p className="text-amber-500">★★★★★</p>
              <p className="text-zinc-600">{review}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-200 p-3 text-xs">
          <h4 className="font-bold">Pending Review Requests</h4>
          {["Michael & Anna", "David & Karen", "Rachel & Tom"].map((name) => (
            <div className="mt-3 flex items-center justify-between" key={name}>
              <span>{name}</span>
              <button className="rounded-md border border-emerald-200 px-3 py-1 text-emerald-700">Send</button>
            </div>
          ))}
        </div>
      </div>
    </MiniPanel>
  );
}

function FinancePreview() {
  return (
    <MiniPanel title="Finance dashboard">
      <h3 className="text-lg font-bold">Finance Overview</h3>
      <div className="mt-4 grid grid-cols-4 gap-3">
        <MetricCard label="Revenue" value="$7,320" delta="+18%" />
        <MetricCard label="Avg nightly rate" value="$305" delta="+8%" />
        <MetricCard label="Occupancy" value="67%" delta="+12%" />
        <MetricCard label="Direct bookings" value="62%" delta="+10%" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-3">
          <h4 className="text-xs font-bold">Revenue Trend</h4>
          <SparkLine />
        </div>
        <div className="rounded-lg border border-zinc-200 p-3">
          <h4 className="text-xs font-bold">Revenue by Source</h4>
          <div className="mt-2 grid grid-cols-[120px_1fr] items-center gap-3">
            <DonutChart />
            <div className="space-y-2 text-xs">
              {["Direct Website 62%", "Booking.com 20%", "Airbnb 13%", "Other 5%"].map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </div>
      </div>
    </MiniPanel>
  );
}

function ContentPreview() {
  return (
    <MiniPanel title="Content & AI dashboard">
      <h3 className="text-lg font-bold">Content & AI Hub</h3>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-zinc-200 p-3">
          {contentIdeas.map(([idea, status]) => (
            <div className="grid grid-cols-[32px_1fr_auto] items-center gap-3 border-b border-zinc-100 py-2 text-xs last:border-b-0" key={idea}>
              <span className="h-8 w-8 rounded-full bg-zinc-200" />
              <p className="font-semibold">{idea}</p>
              <Badge tone={status.includes("High") ? "success" : "warning"}>{status}</Badge>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-zinc-200 p-3 text-xs">
          <h4 className="font-bold">AI Assistant</h4>
          <p className="mt-2 text-zinc-600">How can I help you today?</p>
          {["Write an email", "Create social post", "Generate campaign", "Draft blog post", "Review reply"].map((action) => (
            <button className="mt-2 flex h-8 w-full items-center gap-2 rounded-md border border-zinc-200 px-3 text-left" key={action}>
              <Sparkles className="h-3 w-3 text-ai" aria-hidden="true" />
              {action}
            </button>
          ))}
        </div>
      </div>
    </MiniPanel>
  );
}

export function DashboardPage() {
  return (
    <div className="dashboard-overview-scale min-h-screen bg-[#eef1ee] px-3 py-3 text-zinc-950 lg:px-4">
      <div className="mx-auto grid max-w-[1900px] gap-3 xl:grid-cols-[1.48fr_1fr]">
        <MainDashboard />
        <div>
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold uppercase tracking-normal">
            Sub dashboards overview <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </h2>
          <div className="grid gap-3">
            <BookingsPreview />
            <MarketingPreview />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-3 grid max-w-[1900px] gap-3 xl:grid-cols-4">
        <GuestsPreview />
        <ReviewsPreview />
        <FinancePreview />
        <ContentPreview />
      </div>
    </div>
  );
}
