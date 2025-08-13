interface Project {
  title: string;
  subtitle: string;
  concept: string;
  innovation: string;
  target: string;
}

interface CategorySectionProps {
  title: string;
  description: string;
  projects: Project[];
}

export default function CategorySection({ title, description, projects }: CategorySectionProps) {
  return (
    <div className="space-y-8">
      {/* Category Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-dark-red via-neon-purple to-neon-pink bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className="gradient-border rounded-2xl p-1">
              <div className="glass-effect rounded-2xl p-6 h-full relative overflow-hidden flex flex-col">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-2xl font-semibold text-white mb-2 group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </h4>
                  <h5 className="text-lg text-neon-blue mb-4 font-medium">
                    {project.subtitle}
                  </h5>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div>
                      <h6 className="text-sm font-semibold text-neon-green mb-1">Concept</h6>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.concept}
                      </p>
                    </div>
                    
                    <div>
                      <h6 className="text-sm font-semibold text-neon-yellow mb-1">Innovation</h6>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.innovation}
                      </p>
                    </div>
                    
                    <div>
                      <h6 className="text-sm font-semibold text-neon-orange mb-1">Target</h6>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.target}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
