"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/public/logo.webp";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Join Us" },
  { href: "/board", label: "Board" },
  { href: "/events", label: "Events" },
  { href: "/calendar", label: "Calendar" },
  { href: "/programs", label: "Programs" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="to-ascend-peach bg-gradient-to-r from-white shadow-md">
      <div className="flex h-24 w-full items-center justify-between px-20 py-3 md:h-auto">
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <Image src={logo} alt="Logo" width={150} height={100} priority />
        </Link>

        <button
          className="absolute top-8 right-6 text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-2xl">
            {LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "transition-colors",
                      "text-ascend-dark-blue hover:text-ascend-red-orange",
                      isActive ? "text-ascend-red-orange font-medium" : "",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {open && (
        <div className="bg-white p-5 shadow-inner md:hidden">
          <ul className="flex flex-col gap-4 text-center text-xl">
            {LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "transition-colors",
                      "text-ascend-dark-blue hover:text-ascend-red-orange",
                      isActive ? "text-ascend-red-orange font-medium" : "",
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
