import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import PackagesOverlay from './PackagesOverlay';
import BookingDrawer from './BookingDrawer';
import ConceptsGallery from './ConceptsGallery';
import Hero from './Hero';
import StudioOverview from './StudioOverview';
import TestimonialGrid from './TestimonialGrid';
import ContactSection from './ContactSection';

function App() {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <PackagesOverlay isOpen={isPackagesOpen} onClose={() => setIsPackagesOpen(false)} />
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      <header>
        <div className="container nav-container">
          <div className="logo">FU STUDIO</div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#concepts">Concepts</a>
            <a href="#overview">Overview</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
          <div className="nav-utils">
            <a href="#contact">Contact Us</a>
            <button onClick={() => setIsBookingOpen(true)} className="btn btn-ghost">Book a Session</button>
          </div>
        </div>
      </header>

      <main>
        {/* 2) Hero Section */}
        <Hero onBookClick={() => setIsBookingOpen(true)} />

        <StudioOverview />

        {/* 3) Starter Package Feature Section */}
        <section className="section-light py-section starter-package">
          <div className="container starter-grid">
            <div className="starter-images">
              <img src="/portrait_studio_1779123157391.png" alt="Portrait Studio" style={{marginTop: '40px'}} />
              <img src="/product_booth_1779123172675.png" alt="Product Booth" style={{marginBottom: '40px'}} />
            </div>
            <div className="starter-content">
              <div className="price-anchor">
                $25 <span>/ entry tier</span>
              </div>
              <div className="service-callouts">
                <div className="callout-item">
                  <h4>Portraits</h4>
                  <p>Clean backdrops optimized for personal brand building.</p>
                </div>
                <div className="callout-item">
                  <h4>Wedding & Event Pre-Shoots</h4>
                  <p>Capturing life's milestones in premium staging.</p>
                </div>
                <div className="callout-item">
                  <h4>Product Content Creation</h4>
                  <p>Specialized booths for commercial item showcases.</p>
                </div>
              </div>
              <button onClick={() => setIsPackagesOpen(true)} className="btn btn-primary" style={{alignSelf: 'flex-start'}}>View All Packages</button>
            </div>
          </div>
        </section>

        {/* 4) Benefits Section */}
        <section className="section-dark py-section">
          <div className="container">
            <div className="benefits-top">
              <h2 className="benefits-headline">Experience A Studio Session Out of This World</h2>
              <div className="benefits-tiles">
                <div className="benefit-tile">
                  <img src="/portrait_studio_1779123157391.png" alt="Benefit 1" />
                  <div className="benefit-label">High Quality Professional Photos</div>
                </div>
                <div className="benefit-tile">
                  <img src="/product_booth_1779123172675.png" alt="Benefit 2" />
                  <div className="benefit-label">Diverse Backdrops to Fit Any Situation</div>
                </div>
              </div>
            </div>

            <div className="benefits-columns">
              <div className="benefit-col">
                <div className="benefit-icon">●</div>
                <p>Cinematically Appealing Videos</p>
              </div>
              <div className="benefit-col">
                <div className="benefit-icon">●</div>
                <p>Content Creation Ideas & Creative Direction</p>
              </div>
              <div className="benefit-col">
                <div className="benefit-icon">●</div>
                <p>Videos Worth Competing On The Global Stage For Any Competition</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5) Space & Concept Collection Section */}
        <section className="section-light py-section" id="concepts">
          <div className="container">
            <div className="concepts-header">
              <h2>Discover the World of FU Studio</h2>
              <p>Explore our meticulously crafted spaces designed to elevate your creative vision.</p>
            </div>

            <div className="concepts-grid">
              <div className="concept-mini-cards">
                <div className="mini-card">
                  <h4>Minimalist Void</h4>
                  <p>Pure white infinity curve for distraction-free subject isolation.</p>
                </div>
                <div className="mini-card">
                  <h4>Warm Ambient Lounge</h4>
                  <p>Rich textures and soft lighting for lifestyle and editorial shoots.</p>
                </div>
                <div className="mini-card">
                  <h4>Neon Cyberspace</h4>
                  <p>Dynamic RGB tube setups for edgy, modern aesthetics.</p>
                </div>
              </div>

              <div className="featured-setup">
                <img src="/hero_studio_1779123142528.png" alt="Featured Setup" />
                <div className="focal-circle">
                  <img src="/portrait_studio_1779123157391.png" alt="Spotlight" />
                </div>
                <div className="featured-content">
                  <h3>Premium Video Creation Suite</h3>
                  <p>Complete with RED digital cinema cameras, Arri SkyPanels, and motorized sliders.</p>
                </div>
              </div>
            </div>

            <div className="config-cards">
              <div className="config-card">
                <h4>In-House Photography Services</h4>
              </div>
              <div className="config-card">
                <h4>Bring Your Own Tech</h4>
              </div>
              <div className="config-card">
                <h4>On-Site Staff Support</h4>
              </div>
            </div>

            {!showGallery && (
              <div className="text-center">
                <button onClick={() => setShowGallery(true)} className="btn btn-primary" style={{borderRadius: '50px'}}>Explore All Concepts</button>
              </div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {showGallery && <ConceptsGallery />}
        </AnimatePresence>

        {/* 6) Integrated Essentials Section */}
        <section className="section-dark py-section essentials-section">
          <div className="container">
            <div className="essentials-header">
              <h2>Studio Booking Essentials</h2>
            </div>
            
            <div className="essentials-grid">
              <div className="essential-card">
                <img src="/salon_prep_1779123187117.png" alt="Salon" />
                <div className="essential-content">
                  <div>
                    <h3>On-Site Support Salon</h3>
                    <p>Professional styling space facilitating hair, nail, lash, and make-up artistry prep directly before shooting.</p>
                  </div>
                  <div className="essential-price">Included in Premium Bookings</div>
                </div>
              </div>

              <div className="essential-card">
                <img src="/hero_studio_1779123142528.png" alt="Equipment" />
                <div className="essential-content">
                  <div>
                    <h3>Equipment & Accessory Add-ons</h3>
                    <p>Premium lighting kits, props, and dynamic background rotations available upon request.</p>
                  </div>
                  <div className="essential-price">From $15 / item</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialGrid />
      </main>

      <ContactSection />
    </>
  );
}

export default App;
