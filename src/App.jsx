import { useState, useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import me from './assets/img/me1.jpg';
import { ParallaxMousemove, ParallaxMousemoveLayer } from 'react-parallax-mousemove';




function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 100,
      // distance: '50px',
      // origin: 'left',
      opacity: 0.5,
      duration: 1000,
      // reset: true,
      viewFactor: 0.5,
    });

    const options = {
      strings: ['ボイ ケンリ.', 'Boi Kenri'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('.typed-logo', options);

    return () => {
      typed.destroy();
      
    };

  }, []);
  

  return (
    <>
      {/* header */}
      <header className="fixed w-full top-0 z-50 bg-white text-dark shadow-md">
        <nav className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">Boi <span className="text-red-500">Kenri.</span></a>
            <div className="hidden lg:flex space-x-4">
              <a href="#home" className="hover:text-gray-300">Home</a>
              <a href="#about" className="hover:text-gray-300">About</a>
              {/* <a href="#services" className="hover:text-gray-300">Services</a> */}
              <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
              <a href="#contact" className="hover:text-gray-300">Contact</a>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1l2 9h12l2-9h1M5 10V7a5 5 0 0110 0v3M8 10V7a2 2 0 014 0v3"></path>
              </svg> */}
              <span></span>
            </div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-red-500 focus:outline-none">
                <svg className="w-6 h-6 transition-transform duration-200 ease-in-out transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <ul className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
            <li><a href="#home" className="block text-dark hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="block text-dark hover:text-gray-300">About</a></li>
            {/* <li><a href="#services" className="block text-white hover:text-gray-300">Services</a></li> */}
            <li><a href="#portfolio" className="block text-dark hover:text-gray-300">Portfolio</a></li>
            <li><a href="#contact" className="block text-dark hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* Content */}
      
      <section className="container mx-auto pt-20 lg:pt-20 h-screen reveal p-5" id='home'>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <img src={me} alt="Profile" className="rounded mb-4" width={150}/>
          <h1 className="text-4xl font-bold mb-2">Hello, I'm <br /><span className='typed-logo'></span></h1>
          <p className="text-lg mb-2">Web Developer</p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full mt-4">Hire Me</button>
        </div>
      </section>

      <section className="container mx-auto pt-40 lg:pt-40 p-5 h-screen reveal " id='about'>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between ">
          <div className="lg:w-1/3 flex  justify-center items-center hidden lg:flex">
            <img src={me} alt="Profile" className="rounded mt-20" width={200}/>
          </div>
          <div className="lg:w-2/3 lg:pl-10">
            {/* <h2 className="text-red-500 text-xl font-bold mb-2">Discover</h2> */}
            <h1 className="text-4xl font-bold mb-4 text-red-500 text-center lg:text-left">About Me</h1>
            {/* <p className="text-lg mb-4">My name is Boy Cenly Dwi Sandes Pasella. I'm a Web Developer based in Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi, and I'm very passionate and dedicated to my work. With 2 month experience as a professional Web Developer, I have acquired the skills necessary to build great and premium websites.</p> */}
            <div className=" p-4 rounded-lg mb-4 border">
              <p className="mb-2"><strong>Name:</strong> Boy Cenly Dwi Sandes Pasella</p>
              <p className="mb-2"><strong>Age:</strong> 22</p>
              <p className="mb-2"><strong>Phone:</strong> +62 822 1177 9935</p>
              <p className="mb-2"><strong>Address:</strong> Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi</p>
              <p className="mb-2"><strong>Experience:</strong> 2 Month</p>
              <p className="mb-2"><strong>Social:</strong> 
              <a href="https://www.instagram.com/boycenly" className="text-pink-500" target="_blank" rel="noopener noreferrer">Instagram</a>, 
              <a href="https://www.facebook.com/boycenly" className="text-blue-600" target="_blank" rel="noopener noreferrer">Facebook</a>, 
              <a href="https://wa.me/6282211779935" className="text-green-500" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>

            </div>
            <button className="bg-red-500 text-white px-6 py-2 centerounded-full">Download CV</button>
          </div>
        </div>
      </section>
      {/* Add other sections as needed */}
      {/* <section className="container mx-auto pt-20 lg:pt-40 p-5 h-screen reveal" id='services'>
        <h1 className="text-4xl font-bold text-center mb-4 text-red-500">Our Services</h1>
        <p className="text-center mb-8">Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">BRANDING IDENTITY</h2>
            <p>Our support team will get assistance from AI-powered.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">BRANDING CONSULT</h2>
            <p>Our support team will get assistance from AI-powered.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">WEB DEVELOPMENT</h2>
            <p>Our support team will get assistance from AI-powered.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2">MARKET ANALYSIS</h2>
            <p>Our support team will get assistance from AI-powered.</p>
          </div>
        </div>
      </section> */}

      <section className="container mx-auto pt-20 lg:pt-40 p-5 h-screen reveal" id='portfolio'>
        <h1 className="text-4xl text-center font-bold mb-4 text-red-500">Portfolio</h1>
        <p className="text-center">Coming Soon</p>
      </section>
      <section className="container mx-auto text-center pt-20 lg:pt-40 p-5 h-screen reveal" id='contact'>
        <h1 className="text-4xl font-bold mb-4 text-red-500">Contact</h1>
        <p className="text-center">Coming Soon</p>
      </section>


    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 ボイ ケンリ</p>
        <div className="mt-4">
          <a href="https://www.instagram.com/yourcompany" className="text-pink-500 mx-2" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.facebook.com/yourcompany" className="text-blue-600 mx-2" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://wa.me/yourcompany" className="text-green-500 mx-2" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;