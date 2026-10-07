import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, FileText, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import emailjs from '@emailjs/browser';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send via EmailJS SDK (Custom sender "Portfolio Message")
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: 'Portfolio Message',
            name: formData.name,
            email: formData.email,
            reply_to: formData.email,
            subject: formData.subject ? `Message from portfolio: ${formData.subject}` : `Message from portfolio (${formData.name})`,
            message: formData.message,
            to_email: 'pnavadeep10@gmail.com'
          },
          publicKey
        );
      } else if (web3formsKey) {
        // Send via Web3Forms (Custom sender "Portfolio Message")
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            from_name: 'Portfolio Message',
            subject: formData.subject ? `Message from portfolio: ${formData.subject}` : `Message from portfolio (${formData.name})`,
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        const data = await response.json();
        if (!response.ok || data.success !== true) {
          throw new Error(data.message || 'Failed to send message');
        }
      } else {
        // Direct activated endpoint to pnavadeep10@gmail.com
        const response = await fetch('https://formsubmit.co/ajax/40d3d79099082e1b7634b965c678b900', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Subject: formData.subject || 'Portfolio Inquiry',
            Message: formData.message,
            _replyto: formData.email,
            _subject: formData.subject ? `Message from portfolio: ${formData.subject}` : `Message from portfolio (${formData.name})`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json();
        if (!response.ok || (data.success !== 'true' && data.success !== true)) {
          throw new Error(data.message || 'Failed to send message');
        }
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(err?.text || err?.message || 'Failed to send message. Please try again.');
    }
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

            {status === 'activation_required' ? (
              <div className="p-6 rounded-2xl bg-[#FFBD2E]/15 border border-[#FFBD2E]/40 text-[#FFBD2E] space-y-2 text-center animate-in zoom-in-95 duration-150">
                <CheckCircle2 className="w-10 h-10 mx-auto text-[#FFBD2E]" />
                <h4 className="text-base font-bold text-[#EDE9F8]">Action Required: Activate Your Form</h4>
                <p className="text-sm text-[#EDE9F8]">
                  An activation email was sent to <strong className="text-[#FFBD2E]">pnavadeep10@gmail.com</strong>.
                </p>
                <p className="text-xs text-[#b0a0c8]">
                  Please open Gmail (check <strong>Spam / Junk</strong> folder too) and click <strong>"Activate Form"</strong>. Once clicked, all future messages will arrive directly in your inbox.
                </p>
              </div>
            ) : status === 'success' ? (
              <div className="p-6 rounded-2xl bg-[#3FB950]/15 border border-[#3FB950]/40 text-[#3FB950] space-y-2 text-center animate-in zoom-in-95 duration-150">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h4 className="text-base font-bold">Message Sent Successfully!</h4>
                <p className="text-sm text-[#EDE9F8]">
                  Thank you for reaching out, Navadeep will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-300 flex items-start gap-3 text-sm animate-in fade-in duration-150">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-200">Failed to send message. Please try again.</p>
                      {errorMessage && <p className="text-xs text-red-300/80 mt-0.5">{errorMessage}</p>}
                    </div>
                  </div>
                )}

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
                      disabled={status === 'sending'}
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
                      disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
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
                    disabled={status === 'sending'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full !py-3 !text-sm sm:!text-base font-bold group flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

