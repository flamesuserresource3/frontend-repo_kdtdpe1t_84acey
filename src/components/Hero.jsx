import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.25),transparent_40%)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-end px-4 py-24">
        <p className="mb-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[13px] text-neutral-200 backdrop-blur">
          Tech • Portfolio • Interactive • Playful • Modern
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Building delightful products with code and curiosity
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300">
          I’m a full‑stack developer crafting immersive experiences, performant backends, and polished interfaces.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200 transition">See Projects</a>
          <a href="#contact" className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
