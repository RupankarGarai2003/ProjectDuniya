import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Page Not Found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <p className="text-6xl font-extrabold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-navy mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild><Link href="/">Back to Home</Link></Button>
          <Button asChild variant="outline"><Link href="/blog/top-final-year-project-ideas-computer-science-2026">Final Year Project Ideas</Link></Button>
          <Button asChild variant="outline"><Link href="/contact">Contact Us</Link></Button>
        </div>
      </div>
    </main>
  );
}
