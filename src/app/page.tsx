import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <SignedOut>
        <SignInButton>Sign in</SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <p className="mt-4">You&apos;re signed in!</p>
      </SignedIn>
    </main>
  );
}
