"use client";

import { useState } from "react";
import { Link } from "next-view-transitions";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Collections", href: "/products/all-collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface NavBarProps {
  scrollY?: number;
  dark?: boolean;
}

export function NavBar({ scrollY, dark }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isDark = dark;
  const isScrolled = scrollY ? scrollY > 50 : 0;


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled || isDark ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className={`text-2xl font-bold ${
                  isScrolled || isDark ? "text-primary" : "text-white"
                }`}
              >
                STÖR
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium ${
                    isScrolled || isDark
                      ? "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      : "text-white hover:border-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled || isDark ? "" : "text-white"}
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>
            

            <Link className={isScrolled || isDark ? "" : "text-white"} href={`/login`}>
              <User className="h-6 w-6" />
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled || isDark ? "" : "text-white"}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Now with black background and white text */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-black text-white shadow-lg transform transition-transform duration-500 ease-in-out sm:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-end p-3 border-b border-gray-700">
            <Button
              variant="ghost"
              size="icon"
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-base font-medium text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-700 py-4">
              <div className="flex items-center justify-around px-4">
                <Button variant="ghost" size="icon" className="text-white">
                  <ShoppingBag className="h-6 w-6" />
                </Button>
                <Link className="text-white" href={`/login`}>
                  <User className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
