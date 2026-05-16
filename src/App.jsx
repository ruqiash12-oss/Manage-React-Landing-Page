import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/HeroSection';  
import { Features } from './components/features/Features';
import { Footer } from './components/footer/Footer';
import './App.css'
import { Testimonials } from './components/testimonial/Testimonials';
import { CTASection } from './components/CTA/CTASection';
function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
