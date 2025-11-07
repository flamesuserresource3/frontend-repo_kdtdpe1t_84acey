import React from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-violet-600/20 text-violet-400 ring-1 ring-violet-500/30 group-hover:bg-violet-600/30 transition">
            <Rocket size={18} />
          </span>
          <span className="text-sm font-semibold tracking-wide text-neutral-200">My Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white transition">
            <Github size={18} />
            <span>GitHub</span>
          </a>
        </nav>

        <a href="#contact" className="md:ml-6 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/20 px-3 py-1.5 text-sm font-medium text-violet-200 hover:bg-violet-600/30 transition">
          <Mail size={16} />
          <span>Hire Me</span>
        </a>
      </div>
    </header>
  );
}
