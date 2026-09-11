"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-hero-text > *", {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.2,
    });
    gsap.from(".contact-form > *", {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.4,
    });
  }, { scope: formRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={formRef} className="min-h-screen bg-[#f8f8f7]">
      {/* Hero */}
      <section className="pt-40 pb-16 bg-[#050419] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#016DFF]/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10">
          <div className="contact-hero-text text-white max-w-3xl">
            <span className="text-[#016DFF] text-xs font-semibold uppercase tracking-widest mb-4 block">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Let&apos;s Talk <em className="italic font-light text-[#016DFF]">Growth</em>
            </h1>
            <p className="text-[#9B9BA8] text-lg md:text-xl leading-relaxed">
              Ready to grow your business? Get in touch and we&apos;ll set up a free strategy call to discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <div className="flex flex-col gap-5">
                  {[
                    { label: "Address", value: "First Floor, 58 - 59 Lower High St, Wednesbury WS10 7AL, United Kingdom", href: "https://share.google/8kKlx7r5RMI7i6g3a" },
                    { label: "Phone", value: "+44 7939 138565", href: "tel:+447939138565" },
                    { label: "Email", value: "hello@rivaristudio.com", href: "mailto:hello@rivaristudio.com" },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col">
                      <span className="text-xs font-semibold text-[#6F6F6F] uppercase tracking-widest mb-1">{item.label}</span>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-[#040316] hover:text-[#016DFF] transition-colors">
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="text-sm font-semibold text-[#6F6F6F] uppercase tracking-widest mb-4">Follow us</h3>
                <div className="flex flex-col gap-2">
                  {["LinkedIn", "Instagram", "Facebook", "YouTube"].map((s) => (
                    <a key={s} href="#" className="font-medium hover:text-[#016DFF] transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-[#016DFF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#016DFF" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Message received!</h2>
                  <p className="text-[#6F6F6F]">
                    Thanks for reaching out. We&apos;ll be in touch within 24 hours to discuss how we can help you grow.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors"
                        placeholder="+44 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Service Required</label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        <option>PPC / Google Ads</option>
                        <option>SEO</option>
                        <option>Paid Social</option>
                        <option>Web Design</option>
                        <option>Social Media</option>
                        <option>Email Marketing</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Monthly Budget</label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors bg-white"
                      >
                        <option value="">Select budget range</option>
                        <option>£1,000 - £2,500</option>
                        <option>£2,500 - £5,000</option>
                        <option>£5,000 - £10,000</option>
                        <option>£10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Tell us about your project</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#016DFF] transition-colors resize-none"
                      placeholder="What are your goals? What challenges are you facing?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#016DFF] text-white py-4 rounded-full font-semibold hover:bg-[#040316] transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-center text-[#6F6F6F]">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy-policy" className="underline hover:text-[#016DFF]">Privacy Policy</a>.
                    We&apos;ll never share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
