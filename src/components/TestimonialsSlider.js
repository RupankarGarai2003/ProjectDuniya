import React, { useState } from "react";
import "../styles/TestimonialsSlider.css";

export default function TestimonialsSlider() {
 const testimonials = [
  { text: "Thynexis delivered exactly what we needed. Highly recommend!", client: "Rajesh Kumar" },
  { text: "Fantastic service and attention to detail. Would definitely work with them again.", client: "Anjali Mehta" },
  { text: "Incredible work! The team at Thynexis exceeded our expectations.", client: "Vikram Singh" },
  { text: "A great experience working with such professionals. Highly skilled and efficient.", client: "Priya Sharma" },
  { text: "The best team we’ve worked with, and we’ve worked with a lot! Highly recommend.", client: "Amit Patel" },
  { text: "Very professional and responsive. They took our project to the next level!", client: "Neha Verma" },
  { text: "Top-notch work and great communication throughout the process.", client: "Siddharth Joshi" },
  { text: "Creative, diligent, and focused. Couldn't ask for more.", client: "Riya Kapoor" },
  { text: "Amazing experience from start to finish. They made the process so easy.", client: "Arjun Desai" },
  { text: "We are extremely pleased with the results. Thynexis nailed it.", client: "Ishita Rao" },
  { text: "A pleasure to work with. Would definitely hire them again.", client: "Manoj Nair" },
  { text: "The team at Thynexis went above and beyond our expectations.", client: "Sneha Iyer" },
  { text: "Amazing attention to detail and perfect execution!", client: "Rakesh Choudhary" },
  { text: "Outstanding service. We felt truly valued as a client.", client: "Divya Bhatt" },
  { text: "Exceeded expectations in all areas. Highly recommend.", client: "Nikhil Sinha" },
  { text: "They brought our vision to life perfectly. Very happy with the results.", client: "Pooja Malhotra" },
  { text: "Fantastic communication and project management skills.", client: "Karan Bhatia" },
  { text: "They understood exactly what we needed and delivered perfectly.", client: "Meera Pillai" },
  { text: "Highly skilled and great to work with. I can’t recommend them enough.", client: "Rahul Das" },
  { text: "Thynexis is a game-changer. The results speak for themselves.", client: "Tanvi Reddy" }
];


  const VISIBLE = 4;
  const MAX_INDEX = testimonials.length - VISIBLE;
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? MAX_INDEX : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === MAX_INDEX ? 0 : prev + 1));
  };

  return (
    <div className="testimonials-slider">
      <div className="slider-header">
        <button className="slider-btn" onClick={prevSlide}>←</button>
        <h2>What Our Clients Say</h2>
        <button className="slider-btn" onClick={nextSlide}>→</button>
      </div>

      <div className="slider-window">
        <div
          className="testimonials-list"
          style={{ transform: `translateX(-${currentSlide * (100 / VISIBLE)}%)` }}
        >
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <p>{t.text}</p>
              <strong>{t.client}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
