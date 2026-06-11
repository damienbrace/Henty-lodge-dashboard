import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function FinancePage() {
  return (
    <PlaceholderPage
      title="Finance"
      subtitle="Revenue, occupancy, source mix and monthly comparisons."
      items={["Revenue trend", "Booking source mix", "Direct booking share"]}
    />
  );
}
