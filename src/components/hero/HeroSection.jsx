import './HeroSection.css';
import HeroImage from '../../assets/images/illustration-intro.svg';
import BgTabletPattern from '../../assets/images/bg-tablet-pattern.svg';

export function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className="btn-get-started">Get Started</button>
      </div>
      <div className="hero-image-container">
        <img className='background-image1' src={BgTabletPattern} alt="Background Pattern" />
        <img className='background-image-mobile' src={BgTabletPattern} alt="Background Pattern" />
        <img className='hero-image' src={HeroImage} alt="Hero Image" />
      </div>
    </section>
  );
}