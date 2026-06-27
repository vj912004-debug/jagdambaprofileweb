"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";
import { BRAND } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setOnHero(y < window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isDark = isHome && onHero && !scrolled;

  const linkClass = (href: string) => {
    const active =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`);
    const base = "rounded-lg px-3 py-2 text-sm font-semibold transition-colors";
    if (isDark) {
      return `${base} ${active ? "bg-white/15 text-orange" : "text-white/90 hover:bg-white/10 hover:text-orange"}`;
    }
    return `${base} ${active ? "bg-orange/10 text-orange" : "text-slate-700 hover:bg-slate-100 hover:text-orange"}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isDark
          ? "bg-transparent"
          : scrolled
            ? "bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div
        className={`border-b transition-colors ${
          isDark ? "border-white/10" : "border-slate-100"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <div className="hidden items-center gap-2 md:flex">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-orange" />
            <span className="max-w-md truncate lg:max-w-none">{BRAND.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-orange" />
            <a
              href="tel:+919825042121"
              className={`font-semibold ${isDark ? "text-white hover:text-orange" : "hover:text-orange"}`}
            >
              +91 98250 42121
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo size="sm" variant={isDark ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="ml-2 inline-block rounded-lg bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/25 hover:bg-orange-dark"
            >
              Get Quote
            </Link>
          </motion.div>
        </nav>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${isDark ? "text-white" : "text-navy"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-3 font-semibold ${
                    pathname === link.href
                      ? "bg-orange/10 text-orange"
                      : "text-slate-700 hover:bg-slate-50 hover:text-orange"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-lg bg-orange px-4 py-3 text-center font-bold text-white"
              >
                Get Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
