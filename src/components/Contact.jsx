import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-white/10 bg-neutral-950 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300 ring-1 ring-violet-500/30">
            <Mail size={18} />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">Let’s build something great</h2>
          <p className="mt-2 text-neutral-400">Have a project in mind or want to say hi? Drop a message below.</p>
        </div>

        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Name</label>
              <input
                type="text"
                placeholder="Ada Lovelace"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-neutral-400 outline-none ring-violet-500/30 focus:ring"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-neutral-400 outline-none ring-violet-500/30 focus:ring"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm text-neutral-300">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your idea..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-neutral-400 outline-none ring-violet-500/30 focus:ring"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-neutral-400">I usually respond within 24 hours.</p>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition">
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-neutral-400">
          Prefer email? <a href="mailto:hello@example.com" className="text-violet-300 underline-offset-4 hover:underline">hello@example.com</a>
        </p>
      </div>
    </section>
  );
}
