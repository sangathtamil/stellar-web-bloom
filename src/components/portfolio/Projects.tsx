
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Box, Float } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Github } from 'lucide-react';

const ProjectCard3D = ({ isHovered }: { isHovered: boolean }) => (
  <Float speed={2} rotationIntensity={isHovered ? 2 : 0.5} floatIntensity={isHovered ? 3 : 1}>
    <Box args={[2, 1.2, 0.1]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color={isHovered ? "#3b82f6" : "#1f2937"} 
        transparent 
        opacity={0.8} 
      />
    </Box>
  </Float>
);

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates using Socket.io",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and data visualization",
      technologies: ["Python", "React", "D3.js", "TensorFlow"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                {/* 3D Element */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                      <ambientLight intensity={0.6} />
                      <pointLight position={[10, 10, 10]} />
                      <Suspense fallback={null}>
                        <ProjectCard3D isHovered={hoveredProject === index} />
                      </Suspense>
                    </Canvas>
                  </div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveDemo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
                    >
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-gray-600 hover:border-gray-400 rounded-lg transition-colors duration-300"
                    >
                      <Github size={20} className="text-gray-400 hover:text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
