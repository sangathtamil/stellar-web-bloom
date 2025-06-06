
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "@johndoe",
      description: "Open source contributions and personal projects",
      stats: "50+ repositories",
      icon: Github,
      color: "from-gray-600 to-gray-800",
      link: "#"
    },
    {
      platform: "LeetCode",
      username: "@johndoe",
      description: "Data structures and algorithms practice",
      stats: "500+ problems solved",
      icon: "🧠",
      color: "from-orange-500 to-red-600",
      link: "#"
    },
    {
      platform: "Codeforces",
      username: "@johndoe",
      description: "Competitive programming contests",
      stats: "Expert rating (1600+)",
      icon: "🏆",
      color: "from-blue-500 to-purple-600",
      link: "#"
    },
    {
      platform: "HackerRank",
      username: "@johndoe",
      description: "Programming challenges and certifications",
      stats: "5-star problem solver",
      icon: "⭐",
      color: "from-green-500 to-cyan-600",
      link: "#"
    }
  ];

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
            Coding Profiles
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in competitive programming and open source contributions across various platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="group block"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                      {typeof profile.icon === 'string' ? (
                        <span>{profile.icon}</span>
                      ) : (
                        <profile.icon size={28} className="text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {profile.platform}
                      </h3>
                      <p className="text-blue-400 font-medium">{profile.username}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 text-lg">
                    {profile.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-semibold text-lg">
                      {profile.stats}
                    </span>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-blue-400 group-hover:text-blue-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Competitive Programming Journey</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I enjoy solving algorithmic challenges and participating in programming contests. 
              These platforms have helped me sharpen my problem-solving skills and learn new techniques.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">1000+</div>
                <div className="text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-gray-400">Contests Participated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">3</div>
                <div className="text-gray-400">Years Active</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">Top 5%</div>
                <div className="text-gray-400">Global Ranking</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
