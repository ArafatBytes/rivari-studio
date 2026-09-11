"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-urbanist tracking-tight">
            Republic <span className="font-light">Marketing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center space-x-1 text-sm font-semibold hover:text-[var(--color-primary)] transition-colors">
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Mega Menu Dropdown */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-[600px] border border-gray-100 flex gap-8">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {[
                      { title: "PPC", desc: "Capture existing demand" },
                      { title: "SEO", desc: "Grow your traffic" },
                      { title: "Paid Social", desc: "Generate demand" },
                      { title: "Web Design", desc: "Websites that sell" },
                      { title: "Social Media", desc: "Grow your audience" },
                      { title: "Email Marketing", desc: "Nurture your leads" },
                    ].map((service) => (
                      <Link
                        key={service.title}
                        href="#"
                        className="group flex items-start space-x-4 p-3 -m-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors text-[var(--color-primary)]">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors">
                            {service.title}
                          </div>
                          <div className="text-xs text-[var(--color-gray)] mt-1 font-medium">
                            {service.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/case-studies"
            className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-semibold hover:text-[var(--color-primary)] transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Let's Talk Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="bg-[var(--color-dark)] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[var(--color-primary)] transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[var(--color-dark)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-6 flex flex-col space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
           <Link href="#" className="text-lg font-semibold py-2 border-b border-gray-100">
            Services
          </Link>
          <Link href="#" className="text-lg font-semibold py-2 border-b border-gray-100">
            Our Work
          </Link>
          <Link href="#" className="text-lg font-semibold py-2 border-b border-gray-100">
            Resources
          </Link>
          <Link href="#" className="text-lg font-semibold py-2 border-b border-gray-100">
            About
          </Link>
          <Link
            href="#"
            className="bg-[var(--color-dark)] text-white px-6 py-4 rounded-full text-center font-semibold mt-4"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
}
