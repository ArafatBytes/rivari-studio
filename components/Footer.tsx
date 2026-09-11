"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050419] text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between mb-20">
          
          <div className="mb-12 lg:mb-0 lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold font-urbanist tracking-tight leading-tight mb-8">
              Partner with <br />
              <span className="text-[#016DFF]">Rivari</span> <i className="font-light">Studio</i>
            </h2>
            <Link
              href="/contact-us"
              className="inline-flex items-center space-x-2 bg-white text-[#050419] px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:w-2/3 lg:ml-auto">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Services</h3>
              <ul className="space-y-4">
                <li><Link href="/web-design-birmingham" className="hover:text-[#016DFF] transition-colors text-sm">Web Design</Link></li>
                <li><Link href="/ppc-agency" className="hover:text-[#016DFF] transition-colors text-sm">PPC</Link></li>
                <li><Link href="/seo-birmingham" className="hover:text-[#016DFF] transition-colors text-sm">SEO</Link></li>
                <li><Link href="/facebook-ads-agency" className="hover:text-[#016DFF] transition-colors text-sm">Paid Social</Link></li>
                <li><Link href="/social-media-marketing" className="hover:text-[#016DFF] transition-colors text-sm">Social Media</Link></li>
                <li><Link href="/email-marketing-agency" className="hover:text-[#016DFF] transition-colors text-sm">Email Marketing</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="/case-studies" className="hover:text-[#016DFF] transition-colors text-sm">Our Work</Link></li>
                <li><Link href="/about-us" className="hover:text-[#016DFF] transition-colors text-sm">About</Link></li>
                <li><Link href="/contact-us" className="hover:text-[#016DFF] transition-colors text-sm">Contact Us</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Social</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Instagram</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Facebook</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">YouTube</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Contact</h3>
              <div className="space-y-5 text-sm text-gray-300">
                <address className="not-italic">
                  <strong className="block text-white mb-1">Address</strong>
                  First Floor, 58 - 59 Lower High St,<br />
                  Wednesbury WS10 7AL,<br />
                  United Kingdom
                </address>
                <div>
                  <strong className="block text-white mb-1">Phone</strong>
                  <a href="tel:+447939138565" className="hover:text-[#016DFF] transition-colors">
                    +44 7939 138565
                  </a>
                </div>
                <div>
                  <strong className="block text-white mb-1">Email</strong>
                  <a href="mailto:hello@rivaristudio.com" className="hover:text-[#016DFF] transition-colors">
                    hello@rivaristudio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Rivari Studio. All rights reserved.</span>
            <span>Company No. 15575562</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
