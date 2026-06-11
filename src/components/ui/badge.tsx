import { cn } from "@/lib/utils";

const badgeStyles = {
  neutral: "bg-stone-100 text-stone-700",
  success: "bg-emerald-50 text-success",
  warning: "bg-amber-50 text-warning",
  danger: "bg-red-50 text-danger",
  ai: "bg-violet-50 text-ai",
  primary: "bg-primary-soft text-primary"
};

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof badgeStyles;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full px-2.5 text-xs font-semibold",
        badgeStyles[tone],
        className
      )}
      {...props}
    />
  );
}
