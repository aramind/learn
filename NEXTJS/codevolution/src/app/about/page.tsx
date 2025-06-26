import { cookies } from "next/headers";
import React from "react";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About server component");
  return <div>AboutPage</div>;
}
