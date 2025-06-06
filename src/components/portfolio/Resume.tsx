
import { motion } from 'framer-motion';
import { useState } from 'react';

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
          {/* CSS Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{ 
                rotateY: isHovered ? [0, 5, -5, 0] : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
              className="w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-2xl flex flex-col items-center justify-center text-gray-800 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="mt-8 text-center px-6">
                <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                <div className="h-4 bg-gray-400 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-300 rounded"></div>
                  <div className="h-2 bg-gray-300 rounded"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            </motion.div>
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
