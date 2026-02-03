import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';
export function Hero() {
  const { x, y } = useMousePosition();
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
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            },
            default: {
              type: 'spring',
              stiffness: 50,
              damping: 20
            }
          }}
          style={{
            boxShadow: '0 0 50px rgba(0, 255, 255, 0.2)',
            x: x * -50,
            y: y * -50
          }} />


        {/* Sphere-ish Shape */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-magenta-500/30 bg-gradient-to-br from-magenta-500/10 to-transparent backdrop-blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            boxShadow: '0 0 60px rgba(255, 0, 255, 0.2)',
            x: x * 40,
            y: y * 40
          }} />


        {/* Torus/Ring Shape */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border-4 border-white/10"
          style={{
            rotateX: 60,
            x: x * -20,
            y: y * -20
          }}
          animate={{
            rotateZ: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }} />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}>

          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-md">
            Next Generation Digital Agency
          </span>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight">
            We Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-500 animate-gradient-x">
              Digital Realities
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transcending boundaries with immersive web experiences. We craft the
            future of digital interaction with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] transition-shadow">

              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold text-lg flex items-center gap-2 hover:bg-white/10 backdrop-blur-md transition-colors">

              <Play className="w-5 h-5 fill-current" /> Showreel
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}>

        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
    </section>);

}