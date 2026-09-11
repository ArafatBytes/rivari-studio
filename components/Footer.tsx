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
              <span className="text-[#016DFF]">Republic</span> <i className="font-light">Marketing</i>
            </h2>
            <Link
              href="#"
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
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Web design</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">PPC</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">SEO</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Paid Social</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Social Media</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Email Marketing</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Our Work</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Resources</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">About</Link></li>
                <li><Link href="#" className="hover:text-[#016DFF] transition-colors text-sm">Contact Us</Link></li>
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

            {/* Locations */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">Locations</h3>
              <div className="space-y-6">
                <address className="not-italic text-sm text-gray-300">
                  <strong className="block text-white mb-1">London Office</strong>
                  20 Red Lion St, London WC1R 4PS<br />
                  <a href="tel:02082434550" className="hover:text-[#016DFF]">0208 243 4550</a>
                </address>
                <address className="not-italic text-sm text-gray-300">
                  <strong className="block text-white mb-1">Birmingham Office</strong>
                  Spacemade, 10 Brindley Pl, Birmingham, B1 2JB<br />
                  <a href="tel:01215170544" className="hover:text-[#016DFF]">0121 517 0544</a>
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <span>Company Reg No. 12710021</span>
            <span>VAT Reg No. 473402406</span>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
