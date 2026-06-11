import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-primary text-white hover:bg-[#094b3a]",
  secondary: "border border-border bg-white text-text hover:bg-stone-50",
  ghost: "bg-transparent text-primary hover:bg-primary-soft"
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition",
        variants[variant],
        className
      )}
      type="button"
      {...props}
    />
  );
}
