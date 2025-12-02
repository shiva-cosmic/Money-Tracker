import React from 'react';
import { Container, Button } from '../Components/index';

function About() {
  return (
    <div className="bg-black text-white min-h-screen p-10 flex flex-col items-center justify-center">
      <Container className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extralight text-center mb-6 text-blue-400">
          About Us
        </h1>
        <p className="text-lg font-extralight text-gray-300 mb-4 leading-relaxed">
          Welcome to our Money Tracker application! Our mission is to help you manage your finances effortlessly by providing a user-friendly interface to track your expenses, analyze your spending habits, and achieve your financial goals.
        </p>
        <p className="text-lg font-extralight text-gray-300 mb-8 leading-relaxed">
          This application is designed with the latest technologies and a focus on a seamless user experience, combining powerful functionality with a sleek, modern design.
        </p>
      </Container>
    </div>
  );
}

export default About;
