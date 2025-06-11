import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Dashboard() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Trips</h1>
      <div className="flex flex-col gap-6">
        <section>
          <h2 className="font-semibold mb-2">Upcoming Trips</h2>
          <p className="text-sm text-gray-500">No trips yet.</p>
        </section>
        <section>
          <h2 className="font-semibold mb-2">Past Trips</h2>
          <p className="text-sm text-gray-500">Nothing to show.</p>
        </section>
      </div>
      <Link href="/trips/new" className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white">
        + Create New Trip
      </Link>
    </main>
  );
}
