import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Globe } from 'lucide-react';
export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting the <span className="text-magenta-500">Impossible</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are a collective of digital artisans, creative technologists,
              and strategic thinkers. Born in the void between art and code, we
              exist to push the boundaries of what's possible on the web.
            </p>

            <div className="space-y-6">
              {[
              {
                icon: Layers,
                title: 'Deep Tech Stack',
                desc: 'Leveraging the latest in WebGL and React'
              },
              {
                icon: Zap,
                title: 'Performance First',
                desc: 'Optimized for speed without compromising visuals'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                desc: 'Serving clients across the digital multiverse'
              }].
              map((item, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.2
                }}
                className="flex items-start gap-4">

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative">

            <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Abstract Art */}
              <div className="relative w-full h-full border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="w-32 h-32 bg-cyan-500 rounded-full blur-[80px] opacity-50 animate-pulse" />
                <div className="w-32 h-32 bg-magenta-500 rounded-full blur-[80px] opacity-50 animate-pulse delay-75" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-magenta-500/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>);

}