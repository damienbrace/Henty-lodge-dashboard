import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PlaceholderPageProps = {
  title: string;
  subtitle: string;
  items: string[];
};

export function PlaceholderPage({ title, subtitle, items }: PlaceholderPageProps) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge tone="primary">Next slice</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-normal text-text">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted">{subtitle}</p>
        </div>
      </div>
      <Card className="max-w-3xl">
        <CardTitle>{title} workspace</CardTitle>
        <CardDescription>
          This route is wired into the app shell and ready for the next vertical slice.
        </CardDescription>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {items.map((item) => (
            <div className="rounded-md border border-border bg-background p-4" key={item}>
              <ArrowRight className="mb-3 h-4 w-4 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
