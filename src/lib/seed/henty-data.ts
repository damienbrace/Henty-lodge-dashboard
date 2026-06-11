import type {
  Booking,
  CampaignIdea,
  Guest,
  MarketingMetric,
  RevenuePoint,
  Review,
  Room,
  Task
} from "@/types";

export const rooms: Room[] = [
  { id: "room-1", name: "Jarrah Suite", type: "Queen", status: "Occupied" },
  { id: "room-2", name: "Marri Room", type: "King", status: "Turnover" },
  { id: "room-3", name: "Peppermint Studio", type: "Studio", status: "Available" },
  { id: "room-4", name: "Valley View", type: "Family", status: "Occupied" },
  { id: "room-5", name: "Ferguson Room", type: "Queen", status: "Available" },
  { id: "room-6", name: "Bunbury Twin", type: "Twin", status: "Maintenance" }
];

export const guests: Guest[] = [
  {
    id: "guest-1",
    name: "Mia Carter",
    email: "mia@example.com",
    phone: "0400 111 219",
    tags: ["Perth weekend", "Repeat guest"],
    notes: "Prefers late checkout when available."
  },
  {
    id: "guest-2",
    name: "Daniel Wu",
    email: "daniel@example.com",
    phone: "0400 221 390",
    tags: ["Wine trail", "Direct booking"],
    notes: "Asked for local dinner recommendations."
  },
  {
    id: "guest-3",
    name: "Amelia Roberts",
    email: "amelia@example.com",
    phone: "0400 339 875",
    tags: ["Family stay"],
    notes: "Travelling with two children."
  },
  {
    id: "guest-4",
    name: "Oliver Harris",
    email: "oliver@example.com",
    phone: "0400 812 445",
    tags: ["Business"],
    notes: "Needs tax invoice after checkout."
  }
];

export const bookings: Booking[] = [
  {
    id: "booking-1",
    guestId: "guest-1",
    roomId: "room-1",
    checkIn: "2026-06-10",
    checkOut: "2026-06-12",
    source: "Direct",
    status: "Checked in",
    revenue: 420
  },
  {
    id: "booking-2",
    guestId: "guest-2",
    roomId: "room-2",
    checkIn: "2026-06-11",
    checkOut: "2026-06-14",
    source: "Booking.com",
    status: "Booked",
    revenue: 690
  },
  {
    id: "booking-3",
    guestId: "guest-3",
    roomId: "room-4",
    checkIn: "2026-06-09",
    checkOut: "2026-06-11",
    source: "Airbnb",
    status: "Checked out",
    revenue: 510
  },
  {
    id: "booking-4",
    guestId: "guest-4",
    roomId: "room-5",
    checkIn: "2026-06-13",
    checkOut: "2026-06-15",
    source: "Phone",
    status: "Booked",
    revenue: 380
  }
];

export const tasks: Task[] = [
  {
    id: "task-1",
    title: "Turn over Marri Room before 2pm",
    type: "Cleaning",
    priority: "High",
    due: "2026-06-11",
    completed: false,
    owner: "Housekeeping"
  },
  {
    id: "task-2",
    title: "Send review request to Amelia",
    type: "Admin",
    priority: "Medium",
    due: "2026-06-11",
    completed: false,
    owner: "Damien"
  },
  {
    id: "task-3",
    title: "Check Bunbury Twin air conditioner",
    type: "Maintenance",
    priority: "High",
    due: "2026-06-11",
    completed: false,
    owner: "Maintenance"
  },
  {
    id: "task-4",
    title: "Draft midweek winter getaway post",
    type: "Marketing",
    priority: "Low",
    due: "2026-06-12",
    completed: false,
    owner: "Damien"
  }
];

export const reviews: Review[] = [
  {
    id: "review-1",
    guestId: "guest-1",
    rating: 5,
    source: "Google",
    date: "2026-06-08",
    comment: "Beautiful quiet stay close to Ferguson Valley wineries.",
    replyStatus: "Draft needed"
  },
  {
    id: "review-2",
    guestId: "guest-3",
    rating: 4.8,
    source: "Booking.com",
    date: "2026-06-06",
    comment: "Friendly service, clean room and easy access to Bunbury.",
    replyStatus: "Replied"
  }
];

export const marketingMetrics: MarketingMetric[] = [
  { label: "Website visits", value: "1,248", trend: "+9% this month" },
  { label: "Booking clicks", value: "86", trend: "+14% vs May" },
  { label: "Direct share", value: "38%", trend: "+5 pts" }
];

export const campaignIdeas: CampaignIdea[] = [
  {
    id: "idea-1",
    title: "Perth winter escape midweek offer",
    reason: "Two room gaps next Tuesday to Thursday.",
    channel: "Google Ads",
    status: "Draft"
  },
  {
    id: "idea-2",
    title: "Ferguson Valley wine trail email",
    reason: "Repeat guests respond well to local event hooks.",
    channel: "Email",
    status: "Needs review"
  }
];

export const revenueTrend: RevenuePoint[] = [
  { label: "Jan", revenue: 5200, occupancy: 54 },
  { label: "Feb", revenue: 6100, occupancy: 61 },
  { label: "Mar", revenue: 6840, occupancy: 65 },
  { label: "Apr", revenue: 7020, occupancy: 67 },
  { label: "May", revenue: 6530, occupancy: 62 },
  { label: "Jun", revenue: 7320, occupancy: 67 }
];
