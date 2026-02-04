import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

// Placeholder logos
const clients = [
  'NEXUS',
  'VORTEX',
  'CYBERDYNE',
  'AETHER',
  'QUANTUM',
  'HELIOS',
  'SYNTH',
  'ORBIT'
];

export function Clients() {
  const { theme } = useTheme(); // ✅ Access theme

  // Theme-aware colors
  const bgColor = theme === 'light' ? 'bg-white/5' : 'bg-black/5';
  const textColor = theme === 'light' ? 'text-black/60' : 'text-white';
  const hoverTextColor = 'text-cyan-400'; // Same for both themes

  return (
    <section className={`py-24 border-y border-white/5 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-sm tracking-widest uppercase mb-12 ${textColor}`}>
          Trusted by industry leaders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
            >
              <div
                className={`h-12 flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`}
              >
                <span
                  className={`text-xl font-bold font-mono tracking-tighter transition-colors ${
                    textColor
                  } group-hover:text-cyan-400`}
                >
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
