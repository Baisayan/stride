"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
// import { TeamSelector } from "@/components/shared/team-selector";
// import { DashboardLoader } from "@/components/ui/dashboard-loader";
import { authClient } from "@/lib/auth-client";

export function PageClient() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const hasRedirected = useRef(false);

  // Redirect to sign-up if no session
  useEffect(() => {
    if (!isPending && !session && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace("/sign-in");
    }
  }, [isPending, session, router]);

  // force redirect if useEffect didn't trigger within 200ms
  useEffect(() => {
    if (!isPending && !session) {
      const timer = setTimeout(() => {
        if (!hasRedirected.current) {
          hasRedirected.current = true;
          window.location.href = "/sign-in";
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isPending, session]);

  // If loading, show loader
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {/* <DashboardLoader
          message="Loading teams"
          submessage="Setting up your workspace..."
        /> */}
      </div>
    );
  }

  // If no session, show redirecting message
  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* <DashboardLoader
          message="Redirecting..."
          submessage="Please sign in to continue"
        /> */}
      </div>
    );
  }

  // User is authenticated, show team selector
  // return <TeamSelector />;
}
