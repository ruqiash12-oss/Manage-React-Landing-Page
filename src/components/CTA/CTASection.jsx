import BackgroundImage from '../../assets/images/bg-simplify-section-desktop.svg';
import BgMobile from '../../assets/images/bg-simplify-section-mobile.svg'
import './CTASection.css';
export function CTASection() {
  return (
    <section className="cta-section">
      <img src={BackgroundImage} alt="Background" className="background-image" />
      <img className='backgorund-mobile-image' src={BgMobile} />
      <h1>Simplify how your team works today.</h1>
      <button className="btn-get-started">Get Started</button>
    </section>
  )
}