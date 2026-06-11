"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  Bot,
  CalendarDays,
  CheckSquare,
  CircleDollarSign,
  Home,
  LogOut,
  MapPinned,
  MessageSquareText,
  Settings,
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
  { href: "/reports", label: "Reports", icon: MessageSquareText },
  { href: "/ai-assistant", label: "AI Assistant", icon: Bot },
  { href: "/settings", label: "Settings", icon: Settings }
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
    <div className="min-h-screen bg-[#eef1ee] lg:grid lg:grid-cols-[205px_1fr] 2xl:grid-cols-[260px_1fr]">
      <aside className="hidden min-h-screen flex-col bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_22%),linear-gradient(180deg,#0d3126_0%,#09241c_100%)] p-4 text-white 2xl:p-5 lg:flex">
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

        <nav className="flex flex-col gap-1.5">
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

        <div className="mt-10">
          <div className="overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
            <div className="h-24 bg-[radial-gradient(circle_at_74%_30%,#f8d791_0_5%,transparent_6%),linear-gradient(180deg,rgba(8,24,20,0.1),rgba(8,24,20,0.72)),linear-gradient(18deg,#1c2c25_0_28%,#b77c33_29%_31%,#273f32_32%_100%)] 2xl:h-28" />
            <div className="border-t border-white/10 px-4 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] 2xl:text-sm">Henty Lodge</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-white/56 2xl:text-[9px]">
                Ferguson Valley
              </p>
            </div>
          </div>
          <div className="mt-5 border-t border-white/10 pt-5">
            <button
              className="flex h-10 items-center gap-3 rounded-md px-2 text-sm font-medium text-white/76"
              onClick={handleSignOut}
              type="button"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
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
