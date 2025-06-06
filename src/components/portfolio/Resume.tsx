
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Suspense, useState } from 'react';

const ResumeCard3D = ({ isHovered }: { isHovered: boolean }) => (
  <Float speed={1} rotationIntensity={isHovered ? 1 : 0.2} floatIntensity={isHovered ? 2 : 0.5}>
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1.5, 2, 0.05]} />
      <meshStandardMaterial 
        color={isHovered ? "#3b82f6" : "#f8fafc"} 
        transparent 
        opacity={0.9} 
      />
    </mesh>
  </Float>
);

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, education, and technical expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <ResumeCard3D isHovered={isHovered} />
              </Suspense>
            </Canvas>
          </motion.div>

          {/* Resume Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Overview</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">EXP</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">5+ Years</h4>
                    <p className="text-gray-400">Professional Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">EDU</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">CS Degree</h4>
                    <p className="text-gray-400">Computer Science, MIT</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">CERT</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AWS Certified</h4>
                    <p className="text-gray-400">Solutions Architect</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Download Resume (PDF)
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border-2 border-blue-400 text-blue-400 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              View Online Version
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
