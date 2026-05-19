import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { asset } from './utils';

const concepts = [
  { id: 1, title: 'The Minimalist Void', src: asset('/concepts/concept_01_void_1779125188313.png'), aspect: 'portrait' },
  { id: 2, title: 'Warm Ambient Lounge', src: asset('/concepts/concept_02_lounge_1779125204908.png'), aspect: 'landscape' },
  { id: 3, title: 'Neon Cyber-Grid', src: asset('/concepts/concept_03_cyber_1779125222410.png'), aspect: 'portrait' },
  { id: 4, title: 'Y2K Pop', src: asset('/concepts/concept_04_y2k_1779125239918.png'), aspect: 'landscape' },
  { id: 5, title: 'The Executive Slate', src: asset('/concepts/concept_05_slate_1779125258072.png'), aspect: 'portrait' },
  { id: 6, title: 'Botanical Oasis', src: asset('/concepts/concept_06_oasis_1779125281438.png'), aspect: 'landscape' },
  { id: 7, title: 'Urban Raw', src: asset('/concepts/concept_07_urban_1779125296923.png'), aspect: 'portrait' },
  { id: 8, title: 'Abstract Geometry', src: asset('/concepts/concept_08_geometry_1779125313379.png'), aspect: 'landscape' },
  { id: 9, title: 'Fine Art Canvas', src: asset('/concepts/concept_09_canvas_1779125330827.png'), aspect: 'portrait' },
  { id: 10, title: 'The Product Podium', src: asset('/concepts/concept_10_podium_1779125348601.png'), aspect: 'landscape' }
];

const ParallaxImage = ({ concept }: { concept: typeof concepts[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <motion.div 
      ref={ref}
      className={`gallery-item ${concept.aspect}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="gallery-img-wrapper">
        <motion.img 
          src={concept.src} 
          alt={concept.title} 
          style={{ y }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
      <div className="gallery-caption">
        <h4>{concept.title}</h4>
      </div>
    </motion.div>
  );
};

const ConceptsGallery = () => {
  return (
    <motion.section 
      className="concepts-gallery-section" 
      id="gallery"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container">
        <div className="gallery-header text-center">
          <h2>The Studio Collections</h2>
          <p>Explore the full spectrum of our meticulously designed creative environments.</p>
        </div>
        <div className="masonry-grid">
          {/* Column 1 */}
          <div className="masonry-col">
            {concepts.filter((_, i) => i % 3 === 0).map(c => <ParallaxImage key={c.id} concept={c} />)}
          </div>
          {/* Column 2 - Shifted slightly for asymmetrical feel */}
          <div className="masonry-col shift-down-large">
            {concepts.filter((_, i) => i % 3 === 1).map(c => <ParallaxImage key={c.id} concept={c} />)}
          </div>
          {/* Column 3 - Shifted differently */}
          <div className="masonry-col shift-down-small">
            {concepts.filter((_, i) => i % 3 === 2).map(c => <ParallaxImage key={c.id} concept={c} />)}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConceptsGallery;
