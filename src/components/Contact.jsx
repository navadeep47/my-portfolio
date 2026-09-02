import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="py-10 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A371F7]/10 text-[#A371F7] border border-[#A371F7]/20 text-sm sm:text-base font-mono">
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#EDE9F8] tracking-tight">
          Contact &amp; <span className="text-[#A371F7]">Connect</span>
        </h2>
        <p className="text-base sm:text-lg text-[#b0a0c8] max-w-md mx-auto">
          Feel free to reach out for opportunities, collaborations, or tech discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Contact Cards */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-card rounded-2xl p-5 sm:p-7 space-y-5 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#EDE9F8]">
              Contact Information
            </h3>

            <div className="space-y-3.5">
              {/* Email */}
              <a
                href="mailto:pnavadeep10@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/60 hover:border-[#A371F7] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#A371F7]/10 text-[#A371F7] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#b0a0c8] uppercase tracking-wider font-mono">Email Address</div>
                  <div className="text-sm sm:text-base font-semibold text-[#EDE9F8] truncate group-hover:text-[#A371F7] transition-colors">
                    pnavadeep10@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+917675812327"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/60 hover:border-[#3FB950] transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-[#3FB950]/10 text-[#3FB950] group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#b0a0c8] uppercase tracking-wider font-mono">Mobile / WhatsApp</div>
                  <div className="text-sm sm:text-base font-semibold text-[#EDE9F8] group-hover:text-[#3FB950] transition-colors">
                    +91 7675812327
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/60">
                <div className="p-2.5 rounded-xl bg-[#FFBD2E]/10 text-[#FFBD2E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#b0a0c8] uppercase tracking-wider font-mono">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-[#EDE9F8]">
                    Andhra Pradesh, India
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-[#3d1a6e]/60 flex items-center justify-between">
                <span className="text-sm font-mono text-[#b0a0c8]">Profiles:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/navadeep47"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/navadeep-p-851797339/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/navadeep_.00?igsi=MXFpajVhb25kbGhzag=="
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#1a0a2e] border border-[#3d1a6e] text-[#b0a0c8] hover:bg-[#A371F7] hover:text-[#0d0618] hover:border-[#A371F7] transition-colors"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Resume Button */}
              {onOpenResume && (
                <div className="pt-3">
                  <button
                    onClick={onOpenResume}
                    className="btn-primary w-full !py-3 !text-sm sm:!text-base font-bold"
                  >
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download / View Full Resume</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-5 sm:p-7 space-y-5 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-[#EDE9F8]">
              Send a Direct Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#3FB950]/15 border border-[#3FB950]/40 text-[#3FB950] space-y-2 text-center animate-in zoom-in-95 duration-150">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                <p className="text-sm text-[#EDE9F8]">
                  Thank you for reaching out, Navadeep will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#b0a0c8] mb-1.5 uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/70 text-[#EDE9F8] text-sm sm:text-base focus:outline-none focus:border-[#A371F7] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#b0a0c8] mb-1.5 uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/70 text-[#EDE9F8] text-sm sm:text-base focus:outline-none focus:border-[#A371F7] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#b0a0c8] mb-1.5 uppercase">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Opportunity / Collaboration Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/70 text-[#EDE9F8] text-sm sm:text-base focus:outline-none focus:border-[#A371F7] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#b0a0c8] mb-1.5 uppercase">
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Navadeep, I'd like to discuss an opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0d0618] border border-[#3d1a6e]/70 text-[#EDE9F8] text-sm sm:text-base focus:outline-none focus:border-[#A371F7] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full !py-3 !text-sm sm:!text-base font-bold group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
