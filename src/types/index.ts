export type BookingSource = "Direct" | "Booking.com" | "Airbnb" | "Expedia" | "Phone";
export type BookingStatus = "Booked" | "Checked in" | "Checked out" | "Gap";
export type TaskPriority = "Low" | "Medium" | "High";
export type TaskType = "Cleaning" | "Maintenance" | "Admin" | "Marketing";

export type Room = {
  id: string;
  name: string;
  type: string;
  status: "Occupied" | "Available" | "Turnover" | "Maintenance";
};

export type Guest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
  notes: string;
};

export type Booking = {
  id: string;
  guestId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  source: BookingSource;
  status: BookingStatus;
  revenue: number;
};

export type Task = {
  id: string;
  title: string;
  type: TaskType;
  priority: TaskPriority;
  due: string;
  completed: boolean;
  owner: string;
};

export type Review = {
  id: string;
  guestId: string;
  rating: number;
  source: "Google" | "Booking.com" | "Airbnb";
  date: string;
  comment: string;
  replyStatus: "Draft needed" | "Replied" | "No reply needed";
};

export type MarketingMetric = {
  label: string;
  value: string;
  trend: string;
};

export type CampaignIdea = {
  id: string;
  title: string;
  reason: string;
  channel: "Google Ads" | "Email" | "Social";
  status: "Draft" | "Ready" | "Needs review";
};

export type RevenuePoint = {
  label: string;
  revenue: number;
  occupancy: number;
};
