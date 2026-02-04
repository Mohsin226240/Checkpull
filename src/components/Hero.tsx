import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';
import { useTheme } from './ThemeContext';

export function Hero() {
  const { x, y } = useMousePosition();
  const { theme } = useTheme(); // ✅ get current theme

  // ✅ colors based on theme
  const textColor = theme === 'light' ? '#111' : '#fff';
  const subTextColor = theme === 'light' ? '#555' : '#ccc';
  const gradientText = theme === 'light'
    ? 'bg-gradient-to-r from-cyan-500 via-black to-magenta-500'
    : 'bg-gradient-to-r from-cyan-400 via-white to-magenta-500';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Floating Shapes Background */}
      <div className="absolute inset-0 pointer-events-none perspective-1000">
        {/* Cube-ish Shape */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
          animate={{
            rotateX: y * 20,
            rotateY: x * 20,
            rotate: 360
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            default: { type: 'spring', stiffness: 50, damping: 20 }
          }}
          style={{ boxShadow: theme === 'light' ? '0 0 50px rgba(0,0,0,0.2)' : '0 0 50px rgba(0,255,255,0.2)', x: x * -50, y: y * -50 }}
        />

        {/* Sphere-ish Shape */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-magenta-500/30 bg-gradient-to-br from-magenta-500/10 to-transparent backdrop-blur-sm"
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ boxShadow: theme === 'light' ? '0 0 60px rgba(0,0,0,0.1)' : '0 0 60px rgba(255,0,255,0.2)', x: x * 40, y: y * 40 }}
        />

        {/* Torus/Ring Shape */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border-4 border-white/10"
          style={{ rotateX: 60, x: x * -20, y: y * -20 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span
            className={`inline-block px-4 py-2 rounded-full border text-sm font-medium mb-8 backdrop-blur-md`}
            style={{
              backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)',
              borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
              color: theme === 'light' ? '#0aa' : '#0ff'
            }}
          >
            Next Generation Digital Agency
          </span>

        <h1
           className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
           style={{ color: textColor }}>
           We Build <br />
           <span
             className="text-transparent bg-clip-text animate-gradient-x"
             style={{
             backgroundImage: theme === 'light'
             ? 'linear-gradient(to right, #06b6d4, #111, #0ea5e9)' // ✅ Light mode gradient (cyan → dark → cyan-ish)
             : 'linear-gradient(to right, #06b6d4, #fff, #db2777)' // Dark mode gradient (original)
            }}
        >
    Digital Realities
  </span>
</h1>

          <p
            className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: subTextColor }}
          >
            Transcending boundaries with immersive web experiences. We craft the
            future of digital interaction with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-shadow"
              style={{
                color: theme === 'light' ? '#fff' : '#fff',
                background: theme === 'light' ? 'linear-gradient(to right, #06b6d4, #3b82f6)' : 'linear-gradient(to right, #06b6d4, #3b82f6)',
                boxShadow: theme === 'light' ? '0 0 30px rgba(0,0,0,0.2)' : '0 0 30px rgba(0,255,255,0.3)'
              }}
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border rounded-full text-lg font-bold flex items-center gap-2 transition-colors backdrop-blur-md"
              style={{
                color: theme === 'light' ? '#111' : '#fff',
                borderColor: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                backgroundColor: theme === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'
              }}
            >
              <Play className="w-5 h-5 fill-current" /> Showreel
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 rounded-full flex justify-center p-2"
          style={{
            border: `2px solid ${theme === 'light' ? '#0003' : 'rgba(255,255,255,0.2)'}`
          }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: theme === 'light' ? '#06b6d4' : '#0ff' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
