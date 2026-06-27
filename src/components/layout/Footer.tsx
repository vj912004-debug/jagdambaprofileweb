import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { BRAND } from "@/lib/constants";
import { navLinks } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-2">
            <Logo size="md" variant="light" />
            <p className="mt-6 max-w-md text-sm text-slate-300">
              Your steel partner for stock, drawing, nesting, cutting, inspection,
              and dispatch. Delivering quality steel solutions from Gujarat to
              every corner of India.
            </p>
            <p className="mt-4 text-sm font-bold tracking-widest text-orange">
              {BRAND.processLine}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                {BRAND.address}
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                <a href="tel:+919825042121" className="hover:text-white">
                  +91 98250 42121
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">GSTIN: {BRAND.gstin}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-left">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="font-semibold text-orange">{BRAND.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
