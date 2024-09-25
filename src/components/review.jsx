import React, { useState } from "react";
import './review.css';

const reviews = [
  {
    id: 1,
    text: "I had a fantastic experience working with S'Chambers Overseas Education Consultant regarding my France student visa throughout my application process. Their team demonstrated exceptional professionalism, providing prompt and clear communication at every step of the way. I greatly appreciated their personalized approach, as they took the time to offer tailored advice and support.Thanks to their dedicated assistance, I highly recommend  S'Chambers Overseas Education Consultant to any student seeking reliable and effective support in their educational pursuits. Thank you for your invaluable guidance and support throughout this journey!",
    author: "Uday Krishna PK",
  },
  {
    id: 2,
    text: "I had the pleasure of working with S'chambers Overseas consultants regarding my UK student visa and to put it simply, I am very impressed with their professionalism and dedication and would highly recommend them to any students for their admission and visa matters. While there are plenty of consultancies out there trying to take students for granted and mint their money, S'chambers have stood out with their students-first approach. They have helped me at every step of the way and I really grateful. Special thanks to Sabitha ma'am and Princy for your valuable insights and support.",
    author: "Anagha Santhosh",
  },
  {
    id: 3,
    text: "I had a wonderful experience working with Schambers for my masters in UK. Truly happy with their genuine, professional and diligent efforts. Have consistently been supportive and helpful especially Ms sabitha, special thanks to her for always helping me out. I would whole heartedly recommend them to any students who wish to go abroad.",
    author: "Ayisha Hamza",
  },
];

function Review() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview(
      (prevReview) => (prevReview - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="testimonial-container">
      <div className="quote">
        <span>“</span>
        <p>{reviews[currentReview].text}</p>
        <h4>{reviews[currentReview].author}</h4>
      </div>

      <div className="nav-arrows">
        <button onClick={prevReview}>&larr;</button>
        <span>{`${currentReview + 1} / ${reviews.length}`}</span>
        <button onClick={nextReview}>&rarr;</button>
      </div>
    </div>
  );
}

export default Review;
