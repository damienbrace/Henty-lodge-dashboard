import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatShortDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short"
  }).format(new Date(date));
}

export function getGuestName(guestId: string, guests: { id: string; name: string }[]) {
  return guests.find((guest) => guest.id === guestId)?.name ?? "Guest";
}

export function getRoomName(roomId: string, rooms: { id: string; name: string }[]) {
  return rooms.find((room) => room.id === roomId)?.name ?? "Room";
}
