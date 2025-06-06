
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

const SkillSphere = ({ skill, position, color }: { skill: string, position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js"],
      color: "#3b82f6"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
      color: "#8b5cf6"
    },
    {
      category: "Tools & Cloud",
      skills: ["AWS", "Docker", "Git", "Figma"],
      color: "#06b6d4"
    }
  ];

  const sphereSkills: Array<{ name: string; position: [number, number, number]; color: string }> = [
    { name: "React", position: [-2, 2, 0], color: "#61dafb" },
    { name: "Node.js", position: [2, 1, -1], color: "#68a063" },
    { name: "Python", position: [0, -2, 1], color: "#3776ab" },
    { name: "AWS", position: [-1, 0, 2], color: "#ff9900" },
    { name: "Docker", position: [1, -1, -2], color: "#2496ed" },
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
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My expertise spans across modern web technologies, from frontend frameworks to cloud infrastructure.
          </p>
        </motion.div>

        {/* 3D Skills Sphere */}
        <div className="relative h-96 mb-16">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              {sphereSkills.map((skill, index) => (
                <SkillSphere 
                  key={`${skill.name}-${index}`}
                  skill={skill.name}
                  position={skill.position}
                  color={skill.color}
                />
              ))}
            </Suspense>
          </Canvas>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center text-gray-400">
              <p className="mb-2">Interactive 3D Skills</p>
              <p className="text-sm">Drag to rotate • Scroll to zoom</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ color: category.color }}>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">{skill}</span>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: category.color }} />
                    </div>
                    
                    <div className="mt-2 bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, duration: 1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
