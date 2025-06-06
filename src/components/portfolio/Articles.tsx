
import { motion } from 'framer-motion';

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      snippet: "Learn the best practices for structuring large React applications with modern patterns and tools.",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      link: "#",
      publishDate: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Future of Web Development",
      snippet: "Exploring emerging technologies and trends that will shape the future of web development.",
      coverImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=300&fit=crop",
      link: "#",
      publishDate: "February 28, 2024",
      readTime: "12 min read"
    },
    {
      title: "Mastering TypeScript in 2024",
      snippet: "Advanced TypeScript techniques and patterns for building type-safe applications.",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=300&fit=crop",
      link: "#",
      publishDate: "January 20, 2024",
      readTime: "15 min read"
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
            Featured Articles
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sharing insights and knowledge about web development, programming best practices, and industry trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.coverImage} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{article.publishDate}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {article.snippet}
                  </p>

                  <motion.a
                    href={article.link}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
