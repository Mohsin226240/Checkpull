import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Cpu, Globe, Palette, Rocket, Smartphone } from 'lucide-react';
const services = [
{
  icon: Globe,
  title: 'Web Development',
  desc: 'High-performance websites built with modern frameworks.'
},
{
  icon: Palette,
  title: 'UI/UX Design',
  desc: 'Immersive interfaces that captivate and convert.'
},
{
  icon: Smartphone,
  title: 'Mobile Apps',
  desc: 'Native and cross-platform mobile experiences.'
},
{
  icon: Code,
  title: 'Custom Software',
  desc: 'Tailored solutions for complex business problems.'
},
{
  icon: Cpu,
  title: 'AI Integration',
  desc: 'Smart algorithms to power your digital products.'
},
{
  icon: Rocket,
  title: 'Growth Strategy',
  desc: 'Data-driven marketing to scale your reach.'
}];

function ServiceCard({
  service,
  index



}: {service: (typeof services)[0];index: number;}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, {
    stiffness: 500,
    damping: 100
  });
  const mouseY = useSpring(y, {
    stiffness: 500,
    damping: 100
  });
  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);
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
      style={{
        perspective: 1000
      }}>

      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors group cursor-pointer">

        <div
          style={{
            transform: 'translateZ(50px)'
          }}
          className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 group-hover:text-white group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">

          <service.icon className="w-8 h-8" />
        </div>
        <h3
          style={{
            transform: 'translateZ(30px)'
          }}
          className="text-2xl font-bold text-white mb-4">

          {service.title}
        </h3>
        <p
          style={{
            transform: 'translateZ(20px)'
          }}
          className="text-gray-400 group-hover:text-gray-300 transition-colors">

          {service.desc}
        </p>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      </motion.div>
    </motion.div>);

}
export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
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
            className="text-4xl md:text-6xl font-bold text-white mb-6">

            Our <span className="text-cyan-400">Capabilities</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions engineered for the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <ServiceCard key={index} service={service} index={index} />
          )}
        </div>
      </div>
    </section>);

}