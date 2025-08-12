'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Rocket, Brain, Globe, Shield, Code } from 'lucide-react'

const projectCategories = [
  {
    name: 'SaaS',
    projects: [
      {
        id: 'screenless-saas',
        title: 'Screenless SaaS',
        description: 'A paper-esque tablet device like Remarkable 2 that guides you through creating a SaaS company without ever looking at a screen. Walks you through each step with AI-generated reactions and responses, providing a distraction-free environment for focused business building.',
        icon: Brain,
        color: 'from-neon-blue to-cyan-400',
        glow: 'neon-blue'
      },
      {
        id: 'saas-storymode',
        title: 'SaaS Storymode',
        description: 'TurboTax-style process for building SaaS companies that starts with your primary aim and vivid user experience stories. The AI guides you through database setup, team building, API connections, and product launch. Success isn\'t guaranteed, but it connects everything you need to create and ship your product.',
        icon: Zap,
        color: 'from-neon-pink to-pink-400',
        glow: 'neon-pink'
      },
      {
        id: 'ai-saas-betting',
        title: 'AI SaaS Betting Pool',
        description: 'Public dashboard showing all SaaS companies built within our system with their metrics. Users can bet on company success in exchange for company shares. Features AI bot management and "spell-one-shot" creation where users outline entire companies from start to finish, with real-time critiques and betting during AI development.',
        icon: Shield,
        color: 'from-green-400 to-emerald-400',
        glow: 'green-400'
      }
    ]
  },
  {
    name: 'AI Education',
    projects: [
      {
        id: 'ai-code-education',
        title: 'AI Code Editor Education Plugin',
        description: 'Earn the equivalent of a degree while your AI code generator thinks. This plugin educates and tests you on project-relevant terms to improve AI communication and developer capabilities. Like Skyrim\'s loading screen - people hate waiting unless you give them something to do while they wait.',
        icon: Code,
        color: 'from-orange-400 to-red-400',
        glow: 'orange-400'
      }
    ]
  },
  {
    name: 'Alternative Communication',
    projects: [
      {
        id: 'touchless-communication',
        title: 'Touchless Alternative Communication',
        description: 'Lidar-powered tablet that tracks finger movements for typing. The AI intelligently reads typing patterns and reduces words to gestures as users speed up. Evolution: keyboard → slidey keyboard → one-handed gestures with visual cursor tracking → eventually no visual cues needed, typing as fast as speech with one hand.',
        icon: Globe,
        color: 'from-neon-purple to-purple-400',
        glow: 'neon-purple'
      },
      {
        id: 'subaudible-voice',
        title: 'Subaudible Voice to Text',
        description: 'Like Ender\'s Game - earpiece that senses jaw movements for super-quiet whispers and rapid AI communication. Alternative: video/Lidar mouth watching for voice-to-text. Plus Cursor plugin that sees your app during testing, identifies clicked elements, and provides easy reference for making changes.',
        icon: Rocket,
        color: 'from-indigo-400 to-blue-400',
        glow: 'indigo-400'
      }
    ]
  }
]

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden parallax-bg">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-darker-red/50 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-darker-red/60 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-darker-red/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-black/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-black/40 rounded-full blur-2xl"></div>
        
        {/* Subtle color ribbons */}
        <div className="absolute top-1/4 left-1/3 w-96 h-32 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 ribbon animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-24 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 ribbon animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-72 h-20 bg-gradient-to-r from-violet-400/20 to-purple-400/20 ribbon animate-float" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-28 bg-gradient-to-r from-teal-400/20 to-green-400/20 ribbon animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Main content */}
              <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Ominous overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none parallax-bg"></div>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            KNOBLOCK
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-dark-red text-xl"
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="neon-glow">Welcome to Max's Designs</span>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Project Ideas by Category */}
        <div className="max-w-4xl mx-auto space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + categoryIndex * 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <motion.h2 
                className="text-4xl font-bold text-center bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + categoryIndex * 0.2, duration: 0.6 }}
              >
                {category.name}
              </motion.h2>
              
              {/* Projects in Category */}
              <div className="space-y-8">
                {category.projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + categoryIndex * 0.2 + projectIndex * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer"
            >
              <div className="gradient-border rounded-2xl p-1">
                <div className="glass-effect rounded-2xl p-8 h-96 relative overflow-hidden flex flex-col">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 text-${project.glow}`}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center text-dark-red group-hover:text-accent-glow transition-colors duration-300 mt-auto">
                      <span className="font-medium">Explore Project</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                  </div>
                </div>
              </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-20 text-gray-400"
        >
          <p className="text-lg">
            Ready to build the future together? 
            <span className="text-dark-red ml-2 font-medium">Let's create something amazing.</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
