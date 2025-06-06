
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col gap-6">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            whileHover={{ scale: 1.2, x: -10 }}
            whileTap={{ scale: 0.9 }}
            className={`text-gray-400 transition-all duration-300 ${social.color} group relative`}
          >
            <social.icon size={24} />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
            >
              {social.label}
            </motion.div>
          </motion.a>
        ))}
        
        <div className="w-px h-20 bg-gradient-to-b from-gray-600 to-transparent mx-auto mt-4" />
      </div>
    </motion.div>
  );
};

export default SocialLinks;
