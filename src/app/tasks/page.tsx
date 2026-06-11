import { PlaceholderPage } from "@/components/layout/placeholder-page";

export default function TasksPage() {
  return (
    <PlaceholderPage
      title="Tasks"
      subtitle="Cleaning, maintenance, admin and marketing work queue."
      items={["Due today", "Priority filters", "Completion tracking"]}
    />
  );
}
