"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center tracking-tight mb-4 sm:mb-6">
          Ready to get things done?
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4 leading-relaxed">
          Join Stride to manage tasks efficiently and boost your team&apos;s
          productivity.
        </h2>

        <div className="flex gap-4 sm:gap-6 justify-center items-center px-4">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Baisayan/stride"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source
              <GithubIcon />
            </a>
          </Button>
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
