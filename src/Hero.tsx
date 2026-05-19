import { motion } from 'framer-motion';
import { asset } from './utils';

interface HeroProps {
  onBookClick: () => void;
}

const Hero = ({ onBookClick }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  } as const;

  return (
    <section className="hero-section-new">
      <div className="hero-grid-new">
        {/* Left Column (The Pitch) */}
        <motion.div 
          className="hero-left-new"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 variants={itemVariants} className="hero-subheading">
            MULTI-CONCEPT SESSIONS
          </motion.h3>
          
          <motion.h1 variants={itemVariants} className="hero-h1">
            Best Aesthetic<br />in Town
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-description">
            Fresh setups rotating quarterly to ensure your content always stands out. Experience our state-of-the-art studio environments tailored for professional creation.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button onClick={onBookClick} className="btn btn-primary">Book Now</button>
          </motion.div>
        </motion.div>

        {/* Right Column (The Visuals) */}
        <div className="hero-right-new">
          <div className="hero-image-wrapper">
            <div className="hero-image-mask"></div>
            <img src={asset('/hero_studio_1779123142528.png')} alt="Professional Camera Rig" className="hero-visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
