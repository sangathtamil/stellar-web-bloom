
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingSphere = ({ position, color }: { position: [number, number, number], color: string }) => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <Sphere position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </Sphere>
  </Float>
);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const skills = [
    'React & Next.js', 'TypeScript', 'Node.js', 'Python',
    'AWS & Docker', 'GraphQL', 'PostgreSQL', 'UI/UX Design'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <FloatingSphere position={[-3, 2, 0]} color="#3b82f6" />
            <FloatingSphere position={[3, -1, -2]} color="#8b5cf6" />
            <FloatingSphere position={[0, 3, -1]} color="#06b6d4" />
          </Suspense>
        </Canvas>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and love bringing ideas to life through clean, efficient code.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying ahead of industry trends.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">Core Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-3 text-center text-gray-300 hover:border-blue-500 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">5+</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Years Experience</h4>
                  <p className="text-gray-400">Building scalable applications</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">50+</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Projects Completed</h4>
                  <p className="text-gray-400">From startups to enterprise</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">∞</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Learning Journey</h4>
                  <p className="text-gray-400">Always exploring new tech</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
