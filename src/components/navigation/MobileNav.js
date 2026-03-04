"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const MobileNav = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className={
          isOpen
            ? "hidden"
            : "rounded-lg border border-slate-300 bg-white/90 p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 dark:border-emerald-500/20 dark:bg-slate-900/80 dark:text-emerald-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
        }
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-slate-900/25 dark:bg-black/50" aria-hidden="true" />
          <div
            ref={panelRef}
            className="fixed right-0 top-0 h-screen w-64 border-l border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-emerald-500/20 dark:bg-slate-950/95"
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 rounded-md p-1 text-slate-600 transition hover:bg-slate-100 hover:text-sky-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
            >
              <X size={22} />
            </button>

            <h2 className="mb-8 text-2xl font-semibold text-sky-700 dark:text-emerald-400">Navigation</h2>
            <nav className="flex flex-col space-y-4">
              {items.map((item) => (
                <a
                  key={item.id ?? item.href}
                  href={item.href ?? `#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-transparent px-3 py-2 text-lg text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 hover:text-sky-700 dark:text-slate-300 dark:hover:border-emerald-500/25 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
