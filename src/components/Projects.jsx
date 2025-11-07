import React from 'react';
import { Code2, MonitorSmartphone, Database, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Code2,
    title: 'Frontend Craft',
    desc: 'Interactive UIs with React, animations, and accessible design patterns.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: Database,
    title: 'APIs & Data',
    desc: 'Fast, secure APIs with robust data models and persistence.',
    tags: ['FastAPI', 'MongoDB', 'Auth'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Systems',
    desc: 'Performance-driven experiences that scale across devices.',
    tags: ['Vite', 'Optimizations', 'Testing'],
  },
  {
    icon: Sparkles,
    title: 'Creative Tech',
    desc: '3D, motion, and playful interactions for modern brands.',
    tags: ['Spline', 'Three.js', 'WebGL'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 border-t border-white/10 bg-neutral-950/80 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Work</h2>
            <p className="mt-2 max-w-2xl text-neutral-400">A snapshot of capabilities across UI, backend, and creative tech.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition md:inline-flex">Work together</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-5 hover:border-violet-500/30 transition">
      <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300 ring-1 ring-violet-500/30">
        <Icon size={18} />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-neutral-300 ring-1 ring-white/10">{t}</span>
        ))}
      </div>
    </div>
  );
}
