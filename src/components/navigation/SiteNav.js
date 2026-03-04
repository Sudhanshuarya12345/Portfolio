"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav, ThemeToggle } from "@/components/navigation";
import { homeNavItems } from "@/config/navigation";

const SiteNav = () => {
  const pathname = usePathname();

  const navItems = useMemo(
    () =>
      homeNavItems.map((item) => ({
        ...item,
        href: pathname === "/" ? `#${item.id}` : `/#${item.id}`,
      })),
    [pathname]
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/70 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-sky-700 dark:text-emerald-400">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400" />
          Sudhanshu Kumar
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-1 text-sm font-semibold text-slate-700 shadow-sm md:flex dark:border-emerald-500/20 dark:bg-slate-900/80 dark:text-emerald-400">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3.5 py-2 transition hover:bg-sky-50 hover:text-sky-700 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
