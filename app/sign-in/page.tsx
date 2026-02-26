"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "@/components/logo";
import Image from "next/image";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if user logged in and redirect if needed
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: session } = await authClient.getSession();
        if (session?.user) {
          const redirectUrl = searchParams.get("redirect") || "/dashboard";
          router.push(redirectUrl);
        }
      } catch (error) {
        console.error("Session check error:", error);
      }
    };
    checkSession();
  }, [router, searchParams]);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      const redirectUrl = searchParams.get("redirect") || "/dashboard";
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectUrl,
      });
    } catch (err) {
      setError("Failed to sign in with Google");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-2 bg-muted/10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex justify-center items-center gap-1 tracking-wide text-2xl">
            Welcome to
            <span className="flex justify-center items-center gap-1 font-bold">
              <Logo className="size-7" />
              Stride
            </span>
          </CardTitle>
          <CardDescription>
            Built for teams that move work forward.
          </CardDescription>
        </CardHeader>

        <CardContent className="grid">
          {error && (
            <div className="rounded-md bg-destructive/15 border border-destructive/50 p-3 text-sm text-destructive mb-6">
              {error}
            </div>
          )}

          <p className="text-center mb-4 text-muted-foreground">
            Sign in to your account to continue
          </p>

          <Button
            type="button"
            variant="outline"
            className="py-5 text-base mb-4"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            {loading ? (
              "Signing in..."
            ) : (
              <div className="flex gap-3 font-semibold">
                Sign in with Google
                <Image src="/google.svg" alt="Google" width={20} height={20} />
              </div>
            )}
          </Button>

          <div className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href={`/sign-up${searchParams.get("redirect") ? `?redirect=${searchParams.get("redirect")}` : ""}`}
              className="text-primary hover:text-primary/80 hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
