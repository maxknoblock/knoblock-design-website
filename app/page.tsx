'use client'

import CategorySection from './components/CategorySection'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden parallax-bg">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-darker-red/50 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="overflow-hidden mb-6">
            <div className="looping-title-container">
              <div className="looping-title">
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
                <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent neon-glow mr-16">KNOBLOCK</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl text-neon-blue mb-4">Max's Designs</h2>
        </div>

        {/* Project Categories */}
        <div className="space-y-16">
          {/* SaaS Category */}
          <CategorySection 
            title="🚀 SaaS" 
            description="Software as a Service Concepts"
            projects={[
              {
                title: "Davinkey",
                subtitle: "Screenless SaaS Device",
                concept: "A paper-esque tablet device like Remarkable 2 that guides users through creating a SaaS company without ever looking at a screen",
                innovation: "AI-generated reactions and responses provide a distraction-free environment for focused business building",
                target: "Entrepreneurs who want to build SaaS companies without digital distractions"
              },
              {
                title: "StoryFlow",
                subtitle: "SaaS Storymode",
                concept: "TurboTax-style process for building SaaS companies that starts with primary aim and vivid user experience stories",
                innovation: "AI guides through database setup, team building, API connections, and product launch",
                target: "Entrepreneurs who want a structured, guided approach to SaaS development"
              },
              {
                title: "BetFlow",
                subtitle: "AI SaaS Betting Pool",
                concept: "Public dashboard showing all SaaS companies built within the system with their metrics",
                innovation: "Users can bet on company success in exchange for company shares with AI bot management",
                target: "Investors and entrepreneurs interested in AI-powered SaaS validation"
              },
              {
                title: "SpellForge",
                subtitle: "SomeoneShouldMakeThat.com",
                concept: "Platform where users submit app ideas that get designed using spell methodology (weaving one-shot prompts)",
                innovation: "Users read app summaries and vote on feasibility and impact, with marketplace integration",
                target: "App developers and entrepreneurs looking for validated ideas"
              }
            ]}
          />

          {/* Alternative Communication Category */}
          <CategorySection 
            title="🌐 Alternative Communication" 
            description="Next-generation interfaces that transcend traditional input methods"
            projects={[
              {
                title: "GestureFlow",
                subtitle: "Touchless Alternative Communication",
                concept: "Lidar-powered tablet that tracks finger movements for typing",
                innovation: "AI intelligently reads typing patterns and reduces words to gestures as users speed up",
                target: "Users seeking faster, more intuitive input methods"
              },
              {
                title: "WhisperLink",
                subtitle: "Subaudible Voice to Text",
                concept: "Like Ender's Game - earpiece that senses jaw movements for super-quiet whispers",
                innovation: "Video/Lidar mouth watching for voice-to-text with rapid AI communication",
                target: "Users needing silent communication in professional or private settings"
              }
            ]}
          />

          {/* AI UI Category */}
          <CategorySection 
            title="🎨 AI UI" 
            description="Built-in protocols and tools for seamless AI development"
            projects={[
              {
                title: "CLAY",
                subtitle: "AI Code Editor Protocol",
                concept: "Built-in protocol for AI code editors that automatically adds a floating toolbar at the bottom left of every generated app",
                innovation: "Three modes: Usermode (normal viewing), Devmode (truncated component names), Designmode (drag-and-drop editing)",
                target: "AI developers and designers seeking seamless integration between AI development and UX design"
              }
            ]}
          />

          {/* Household Category */}
          <CategorySection 
            title="🏠 Household" 
            description="Revolutionary home technologies that transform daily living"
            projects={[
              {
                title: "MagneticFlow",
                subtitle: "Self Healing Kitchen",
                concept: "Revolutionary kitchen design that reduces the number of moves needed to cook and clean",
                innovation: "Smart design throughout with magnetic systems, automated cleaning, and intelligent organization",
                target: "Homeowners seeking efficient, automated kitchen solutions"
              },
              {
                title: "RapidCastle",
                subtitle: "12 Hour Castle",
                concept: "Ambitious project to build a complete castle in just 12 hours using SIP (Structural Insulated Panels)",
                innovation: "Combines rapid construction methods with breakthrough engineering and construction methodologies",
                target: "Construction industry professionals and innovators"
              }
            ]}
          />

          {/* Community Category */}
          <CategorySection 
            title="🤝 Community" 
            description="Collaborative platforms that foster innovation and skill development"
            projects={[
              {
                title: "SpeedForge",
                subtitle: "One Shot Competition",
                concept: "Competitive platform where developers use any AI Code Editor (AICE) to build complete apps in one session",
                innovation: "Like Formula One racing - participants must release their tech stacks and specifications before the match begins",
                target: "Developers seeking rapid innovation, skill development, and community collaboration"
              }
            ]}
          />
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400">
          <p>Intellectual Property of Max Method LLC</p>
        </footer>
      </div>
    </main>
  )
}
