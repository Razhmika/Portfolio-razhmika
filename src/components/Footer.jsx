import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { gmailComposeUrl, personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#05070c] relative">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
              RJ
            </div>
            <div>
              <p className="text-white text-sm font-bold tracking-tight">
                Razhmika Jayakrishnan
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                3rd Year B.Tech IT · Java Developer & QA Engineer
              </p>
            </div>
          </div>

          {/* Center: Dedication */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>Engineered with passion</span>
            <Heart size={13} className="text-emerald-400 fill-emerald-400 inline" />
            <span>by Razhmika</span>
          </div>

          {/* Right: Social Links & Copyright */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-emerald-500/30 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              razhmikaj@gmail.com
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[11px] text-slate-500 font-mono">
            © {currentYear} Razhmika Jayakrishnan · All Rights Reserved · Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
