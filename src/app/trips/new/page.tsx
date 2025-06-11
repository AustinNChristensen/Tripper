import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

async function createTrip(formData: FormData) {
  "use server";
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const name = formData.get("name") as string;
  const destination = formData.get("destination") as string;
  const start = formData.get("start") as string;
  const end = formData.get("end") as string;
  const emails = formData.get("emails") as string; // eslint-disable-line @typescript-eslint/no-unused-vars
  const type = formData.get("type") as string | null;
  const message = formData.get("message") as string | null;

  let dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName ?? "",
      },
    });
  }

  await prisma.trip.create({
    data: {
      name,
      destination,
      startDate: start ? new Date(start) : null,
      endDate: end ? new Date(end) : null,
      type: type || null,
      message: message || null,
      ownerId: dbUser.id,
    },
  });

  // TODO: dispatch emails using magic links

  redirect("/dashboard");
}

export default async function NewTrip() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <form action={createTrip} className="p-8 space-y-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Create New Trip</h1>
      <input name="name" placeholder="Trip Name" className="border p-2 w-full" required />
      <input name="destination" placeholder="Destination" className="border p-2 w-full" />
      <div className="flex gap-2">
        <input type="date" name="start" className="border p-2 flex-1" />
        <input type="date" name="end" className="border p-2 flex-1" />
      </div>
      <textarea name="emails" placeholder="Group member emails" className="border p-2 w-full" rows={3} />
      <input name="type" placeholder="Trip Type" className="border p-2 w-full" />
      <textarea name="message" placeholder="Message to group" className="border p-2 w-full" rows={3} />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">Save Trip</button>
    </form>
  );
}
