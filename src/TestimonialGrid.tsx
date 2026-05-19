import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "The convenience of the in-house salon saved our entire morning. Having the makeup artists right there before stepping onto the set made the brand shoot completely stress-free.",
    author: "Sarah M.",
    session: "Brand Portrait Session"
  },
  {
    id: 2,
    quote: "I love that their setups rotate quarterly. I've shot three different campaigns here this year, and each time the backdrops feel completely fresh and meticulously designed.",
    author: "James K.",
    session: "Creative Director"
  },
  {
    id: 3,
    quote: "The lighting gear available is truly cinematic. We didn't even need to bring our heavy equipment; the Arri SkyPanels and softboxes were already rigged and ready to go.",
    author: "Elena R.",
    session: "Video Producer"
  }
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#B9FF3D" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const TestimonialGrid = () => {
  return (
    <section className="testimonials-section section-dark" id="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div 
              key={t.id} 
              className={`testimonial-card ${index === 1 ? 'staggered-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="stars-container">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                — {t.author}, <span className="testimonial-session">{t.session}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
