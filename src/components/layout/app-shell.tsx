"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  CheckSquare,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  Home,
  LogOut,
  MapPinned,
  Megaphone,
  MessageSquareText,
  MousePointerClick,
  Search,
  Settings,
  Share2,
  Star,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/bookings", label: "Bookings", icon: CalendarDays },
  { href: "/guests", label: "Guests", icon: Users },
  { href: "/marketing", label: "Marketing", icon: BarChart3 },
  { href: "/reviews", label: "Reviews", icon: Star },
  { href: "/tasks", label: "Tasks", icon: CheckSquare },
  { href: "/finance", label: "Finance", icon: CircleDollarSign },
  { href: "/local-guide", label: "Local Guide", icon: MapPinned },
  { href: "/reports", label: "Reports", icon: MessageSquareText }
];

const marketingItems = [
  { href: "/marketing", label: "Marketing Overview", icon: Megaphone },
  { href: "/marketing/website-analytics", label: "Website Analytics", icon: BarChart3 },
  { href: "/marketing/google-ads", label: "Google Ads", icon: MousePointerClick },
  { href: "/marketing/search-console", label: "Search Console", icon: Search },
  { href: "/marketing/google-business-profile", label: "Google Business Profile", icon: MapPinned },
  { href: "/marketing/social-media", label: "Social Media", icon: Share2 },
  { href: "/marketing/email-campaigns", label: "Email Campaigns", icon: MessageSquareText }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") {
    return <>{children}</>;
  }

  async function handleSignOut() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#f5f7f4] lg:grid lg:grid-cols-[220px_1fr] 2xl:grid-cols-[282px_1fr]">
      <aside className="hidden min-h-screen flex-col bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_22%),linear-gradient(180deg,#043f33_0%,#063225_100%)] p-4 text-white 2xl:p-6 lg:flex">
        <div className="mb-6 flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 2xl:h-12 2xl:w-12">
            <div className="absolute inset-x-1 bottom-0 h-8 border border-white/65" />
            <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-white/70" />
            <div className="absolute left-1/2 top-1 h-8 w-8 -translate-x-1/2 rounded-full border border-white/65" />
            <div className="absolute left-[16px] top-3 h-7 w-px -rotate-45 bg-white/70" />
            <div className="absolute right-[16px] top-3 h-7 w-px rotate-45 bg-white/70" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white 2xl:text-base">
              Henty Lodge
            </p>
            <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.22em] text-white/60 2xl:text-[8px]">
              Ferguson Valley
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                className={cn(
                  "group flex h-9 items-center rounded-xl px-3 text-xs font-medium text-white/86 transition hover:bg-white/10 hover:text-white 2xl:h-10 2xl:text-sm",
                  isActive && "bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
                )}
                href={item.href}
                key={item.href}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" aria-hidden="true" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="my-5 h-px bg-white/10" />

        <div>
          <button className="flex w-full items-center justify-between px-1 text-xs font-semibold text-white/86">
            Marketing Tools
            <ChevronDown className="h-4 w-4 text-white/56" aria-hidden="true" />
          </button>
          <nav className="mt-2 flex flex-col gap-1">
            {marketingItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  className={cn(
                    "flex h-9 items-center gap-3 rounded-xl px-3 text-xs text-white/82 transition hover:bg-white/10 hover:text-white 2xl:text-sm",
                    isActive && "bg-white/12 text-white"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <Icon className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto pt-5">
          <div className="rounded-xl bg-emerald-400/10 p-4 text-xs text-white/88">
            <p className="font-semibold text-amber-200">AI Insight</p>
            <p className="mt-3 leading-5">
              Your site gained 24% more impressions this month. Keep building on those top
              performing pages!
            </p>
            <button className="mt-4 flex h-9 items-center gap-2 rounded-lg bg-white/10 px-3 font-semibold text-white">
              View insights
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 border-y border-white/10 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[radial-gradient(circle_at_48%_30%,#f0d1bd_0_28%,#4d3027_29%_38%,#dfc7b7_39%_100%)]" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Lisa</p>
                <p className="text-xs text-white/62">Owner</p>
              </div>
              <ChevronDown className="h-4 w-4 text-white/56" aria-hidden="true" />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1">
            <Link
              className={cn(
                "flex h-9 items-center gap-3 rounded-xl px-3 text-xs text-white/82 transition hover:bg-white/10 hover:text-white 2xl:text-sm",
                pathname === "/settings" && "bg-white/12 text-white"
              )}
              href="/settings"
            >
              <Settings className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" aria-hidden="true" />
              Settings
            </Link>
            <button
              className="flex h-9 items-center gap-3 rounded-xl px-3 text-xs text-white/82 transition hover:bg-white/10 hover:text-white 2xl:text-sm"
              onClick={handleSignOut}
              type="button"
            >
              <LogOut className="h-3.5 w-3.5 2xl:h-4 2xl:w-4" aria-hidden="true" />
              Sign out
            </button>
          </div>
        </div>
      </aside>

      <main className="min-w-0">
        <div className="border-b border-border bg-card px-4 py-3 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
              <span className="font-bold">H</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-muted">Henty Lodge</p>
              <h1 className="text-base font-bold">Command Centre</h1>
            </div>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
