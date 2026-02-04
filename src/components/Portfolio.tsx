import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, Eye, Cpu, Activity, BoxIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const projects = [
  {
    title: 'Neon Nexus',
    desc: 'DeFi trading platform with real-time visualization.',
    tech: ['React', 'WebGL', 'Solidity'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
    style: 'neon',
    icon: Zap
  },
  {
    title: 'Cyber Void',
    desc: 'Immersive VR experience for digital art galleries.',
    tech: ['Three.js', 'WebXR', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1614728853913-1e221a613c81?q=80&w=2874&auto=format&fit=crop',
    style: 'glass',
    icon: Layers
  },
  {
    title: 'Quantum Flow',
    desc: 'AI-powered project management dashboard.',
    tech: ['Next.js', 'Python', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop',
    style: 'holographic',
    icon: Cpu
  },
  {
    title: 'Aether Lens',
    desc: 'Augmented reality navigation system for urban environments.',
    tech: ['Swift', 'ARKit', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    style: 'floating',
    icon: Eye
  },
  {
    title: 'Data Prism',
    desc: 'Big data visualization suite for enterprise analytics.',
    tech: ['D3.js', 'Vue', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    style: 'gradient',
    icon: Activity
  },
  {
    title: 'Synth Wave',
    desc: 'Generative music platform powered by neural networks.',
    tech: ['WebAudio', 'TensorFlow.js', 'React'],
    image: 'https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=2000&auto=format&fit=crop',
    style: 'glitch',
    icon: BoxIcon
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const textPrimary = theme === 'light' ? 'text-black' : 'text-white';
  const textSecondary = theme === 'light' ? 'text-gray-700' : 'text-gray-400';
  const overlayBg = theme === 'light' ? 'from-white/60 via-white/40 to-transparent' : 'from-black via-black/80 to-transparent';
  const iconBg = theme === 'light' ? 'bg-white/10 text-cyan-500 border-black/10' : 'bg-white/10 text-white border-white/10';

  const getStyleClasses = (style: string) => {
    switch (style) {
      case 'neon':
        return theme === 'light'
          ? 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]'
          : 'border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)]';
      case 'glass':
        return theme === 'light'
          ? 'border-black/10 bg-white/40 backdrop-blur-xl hover:bg-white/50'
          : 'border-magenta-500/30 bg-white/5 backdrop-blur-xl hover:bg-white/10';
      case 'holographic':
        return theme === 'light'
          ? 'border-black/20 bg-gradient-to-br from-cyan-100 to-magenta-100 hover:from-cyan-200 hover:to-magenta-200'
          : 'border-white/20 bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 hover:from-cyan-500/20 hover:to-magenta-500/20';
      case 'floating':
        return 'border-black/10 shadow-2xl hover:-translate-y-4 transition-transform duration-500';
      case 'gradient':
        return theme === 'light'
          ? 'border-transparent relative before:absolute before:inset-0 before:-z-10 before:m-[-1px] before:rounded-xl before:bg-gradient-to-r before:from-cyan-200 before:to-magenta-200'
          : 'border-transparent relative before:absolute before:inset-0 before:-z-10 before:m-[-1px] before:rounded-xl before:bg-gradient-to-r before:from-cyan-500 before:to-magenta-500';
      case 'glitch':
        return 'border-black/10 hover:border-cyan-400/50 hover:translate-x-1 transition-all';
      default:
        return theme === 'light' ? 'border-black/10' : 'border-white/10';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative h-[280px] w-full rounded-xl overflow-hidden border transition-all duration-500 preserve-3d ${getStyleClasses(project.style)}`}
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          scale: isHovered ? 1.02 : 1
        }}
      >
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${overlayBg}`} />
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
          <div className={`flex justify-between items-start`}>
            <div className={`p-3 rounded-lg ${iconBg} transition-colors`}>
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
            <h3 className={`text-2xl font-bold mb-2 transition-colors ${isHovered ? 'text-cyan-400' : textPrimary}`}>
              {project.title}
            </h3>
            <p className={`text-sm mb-4 line-clamp-2 transition-colors ${isHovered ? 'text-gray-600' : textSecondary}`}>
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded border ${theme === 'light' ? 'bg-white/20 border-black/20 text-black' : 'bg-white/5 border-white/10 text-gray-400'}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const { theme } = useTheme();
  const textPrimary = theme === 'light' ? 'text-black' : 'text-white';
  const gradientText = theme === 'light' ? 'from-cyan-400 to-cyan-700' : 'from-cyan-400 to-magenta-500';

  return (
    <section id="portfolio" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4 block"
          >
            Selected Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-5xl md:text-7xl font-bold mb-8 ${textPrimary}`}
          >
            Digital{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientText}`}>
              Masterpieces
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 border rounded-full font-medium transition-all ${
              theme === 'light'
                ? 'bg-transparent border-black text-black hover:bg-black/5 hover:border-cyan-400'
                : 'bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-cyan-400'
            }`}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
}
