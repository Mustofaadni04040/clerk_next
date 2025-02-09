import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();
  console.log(user);
  console.log(userId);
  return <h1>Clerk Authentication</h1>;
}
