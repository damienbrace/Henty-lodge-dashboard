import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginPage } from "@/components/auth/login-page";
import { authCookieName, hasAllowedRole } from "@/lib/auth";

export default async function Home() {
  const role = (await cookies()).get(authCookieName)?.value;

  if (hasAllowedRole(role)) {
    redirect("/dashboard");
  }

  return <LoginPage />;
}
