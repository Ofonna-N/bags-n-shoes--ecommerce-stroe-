import { siteUrl } from "@/utility/baseExports";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cred: Promise<{ email: string }> = await req.json();

  const userResponse = await fetch(
    siteUrl + `/api/app-users?filters[email][$eq]=${(await cred).email}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );

  const user = await userResponse.json();
  const data = user.data[0];
  return NextResponse.json(data);
}
