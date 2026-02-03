import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
const team = [
{
  name: 'Alex Mercer',
  role: 'Founder & Creative Director',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  bio: 'Visionary designer with 15+ years crafting digital experiences.'
},
{
  name: 'Sarah Vance',
  role: 'Lead Engineer',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
  bio: 'Full-stack architect specializing in WebGL and high-performance apps.'
},
{
  name: 'David Chen',
  role: 'UX Strategist',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
  bio: 'Psychology-driven designer focused on user behavior and conversion.'
},
{
  name: 'Elena Kova',
  role: '3D Artist',
  image:
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
  bio: 'Award-winning motion designer bringing static interfaces to life.'
}];

export function Team() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-magenta-500 text-sm font-bold tracking-widest uppercase mb-4 block">
              The Minds
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Meet the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Visionaries
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md mt-8 md:mt-0">
            A collective of senior engineers, designers, and strategists united
            by a passion for the extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
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
            className="group relative">

              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />


                {/* Social Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-center">
                    <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-cyan-500 hover:text-black transition-colors">

                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-magenta-500 hover:text-black transition-colors">

                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors">

                      <Dribbble className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {member.name}
              </h3>
              <p className="text-magenta-500 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-0 bg-black/90 p-4 rounded-xl border border-white/10 backdrop-blur-xl mb-4 pointer-events-none w-full">
                {member.bio}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}