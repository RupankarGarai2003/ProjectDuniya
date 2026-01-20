import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/ChatGPT Image Jan 19, 2026, 10_46_39 PM.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Trending", href: "#services" },
  { label: "Projects", href: "#products" },
  {
    label: "Project Ideas",
    href: "https://rupankargarai2003.github.io/projectideas/",
    target: "_blank",
  },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#form" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">

        {/* Logo (tight & clean) */}
        <a href="/" className="flex items-center gap-2 leading-none">
          <img
            src={logo}
            alt="ProjectDuniya"
            className="w-12 h-12 block"
          />
          <span className="text-xl font-bold tracking-tight text-navy leading-none">
            ProjectDuniya
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              className="relative text-sm font-medium text-foreground
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                         after:w-0 after:bg-primary after:transition-all
                         hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            className="group rounded-full px-6 py-2.5 font-semibold
                       bg-primary text-white shadow-md hover:shadow-lg
                       transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href="#form" className="flex items-center gap-2">
              Get Custom Project
              <ArrowRight className="w-4 h-4 transition-transform
                                     duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.target ? "noopener noreferrer" : undefined}
                className="text-sm font-medium py-2 border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button asChild className="mt-4 w-full">
              <a
                href="#form"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                Get Custom Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
