import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 text-center">
      <section>
        <h1 className="text-4xl font-bold mb-4">Plan group trips with ease</h1>
        <p className="mb-8 text-lg">Collect preferences and organize your travel group effortlessly.</p>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded bg-blue-600 px-4 py-2 text-white">Start Planning</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="rounded bg-blue-600 px-4 py-2 text-white">Go to Dashboard</Link>
          <div className="mt-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </section>
      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl w-full">
        <div className="p-4 border rounded shadow">Collect preferences easily</div>
        <div className="p-4 border rounded shadow">See personality matches</div>
        <div className="p-4 border rounded shadow">Get smart suggestions</div>
        <div className="p-4 border rounded shadow">Share magic links</div>
      </section>
    </main>
  );
}
