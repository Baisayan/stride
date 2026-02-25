"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col justify-center px-4">
      <div className="text-center w-full">
        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl mb-6">
          For Teams Who Ship Fast
        </h1>

        <p className="text-center font-medium tracking-tight text-muted-foreground mx-auto max-w-lg mb-10">
          The task management platform that actually works. Beautiful,
          intuitive, and built for teams who ship.
        </p>

        <div className="flex gap-4 justify-center items-center mb-16">
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
          <Button size="lg" className="font-semibold" asChild>
            <a href="/dashboard">Get Started Free</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
