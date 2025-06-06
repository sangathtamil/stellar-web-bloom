
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  sections: Array<{ id: string; component: any }>;
}

const Navigation = ({ currentSection, onNavigate, sections }: NavigationProps) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'articles', label: 'Articles' },
    { id: 'coding', label: 'Coding' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(index)}
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
              >
                {item.label}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden"
      >
        <div className="bg-black/80 backdrop-blur-md rounded-full px-6 py-3 flex gap-3">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === index 
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
