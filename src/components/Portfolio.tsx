import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Layers,
  Zap,
  Eye,
  Cpu,
  Activity,
  BoxIcon } from
'lucide-react';
const projects = [
{
  title: 'Neon Nexus',
  desc: 'DeFi trading platform with real-time visualization.',
  tech: ['React', 'WebGL', 'Solidity'],
  image:
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
  style: 'neon',
  icon: Zap
},
{
  title: 'Cyber Void',
  desc: 'Immersive VR experience for digital art galleries.',
  tech: ['Three.js', 'WebXR', 'Node.js'],
  image:
  'https://images.unsplash.com/photo-1614728853913-1e221a613c81?q=80&w=2874&auto=format&fit=crop',
  style: 'glass',
  icon: Layers
},
{
  title: 'Quantum Flow',
  desc: 'AI-powered project management dashboard.',
  tech: ['Next.js', 'Python', 'TensorFlow'],
  image:
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
  style: 'holographic',
  icon: Cpu
},
{
  title: 'Aether Lens',
  desc: 'Augmented reality navigation system for urban environments.',
  tech: ['Swift', 'ARKit', 'Mapbox'],
  image:
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
  style: 'floating',
  icon: Eye
},
{
  title: 'Data Prism',
  desc: 'Big data visualization suite for enterprise analytics.',
  tech: ['D3.js', 'Vue', 'PostgreSQL'],
  image:
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
  style: 'gradient',
  icon: Activity
},
{
  title: 'Synth Wave',
  desc: 'Generative music platform powered by neural networks.',
  tech: ['WebAudio', 'TensorFlow.js', 'React'],
  image:
  'https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=2000&auto=format&fit=crop',
  style: 'glitch',
  icon: BoxIcon
}];

function ProjectCard({
  project,
  index



}: {project: (typeof projects)[0];index: number;}) {
  const [isHovered, setIsHovered] = useState(false);
  // Unique styles based on project type
  const getStyleClasses = (style: string) => {
    switch (style) {
      case 'neon':
        return 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]';
      case 'glass':
        return 'border-magenta-500/30 bg-white/5 backdrop-blur-xl hover:bg-white/10';
      case 'holographic':
        return 'border-white/20 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 hover:from-cyan-500/20 hover:to-magenta-500/20';
      case 'floating':
        return 'border-white/10 shadow-2xl hover:-translate-y-4 transition-transform duration-500';
      case 'gradient':
        return 'border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:m-[-1px] before:rounded-xl before:bg-gradient-to-r before:from-cyan-500 before:to-magenta-500';
      case 'glitch':
        return 'border-white/10 hover:border-red-500/50 hover:translate-x-1 transition-all';
      default:
        return 'border-white/10';
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay: index * 0.1
      }}
      className="group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <motion.div
        className={`relative h-[280px] w-full rounded-xl overflow-hidden border transition-all duration-500 preserve-3d ${getStyleClasses(project.style)}`}
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.02 : 1
        }}>

        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div
              className={`p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 ${isHovered ? 'text-cyan-400' : 'text-white'} transition-colors`}>

              <project.icon className="w-6 h-6" />
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <button className="p-2 rounded-full bg-white text-black hover:bg-cyan-400 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="transform transition-all duration-500 group-hover:translate-y-[-10px]">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) =>
              <span
                key={t}
                className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-white/5 border border-white/10 text-gray-400">

                  {t}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

}
export function Portfolio() {
  return (
    <section id="portfolio" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4 block">

            Selected Works
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-8">

            Digital{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
              Masterpieces
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <ProjectCard key={index} project={project} index={index} />
          )}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium hover:bg-white/5 hover:border-cyan-400 transition-all">

            View All Projects
          </motion.button>
        </div>
      </div>
    </section>);

}