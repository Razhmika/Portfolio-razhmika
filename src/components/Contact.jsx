import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { gmailComposeUrl, personalInfo } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email Address',
      value: personalInfo.email,
      href: gmailComposeUrl(),
      action: 'Send an Email',
    },
    {
      icon: Phone,
      label: 'Direct Phone',
      value: `+91 ${personalInfo.phone}`,
      href: `tel:${personalInfo.phone}`,
      action: 'Call Directly',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.address,
      href: null,
      action: 'Tamil Nadu, India',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#06080e]">
      {/* Background neon glow */}
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <MessageSquare size={13} />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="section-title">
              Let's Build Something <span className="neon-text">Reliable Together</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Actively seeking 3rd-year internship opportunities, technical collaborations, and software engineering roles.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Quick Contact Cards */}
            <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-5 mb-8">
              {contactItems.map(({ icon: Icon, label, value, href, action }) => (
                <motion.div key={label} variants={fadeUp}>
                  <div className="bento-card group flex flex-col justify-between h-full text-center">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-white font-medium break-all mb-4">
                        {value}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.05]">
                      {href ? (
                        <a
                          href={href}
                          target={label === 'Email Address' ? '_blank' : undefined}
                          rel={label === 'Email Address' ? 'noopener noreferrer' : undefined}
                          className="text-xs font-mono text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-medium transition-colors"
                        >
                          <span>{action}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="text-xs font-mono text-slate-400">{action}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Direct Action Hub */}
            <motion.div variants={fadeUp} className="bento-card text-center p-8 sm:p-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Immediate Availability: 3rd Year B.Tech IT Intern</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Ready to contribute to your engineering team.
              </h3>
              <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8 font-light">
                Whether you need a dedicated Java backend developer or an analytical manual QA tester to safeguard product releases, my inbox is open!
              </p>

              {/* Action Buttons: Copy Email + Gmail */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary min-w-[170px]"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span className="text-emerald-300 font-mono text-xs">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={gmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Send size={16} />
                  <span>Send Direct Email</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-center gap-6">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Social Channels:</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
