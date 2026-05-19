import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingDrawer = ({ isOpen, onClose }: BookingDrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [selectedTier, setSelectedTier] = useState<string>('Standard');

  // Focus trapping and Esc key handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
      // Basic focus trap could be implemented here, simplified for this scope
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

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  } as const;

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0, 
      transition: { type: 'spring' as const, damping: 25, stiffness: 200, duration: 0.5 } 
    },
    exit: { x: '100%', transition: { duration: 0.4, ease: 'easeInOut' as const } },
  } as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="drawer-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
          >
            <div className="drawer-header">
              <h2>Book a Session</h2>
              <button className="drawer-close" onClick={onClose} aria-label="Close drawer">
                [X]
              </button>
            </div>

            <div className="drawer-content">
              <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                
                {/* Step 1 */}
                <div className="form-group">
                  <label>Select Concept / Tier</label>
                  <div className="pills-container">
                    {['Starter', 'Standard', 'Cinematic'].map(tier => (
                      <button 
                        key={tier}
                        type="button" 
                        className={`tier-pill ${selectedTier === tier ? 'active' : ''}`}
                        onClick={() => setSelectedTier(tier)}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="form-row">
                  <div className="form-group floating">
                    <input type="date" id="date" required />
                    <label htmlFor="date">Date</label>
                  </div>
                  <div className="form-group floating">
                    <input type="time" id="time" required />
                    <label htmlFor="time">Time</label>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="form-group floating">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Full Name</label>
                </div>
                
                <div className="form-group floating">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-group floating">
                  <textarea id="vision" rows={3} placeholder=" " required></textarea>
                  <label htmlFor="vision">Creative Vision</label>
                </div>
              </form>
            </div>

            <div className="drawer-footer">
              <button type="button" className="btn btn-primary full-width" onClick={onClose}>
                Confirm Request
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingDrawer;
