import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import {LoginInputConfig} from './LoginConfig';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import lms1 from '../../assets/images/lms1.png';

function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2">
          <LoginComponent config={LoginInputConfig} />
        </div>
        <div className="w-1/2 bg-indigo-500 p-8 flex flex-col items-center justify-center relative">
          <Carousel showThumbs={false} width="300px">
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="lms1" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="Image 2" />
            </div>
            <div className="w-64 h-64 flex items-center justify-center">
              <img src={lms1} alt="Image 3" />
            </div>
          </Carousel>
          <div className="mt-6 text-center">
            <p className="text-white text-lg font-semibold">Welcome To New Age Learning Platform</p>
            <p className="mt-2 text-xs">Unlock Your Learning Potential With Infokalash</p>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 px-3 py-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 ml-5 mb-2 text-gray-400 text-xs font-sans">
        &copy; {new Date().getFullYear()} Infokalash, All Rights Reserved | communications@infokalash.com
      </div>
    </>
  );
}

export default Login;