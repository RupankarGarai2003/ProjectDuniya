"use client";

import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 leading-none">
          <Image
            src="/images/ChatGPT-Image-Jan-19-2026-10_46_39-PM.png"
            alt="ProjectDuniya logo"
            width={48}
            height={48}
            className="w-12 h-12 block"
          />
          <span className="text-xl font-bold tracking-tight text-navy leading-none">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${
                pathname === item.href ? "text-primary after:w-full" : "text-foreground after:w-0"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="group rounded-full px-6 py-2.5 font-semibold bg-primary text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            <Link href="/contact" className="flex items-center gap-2">
              Get Custom Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-2 border-b border-border text-left"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 w-full">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Get Custom Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
