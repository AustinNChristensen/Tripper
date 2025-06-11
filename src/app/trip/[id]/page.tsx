import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function TripDashboard() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Trip Dashboard</h1>
      <p className="text-sm text-gray-500">Overview of destination, dates and participants will appear here.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="p-4 border rounded">Group completion %</div>
        <div className="p-4 border rounded">Personality breakdown</div>
        <div className="p-4 border rounded">Budget distribution</div>
        <div className="p-4 border rounded">Flagged conflicts</div>
      </div>
      <div className="mt-6 p-4 border rounded">Smart suggestions placeholder</div>
    </main>
  );
}
