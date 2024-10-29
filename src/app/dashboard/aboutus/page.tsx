"use client";
import React from 'react';
import Header from '@/app/components/dashboard/navigation';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our application! We are dedicated to providing a seamless experience for our users to manage their products and services effectively. Our platform is designed to empower users to find and engage with products easily.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to simplify the way users interact with various products and services. We aim to connect customers with the best providers in the industry, ensuring a smooth and satisfactory experience for all parties involved.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Customer Satisfaction: We prioritize our  needs and strive to exceed their expectations.</li>
          <li>Integrity: We believe in transparency and honesty in all our interactions.</li>
          <li>Innovation: We constantly seek to improve and innovate our platform to provide the best user experience.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Get In Touch</h2>
        <p className="mb-4">
          If you have any questions or feedback, feel free to reach out to us through our contact form or social media channels. We would love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
