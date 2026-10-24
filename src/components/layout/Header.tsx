"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Project Ideas", href: "/project-ideas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Mobile menu closes on link click (see onClick below) and on Escape (focus returns to the toggle).
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 leading-none" aria-label={`${siteConfig.name} home`}>
          <Image src="/logo.png" alt="" width={48} height={48} priority className="w-12 h-12 block" />
          <span className="text-xl font-bold tracking-tight text-navy leading-none">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${
                isActive(item.href) ? "text-primary after:w-full" : "text-foreground after:w-0"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="group rounded-full px-6 py-2.5 font-semibold bg-primary text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            <Link href="/contact" className="flex items-center gap-2" data-track="header_cta_click">
              Get Custom Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Button
          ref={toggleRef}
          variant="ghost"
          size="icon"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </Button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-border bg-background">
          <nav aria-label="Mobile" className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 border-b border-border text-left ${isActive(item.href) ? "text-primary" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2" data-track="header_cta_click">
                Get Custom Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
