import React from 'react';
const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutpng" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          At DocDiv, we believe in the power of compassionate care and innovative healthcare solutions. Our mission is to bridge the gap between patients and doctors, making healthcare accessible and efficient for everyone.
        </p>
        <p>
          Our platform connects you with top-rated healthcare professionals, ensuring you receive the best possible care. From routine check-ups to specialized treatments, we're here to support your health journey.
        </p>
        <p>
          We understand that your health is your most valuable asset. That's why we are dedicated to providing a seamless and personalized experience for each patient.
        </p>
        <p>
          With DocDiv, scheduling appointments has never been easier. Our user-friendly interface allows you to book consultations at your convenience, from the comfort of your home.
        </p>
        <p>
          Our team of experts is committed to maintaining the highest standards of medical excellence. We continuously strive to improve our services to meet the evolving needs of our community.
        </p>
        <p>
          Join us at DocDiv, and take the first step towards better health today. Your well-being is our top priority, and we are honored to be your trusted healthcare partner.
        </p>
      </div>
    </div>
  );
}

export default Biography;
