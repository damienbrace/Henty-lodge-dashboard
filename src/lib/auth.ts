export const authCookieName = "henty_session";

export const allowedRoles = ["owner", "manager"] as const;

export type UserRole = (typeof allowedRoles)[number];

const damienOwnerPassword =
  process.env.DAMIEN_OWNER_PASSWORD ?? (process.env.NODE_ENV === "development" ? "test" : "");

export const demoUsers = [
  {
    email: "lisa@hentylodge.com",
    name: "Lisa",
    password: "Henty2026!",
    role: "owner" satisfies UserRole
  },
  {
    email: "damienbrace@gmail.com",
    name: "Damien",
    password: damienOwnerPassword,
    role: "owner" satisfies UserRole
  },
  {
    email: "manager@hentylodge.com",
    name: "Manager",
    password: "HentyManager2026!",
    role: "manager" satisfies UserRole
  }
];

export function hasAllowedRole(role: string | undefined) {
  return allowedRoles.includes(role as UserRole);
}
