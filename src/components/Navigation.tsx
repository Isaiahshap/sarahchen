import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-gradient-to-b from-midnight to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-cormorant text-gold">
            Illuma Gallery
          </Link>
          
          <div className="flex space-x-12">
            {['Home', 'Exhibitions', 'Artists', 'About'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="nav-link text-pearl hover:text-gold transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 