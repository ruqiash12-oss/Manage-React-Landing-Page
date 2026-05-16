import { TestimonialCard } from "./TestimonialCard";
import BackgoundImage from '../../assets/images/bg-tablet-pattern.svg';
import './Testimonials.css';
export function Testimonials(){
  return (
    <section className="testimonials-section">
      <h1>What they’ve said</h1>
      <img className="background-image" src={BackgoundImage} alt="Background Pattern" />
      <TestimonialCard />
      <button className="btn-get-started">Get Started</button>
    </section>
  )
}