"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const MobileNav = ({ items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className={isOpen ? "hidden" : "rounded-lg border border-slate-300 bg-white/90 p-2.5 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700"}
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <>
          <button
            className="fixed inset-0 bg-slate-900/25"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-screen w-64 border-l border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 rounded-md p-1 text-slate-600 transition hover:bg-slate-100 hover:text-sky-700"
            >
              <X size={22} />
            </button>

            <h2 className="mb-8 text-2xl font-semibold text-sky-700">Navigation</h2>
            <nav className="flex flex-col space-y-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-transparent px-3 py-2 text-lg text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 hover:text-sky-700"
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
