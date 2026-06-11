"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ChevronDown,
  DollarSign,
  EyeOff,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function LodgeMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto h-24 w-24 text-[#caa85d]", className)}>
      <div className="absolute left-1/2 top-3 h-14 w-px -translate-x-1/2 bg-current" />
      <div className="absolute left-1/2 top-2 h-11 w-11 -translate-x-1/2 rounded-full border border-current" />
      <div className="absolute left-[23px] top-10 h-12 w-px -rotate-45 bg-current" />
      <div className="absolute right-[23px] top-10 h-12 w-px rotate-45 bg-current" />
      <div className="absolute bottom-3 left-3 right-3 h-px bg-current" />
      <div className="absolute bottom-3 left-6 h-12 w-px bg-current" />
      <div className="absolute bottom-3 right-6 h-12 w-px bg-current" />
    </div>
  );
}

function FeatureIcon({
  icon: Icon,
  label
}: {
  icon: typeof CalendarDays;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-center text-white">
      <Icon className="h-8 w-8 text-[#d6b76d]" aria-hidden="true" />
      <p className="max-w-24 text-sm leading-5">{label}</p>
    </div>
  );
}

export function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, remember })
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Unable to sign in with those details.");
      setIsLoading(false);
      return;
    }

    router.replace("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-[1.03fr_0.97fr]">
      <section className="relative min-h-[560px] overflow-hidden bg-[#071511] text-white lg:min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(180deg,rgba(5,13,12,0.30),rgba(5,10,8,0.85)),linear-gradient(22deg,#090f0f_0_36%,#3e4b4b_37%_49%,#d58e3a_50%_51%,#161f1b_52%_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-[radial-gradient(circle_at_72%_3%,#1d2b26_0_10%,transparent_11%),linear-gradient(9deg,#060806_0_35%,#b36d26_36%_38%,#1d2c26_39%_100%)] opacity-95" />
        <div className="absolute bottom-[25%] left-[6%] right-[3%] h-[20%] rounded-t-[40%] bg-[linear-gradient(10deg,#111915_0_46%,#b9762d_47%_49%,#26332d_50%_100%)] opacity-90 shadow-[0_-20px_50px_rgba(0,0,0,0.55)]" />
        <div className="absolute bottom-[24%] left-[10%] right-[11%] h-[7%] bg-[repeating-linear-gradient(90deg,#d69a50_0_7px,transparent_7px_28px)] opacity-80" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-8 py-14 text-center">
          <div>
            <LodgeMark />
            <p className="mt-4 font-serif text-3xl uppercase tracking-[0.18em]">Henty Lodge</p>
            <p className="mt-3 text-sm uppercase tracking-[0.36em]">Ferguson Valley</p>
            <div className="mx-auto mt-6 h-px w-72 bg-[#caa85d]" />
          </div>

          <div className="mt-14">
            <h1 className="font-serif text-6xl leading-tight lg:text-7xl">Welcome back</h1>
            <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-white/92">
              Sign in to your Henty Lodge Command Centre and manage every part of your
              business.
            </p>
          </div>

          <div className="mt-auto pb-8">
            <div className="mx-auto grid max-w-xl grid-cols-4 gap-5">
              <FeatureIcon icon={CalendarDays} label="Bookings at a glance" />
              <FeatureIcon icon={Users} label="Guest relationships" />
              <FeatureIcon icon={BarChart3} label="Marketing insights" />
              <FeatureIcon icon={DollarSign} label="Financial performance" />
            </div>

            <div className="mx-auto mt-10 flex max-w-xl items-center gap-5 rounded-lg bg-black/55 p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur">
              <div className="h-20 w-20 shrink-0 rounded-full bg-[radial-gradient(circle_at_45%_30%,#f3d1bc_0_24%,#4d2f26_25%_34%,#d9cab8_35%_100%)]" />
              <div>
                <p className="text-xl tracking-[0.15em] text-[#f2c65f]">★★★★★</p>
                <p className="mt-2 text-base leading-7">
                  “The Command Centre has transformed how we run Henty Lodge. Everything in
                  one beautiful place.”
                </p>
                <p className="mt-3 font-semibold">Lisa, Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fffdfa] px-8 py-12 lg:px-20 xl:px-24">
        <div className="absolute right-0 top-0 h-full w-64 bg-[radial-gradient(circle_at_72%_54%,rgba(101,122,58,0.22),transparent_13%),radial-gradient(ellipse_at_82%_62%,rgba(91,117,58,0.42)_0_7%,transparent_8%),radial-gradient(ellipse_at_96%_74%,rgba(109,132,72,0.34)_0_7%,transparent_8%)] opacity-90" />
        <div className="absolute bottom-0 right-0 h-[54%] w-80 bg-[repeating-linear-gradient(72deg,transparent_0_34px,rgba(86,109,56,0.24)_35px_48px,transparent_49px_96px)] opacity-70" />

        <div className="relative z-10 mx-auto max-w-xl">
          <div className="flex justify-end">
            <button className="flex h-11 items-center gap-3 rounded-lg border border-zinc-200 bg-white/75 px-4 text-sm font-semibold shadow-sm">
              <Globe2 className="h-5 w-5" aria-hidden="true" />
              English
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-24">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#c98525]">
              Henty Lodge Command Centre
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight text-zinc-950">
              Sign in to your account
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-zinc-600">
              Access your dashboard, manage bookings, guests, marketing and more.
            </p>
          </div>

          <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-semibold text-zinc-950">Email address</span>
              <span className="mt-2 flex h-14 items-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 shadow-sm">
                <Mail className="h-5 w-5 text-zinc-500" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-zinc-500"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  value={email}
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-zinc-950">Password</span>
              <span className="mt-2 flex h-14 items-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 shadow-sm">
                <LockKeyhole className="h-5 w-5 text-zinc-500" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-zinc-500"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                />
                <EyeOff className="h-5 w-5 text-zinc-500" aria-hidden="true" />
              </span>
            </label>

            <div className="flex items-center justify-between gap-4">
              <label className="flex items-center gap-3 text-sm text-zinc-700">
                <input
                  checked={remember}
                  className="h-5 w-5 rounded border-zinc-300"
                  onChange={(event) => setRemember(event.target.checked)}
                  type="checkbox"
                />
                Remember me
              </label>
              <button className="text-sm font-semibold text-primary" type="button">
                Forgot password?
              </button>
            </div>

            {error ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <Button className="h-14 w-full rounded-lg text-base" disabled={isLoading} type="submit">
              {isLoading ? "Signing in..." : "Sign in"}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-sm text-zinc-500">
            <span className="h-px bg-zinc-200" />
            <span>or continue with</span>
            <span className="h-px bg-zinc-200" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <button className="flex h-14 items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white text-sm font-semibold shadow-sm">
              <span className="text-xl font-bold text-blue-600">G</span>
              Continue with Google
            </button>
            <button className="flex h-14 items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white text-sm font-semibold shadow-sm">
              <span className="text-2xl leading-none">●</span>
              Continue with Apple
            </button>
          </div>

          <div className="mt-20 flex gap-5 rounded-lg border border-zinc-200 bg-white/78 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-50">
              <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-zinc-950">Your data is secure and private</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                We use industry-leading security to keep your information safe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
