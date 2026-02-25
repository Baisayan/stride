import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          {/* <Logo /> */}
          <span className="text-xl font-semibold">Stride</span>
        </div>

        <div>
          <Link href="/dashboard">
            <Button size="sm" className="text-sm">
              Start For Free
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
