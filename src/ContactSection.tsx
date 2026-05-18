import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="contact-section section-dark" id="contact">
      <div className="container">
        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="contact-left">
            <motion.h3 variants={itemVariants} className="contact-h3">Let's Create.</motion.h3>
            <motion.p variants={itemVariants} className="contact-info">
              Located in a quiet, low-density area just outside the Harare CBD. (Serving Belvedere, Avondale, Milton Park, Mt Pleasant)
            </motion.p>
            <motion.p variants={itemVariants} className="contact-details">
              +263 78 281 1996  |  IG: @fanuniquestudio
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="contact-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="floating">
                <input type="text" id="contact-name" placeholder=" " required />
                <label htmlFor="contact-name">Name</label>
              </div>
              <div className="floating">
                <input type="email" id="contact-email" placeholder=" " required />
                <label htmlFor="contact-email">Email</label>
              </div>
              <div className="floating">
                <select id="contact-type" required defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="Booking">Booking</option>
                  <option value="Equipment Rental">Equipment Rental</option>
                  <option value="General">General Inquiry</option>
                </select>
                <label htmlFor="contact-type">Inquiry Type</label>
              </div>
              <button type="submit" className="btn btn-ghost contact-submit">Send Inquiry</button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
