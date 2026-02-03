import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
export function Newsletter() {
  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative p-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta-500/20 blur-[100px] -z-10" />

          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Subscribe to our newsletter for the latest insights on design,
              technology, and digital innovation.
            </p>
          </div>

          <form className="max-w-md mx-auto relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-full bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors pr-16" />

            <button
              type="button"
              className="absolute right-2 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25">

              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>);

}