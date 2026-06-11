import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type KpiCardProps = {
  label: string;
  value: string;
  subtext: string;
  trend?: string;
  icon: LucideIcon;
  tone?: "primary" | "success" | "warning" | "danger" | "ai";
};

export function KpiCard({
  label,
  value,
  subtext,
  trend,
  icon: Icon,
  tone = "primary"
}: KpiCardProps) {
  return (
    <Card className="min-h-[156px]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-muted">{label}</p>
          <p className="mt-3 text-3xl font-bold text-text">{value}</p>
          <p className="mt-2 text-sm text-muted">{subtext}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      {trend ? (
        <div className="mt-4">
          <Badge tone={tone}>{trend}</Badge>
        </div>
      ) : null}
    </Card>
  );
}
