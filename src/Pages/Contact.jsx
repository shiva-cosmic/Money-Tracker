import React from 'react';
import { Container, Button, Input } from '../Components/index';

function Contact() {
  const handleSubmit = () => {
    alert('Message Sent!');
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <Container className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-extralight text-center mb-6 text-blue-400">
          Contact Us
        </h1>
        <div className="flex flex-col space-y-4">
          <Input 
            type="text" 
            placeholder="Your Name" 
            className="bg-black text-white p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
          />
          <Input 
            type="email" 
            placeholder="Your Email" 
            className="bg-black text-white p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
          />
          <textarea 
            rows="4" 
            placeholder="Your Message" 
            className="bg-black text-white p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105" 
          ></textarea>
          <Button 
            name="Send Message" 
            onClick={handleSubmit} 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
          />
        </div>
      </Container>
    </div>
  );
}

export default Contact;
