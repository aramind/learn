import { cookies, headers } from "next/headers";
// import { NextRequest } from "next/server";

export async function GET() {
  const headersList = await headers();

  console.log(headersList.get("Authorization"));

  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");

  const cookieRetrieved = cookieStore.get("resultsPerPage");
  console.log(cookieRetrieved);

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
