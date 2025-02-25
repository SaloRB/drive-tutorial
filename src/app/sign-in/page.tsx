import { SignInButton } from "@clerk/nextjs";

import { Button } from "~/components/ui/button";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-4 text-white">
      <main className="text-center">
        <Button
          asChild
          size="lg"
          type="submit"
          className="border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-neutral-700"
        >
          <SignInButton forceRedirectUrl="/drive" />
        </Button>
      </main>
      <footer className="mt-16 text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} T3 Drive. All rights reserved
      </footer>
    </div>
  );
}
