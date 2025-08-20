"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function Navigation() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <header className="grid grid-cols-2 p-4 shadow-md gap-280">
      <div className="font-bold text-xl">Next's First Web</div>
      <nav>
        <ul className="flex gap-4 font-bold">
          {pathname !== "/" ? (
            <li className={isActive("/") ? "underline text-blue-600" : "underline"}>
              <Link href="/" className={isActive("/") ? "text-blue-600 underline" : "underline"}>
                Go to Home
              </Link>
            </li>
          ) : (
            <li className={isActive("/") ? "underline text-blue-600" : "underline"}>
              <Link href="/" className={isActive("/") ? "text-blue-600 underline" : "underline"}>
                Home
              </Link>
            </li>
          )}
          <li className={isActive("/contact") ? "underline text-blue-600" : "underline"}>
            <Link href="/contact" className={isActive("/contact") ? "text-blue-600 underline" : "underline"}>
              Contact
            </Link>
          </li>
          <li className={isActive("/services") ? "underline text-blue-600" : "underline"}>
            <Link href="/services" className={isActive("/services") ? "text-blue-600 underline" : "underline"}>
              Services
            </Link>
          </li>
          <li className={isActive("/about") ? "underline text-blue-600" : "underline"}>
            <Link href="/about" className={isActive("/about") ? "text-blue-600 underline" : "underline"}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}