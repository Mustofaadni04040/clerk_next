import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = await auth();
  console.log(userId);

  if (!userId) {
    return new NextResponse(
      JSON.stringify({
        message: "Unauthorized",
      })
    );
  }
  const user = await currentUser();
  console.log(user);

  return new NextResponse(
    JSON.stringify({
      message: "Profile",
    })
  );
}
