
import { motion } from 'framer-motion';

const Hero = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black" />
      
      {/* CSS 3D Cube */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block">
        <div className="relative w-full h-full perspective-1000">
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 mx-auto mt-16 transform-style-preserve-3d"
          >
            <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 opacity-80" style={{ transform: 'translateZ(64px)' }} />
            <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 opacity-80" style={{ transform: 'rotateY(90deg) translateZ(64px)' }} />
            <div className="absolute w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-80" style={{ transform: 'rotateY(180deg) translateZ(64px)' }} />
            <div className="absolute w-32 h-32 bg-gradient-to-br from-green-500 to-cyan-600 opacity-80" style={{ transform: 'rotateY(-90deg) translateZ(64px)' }} />
            <div className="absolute w-32 h-32 bg-gradient-to-br from-yellow-500 to-green-600 opacity-80" style={{ transform: 'rotateX(90deg) translateZ(64px)' }} />
            <div className="absolute w-32 h-32 bg-gradient-to-br from-red-500 to-yellow-600 opacity-80" style={{ transform: 'rotateX(-90deg) translateZ(64px)' }} />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-center z-10 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            John Doe
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Designer
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality. Let's build something amazing together.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            View My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-400 rounded-full text-blue-400 font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Hire Me
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
