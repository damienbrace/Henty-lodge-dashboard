export const authCookieName = "henty_session";

export const allowedRoles = ["owner", "manager"] as const;

export type UserRole = (typeof allowedRoles)[number];

export const demoUsers = [
  {
    email: "lisa@hentylodge.com",
    name: "Lisa",
    password: "Henty2026!",
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
