import AnishaProfile from "../../assets/images/avatar-anisha.png";
import AliProfile from "../../assets/images/avatar-ali.png";
import RichardProfile from "../../assets/images/avatar-richard.png";
import ShanaiProfile from "../../assets/images/avatar-shanai.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialCard.css';

export function TestimonialCard() {
  const testimonials = [
    {
      id: 1,
      name: "Anisha Li",
      feedback: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
      image: AnishaProfile
    },
    {
      id: 2,
      name: "Ali Bravo",
      feedback: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
      image: AliProfile
    },
    {
      id: 3,
      name: "Richard Watts",
      feedback: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
      image: RichardProfile
    },
    {
      id: 4,
      name: "Shanai Gough",
      feedback: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
      image: ShanaiProfile
    }
  ];




  return (
    <section className="testimonials">
      <Swiper
        
        modules={[Pagination]}
        
        spaceBetween={24}
        slidesPerView={1} 
        pagination={{ clickable: true }} 
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <img src={item.image} alt={`${item.name}'s profile`} />
              <h3>{item.name}</h3>
              <p>"{item.feedback}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

