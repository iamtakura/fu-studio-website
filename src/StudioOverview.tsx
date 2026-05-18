import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StudioOverview = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section className="overview-section section-dark" id="overview">
      <div className="container overview-grid">
        <div className="overview-left">
          <h4 className="overview-subtitle">THE STUDIO</h4>
          <h2 className="overview-h2">Present Your Moments in the Best Light.</h2>
          <p className="overview-body">
            While nearly everyone has a smartphone camera, true milestones require professional framing. FU Studio is a multi-concept space designed for high-end photoshoots, cinematic video production, and bespoke content creation. Bring your personal photographer, or rely on our expert in-house team. With backdrops rotating every three months, your creative canvas is never static.
          </p>
        </div>
        <div className="overview-right">
          <div className="overview-image-wrapper" ref={ref}>
            <motion.img 
              src="/portrait_studio_1779123157391.png" 
              alt="Active Photoshoot" 
              className="overview-image"
              style={{ y }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioOverview;
