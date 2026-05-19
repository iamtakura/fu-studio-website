import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PackagesOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const PackagesOverlay = ({ isOpen, onClose }: PackagesOverlayProps) => {
  // Focus trapping and Esc key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  } as const;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="packages-overlay-backdrop"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="packages-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="close-btn" onClick={onClose} aria-label="Close packages">
              [X]
            </button>
            <h2 className="modal-title">Select Your Session</h2>

            <div className="packages-grid">
              {/* Card 1 */}
              <div className="package-card">
                <div className="package-header">
                  <h3>Creator Starter</h3>
                  <div className="price">
                    <span className="currency">$</span>25<span className="period">/hr</span>
                  </div>
                </div>
                <ul className="feature-list">
                  <li><span className="check">○</span>Access to 1 rotating concept</li>
                  <li><span className="check">○</span>Bring your own tech</li>
                  <li><span className="check">○</span>Standard props</li>
                </ul>
              </div>

              {/* Card 2 - Focal Point */}
              <div className="package-card focal-card">
                <div className="package-header">
                  <h3>Studio Standard</h3>
                  <div className="price">
                    <span className="currency">$</span>150
                  </div>
                </div>
                <ul className="feature-list">
                  <li><span className="check active">●</span>Access to 2 concepts</li>
                  <li><span className="check active">●</span>In-house professional photographer</li>
                  <li><span className="check active">●</span>Advanced lighting kit access</li>
                  <li><span className="check active">●</span>2 hours</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="package-card">
                <div className="package-header">
                  <h3>The Cinematic Buyout</h3>
                  <div className="price">
                    <span className="currency">$</span>400
                  </div>
                </div>
                <ul className="feature-list">
                  <li><span className="check">○</span>Full studio exclusivity</li>
                  <li><span className="check">○</span>All concept backdrops</li>
                  <li><span className="check">○</span>Full salon access (hair, makeup, lash)</li>
                  <li><span className="check">○</span>Half-day booking</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackagesOverlay;
