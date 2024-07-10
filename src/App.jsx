import { useState, useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import me from './assets/img/me1.jpg';




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
      <header className="fixed w-full top-0 z-50 bg-white shadow-md border">
        <nav className="p-4 border">
          <div className="container mx-auto flex justify-between items-center border">
            <a href="/" className="text-yellow-500 text-1xl font-bold border">Boi kenri.</a>
            <div className="lg:hidden border">
              <button onClick={toggleMenu} className="text-gray-800 focus:outline-none border">
                <svg className="w-6 h-6 transition-transform duration-200 ease-in-out transform border" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
            <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-all duration-200 ease-in-out ${isOpen ? 'animate-slide-down' : 'animate-slide-up'} border`}>
              <li className="border"><a href="#home" className="block lg:inline-block text-gray-800 hover:text-yellow-500 uppercase p-4 lg:p-0 lg:ml-4 border">Home</a></li>
              <li className="border"><a href="#about" className="block lg:inline-block text-gray-800 hover:text-yellow-500 uppercase p-4 lg:p-0 lg:ml-4 border">About</a></li>
              <li className="border"><a href="#skills" className="block lg:inline-block text-gray-800 hover:text-yellow-500 uppercase p-4 lg:p-0 lg:ml-4 border">Skills</a></li>
              <li className="border"><a href="#portfolio" className="block lg:inline-block text-gray-800 hover:text-yellow-500 uppercase p-4 lg:p-0 lg:ml-4 border">Project</a></li>
              <li className="border"><a href="#contact" className="block lg:inline-block text-gray-800 hover:text-yellow-500 uppercase p-4 lg:p-0 lg:ml-4 border">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Content */}
      <section className="container mx-auto pt-20 lg:pt-20 h-screen reveal p-5  border" id='home'>
        <div className="flex flex-col items-center justify-center h-full text-center border">
          <img src={me} alt="Profile" className="rounded-full mb-4 border" width={150}/>
          <h1 className="text-4xl font-bold mb-2 border">Hello, I'm <br /><span className='typed-logo border'></span></h1>
          <p className="text-lg mb-2 border">Web Developer</p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-full mt-4 border">Hire Me</button>
        </div>
      </section>

      <section className="container mx-auto pt-20 lg:pt-20 p-5 h-screen reveal border" id='about'>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between  border  ">
          <div className="lg:w-1/3 border flex justify-center items-center hidden lg:flex">
            <img src={me} alt="Profile" className="rounded-full mb-4 border " width={200}/>
          </div>
          <div className="lg:w-2/3 lg:pl-10 border">
            <h2 className="text-red-500 text-xl font-bold mb-2 border">Discover</h2>
            <h1 className="text-4xl font-bold mb-4 border">About Me</h1>
            <p className="text-lg mb-4 border">My name is Boy Cenly Dwi Sandes Pasella. I'm a Web Developer based in Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi, and I'm very passionate and dedicated to my work. With 2 month experience as a professional Web Developer, I have acquired the skills necessary to build great and premium websites.</p>
            <div className=" p-4 rounded-lg mb-4 border">
              <p className="mb-2 border"><strong>Name:</strong> Boy Cenly Dwi Sandes Pasella, S.Kom</p>
              <p className="mb-2 border"><strong>Age:</strong> 22</p>
              <p className="mb-2 border"><strong>Phone:</strong> +62 822 1177 9935</p>
              <p className="mb-2 border"><strong>Address:</strong> Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi</p>
              <p className="mb-2 border"><strong>Experience:</strong> 2 Month</p>
              <p className="mb-2 border"><strong>Social:</strong> 
              <a href="https://www.instagram.com/boycenly" className="text-pink-500 border" target="_blank" rel="noopener noreferrer">Instagram</a>, 
              <a href="https://www.facebook.com/boycenly" className="text-blue-600 border" target="_blank" rel="noopener noreferrer">Facebook</a>, 
              <a href="https://wa.me/6282211779935" className="text-green-500 border" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>

            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full border">Download CV</button>
          </div>
        </div>
      </section>
      {/* Add other sections as needed */}
      <section className="container mx-auto pt-20 lg:pt-20 p-5 h-screen reveal border" id='skills'>
        <h1 className="text-4xl font-bold text-center mb-4 border">Our Services</h1>
        <p className="text-center mb-8 border">Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
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
      </section>

      <section className="container mx-auto pt-20 lg:pt-20 p-5 h-screen reveal border" id='portfolio'>
        <h1 className="text-4xl font-bold mb-4 border">Portfolio</h1>
      </section>
    </>
  );
}

export default App;