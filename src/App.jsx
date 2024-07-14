import { useState, useEffect, useRef } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from 'typed.js';
import me from './assets/img/me1.jpg';
import me2 from './assets/img/Adobe.jpg';
import me3 from './assets/img/family.jpg';
import unand from './assets/img/unand.png';
import kaito from './assets/img/kaito.png';
import cv from './assets/cv/cv.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ParallaxMousemove, ParallaxMousemoveLayer } from 'react-parallax-mousemove';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const socialIcons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
};

function App() {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleSendClick = () => {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Coming Soon';
  };
  const downloadCV = () => {
    const link = document.createElement('a');
    // Pastikan {cv} adalah URL yang benar atau path yang valid ke file PDF
    link.href = cv;
    link.setAttribute('download', 'CV_Boy_Cenly_Dwi_Sandes_Pasella.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 10,
      distance: '1000px',
      origin: 'left',
      opacity: 0,
      duration: 500,
      reset: true,
      viewFactor: 0.2, // Increased the viewFactor
    })
  }, [])

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["ボイ センリー", "", "Boy Cenly"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* header */}
      <header className="fixed w-full top-0 z-50 bg-white text-dark shadow-md ">
        <nav className="p-4  ">
          <div className="container mx-auto flex justify-between items-center">
          <a href="#home" className="text-1xl font-bold">ボイ<span className="text-red-500">センリー</span></a>
            <div className="hidden lg:flex space-x-4">
              <a href="#home" className="hover:text-gray-300 font-semibold">Home</a>
              <a href="#about" className="hover:text-gray-300 font-semibold">About</a>
              {/* <a href="#services" className="hover:text-gray-300">Services</a> */}
              <a href="#portfolio" className="hover:text-gray-300 font-semibold">Portfolio</a>
              <a href="#contact" className="hover:text-gray-300 font-semibold">Contact</a>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
            {/* <img src={me} alt="Profile" className="rounded" width={50}/> */}
            
            <button onClick={toggleDarkMode} className="cursor-pointer">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="lg:hidden ">
              <button onClick={toggleMenu} className="text-red-500 focus:outline-none ">
                <FontAwesomeIcon
                  icon={isOpen ? faTimes : faBars}
                  className="w-6 h-6 transition-transform duration-200 ease-in-out transform"
                  style={{ transform: isOpen ? 'rotate(360deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>
          </div>

          <ul className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2 text-left `}>
            <li className='p-2 border-s border-e p-2' ><a href="#home" className="block text-dark hover:text-gray-300 hover:pl-5 transition-all duration-300 font-semibold ">Home</a></li>
            
            <li className='p-2 border-s border-e p-2'><a href="#about" className="block text-dark hover:text-gray-300 hover:pl-5 transition-all duration-300 font-semibold">About</a></li>
            {/* <li><a href="#services" className="block text-white hover:text-gray-300">Services</a></li> */}
            <li className='p-2 border-s border-e p-2'><a href="#portfolio" className="block text-dark hover:text-gray-300 hover:pl-5 transition-all duration-300 font-semibold">Portfolio</a></li>
            <li className='p-2 border-s border-e p-2'><a href="#contact" className="block text-dark hover:text-gray-300 hover:pl-5 transition-all duration-300 font-semibold">Contact</a></li>
            <button onClick={toggleDarkMode} className="cursor-pointer">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
          </ul>

        </nav>
      </header>
      {/* Content */}
      
      <section className="container mx-auto pt-10 lg:pt-20 h-screen reveal p-5" id='home'>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className={`flip-container ${isFlipped ? 'flipped' : ''}`} onClick={handleImageClick}>
            <div className="flipper">
              <img src={me} alt="Profile" className="rounded mb-4 front" width={150}/>
              <div className="back border border-black rounded p-5">
              <h2 className="text-1xl" style={{ fontFamily: 'Indie Flower, cursive' }}> <span className='text'>ありがとう</span> <br /> みなさん❤️</h2>

              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold mt-2 mb-2 z-10">Hello, I'm <br /> <span className='typed-logo' ref={typedElement}></span></h1>
          {/* <p className="text-lg mb-2">Front-end & Back-end <br /> Developer</p> */}
          <a href='#about' className="bg-red-500 text-white px-6 py-2 rounded-full mt-2" >Hire Me</a>
          {/* <button>❤️</button> */}

        </div>
      </section>

      <section className="container mx-auto pt-20 lg:pt-40 p-5 h-screen reveal  " id='about'>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between  ">
          <div className="lg:w-1/3 flex  justify-center items-center hidden lg:flex">
            <img src={me2} alt="Profile" className="rounded" width={300} />
          </div>
          <div className="lg:w-2/3 lg:pl-10">
            {/* <h2 className="text-red-500 text-xl font-bold mb-2">Discover</h2> */}
            <h1 className="text-4xl font-bold mb-4 text-red-500 text-center lg:text-left">About Me</h1>
            <p className="text-lg mb-4 text-center lg:text-left">Passionate Web Developer with a love for creating beautiful and functional websites.</p>
            {/* <p className="text-lg mb-4">My name is Boy Cenly Dwi Sandes Pasella. I'm a Web Developer based in Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi, and I'm very passionate and dedicated to my work. With 2 month experience as a professional Web Developer, I have acquired the skills necessary to build great and premium websites.</p> */}
            <div className=" p-4 rounded-lg mb-4 border">
              <p className="mb-2"><strong>Name:</strong> Boy Cenly Dwi Sandes Pasella</p>
              <p className="mb-2"><strong>Age:</strong> 22</p>
              <p className="mb-2"><strong>Phone:</strong> +62 822 1177 9935</p>
              <p className="mb-2"><strong>Address:</strong> Kecamatan Kayu Aro, Kabupaten Kerinci, Jambi</p>
              <p className="mb-2"><strong>Current Position:</strong> Programmer at Lembaga Penelitian dan Pengabdian Masyarakat Universitas Andalas</p>
              <p className="mb-2"><strong>Social:</strong> 
              <a href="https://www.instagram.com/_sino.ig/" className="text-pink-500 mx-2 text-2xl" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.instagram} />
          </a>
          <a href="https://web.facebook.com/chichik.khenz" className="text-blue-600 mx-2 text-2xl " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.facebook} />
          </a>
          <a href="https://wa.me/6282211779935" className="text-green-500 mx-2 text-2xl" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.whatsapp} />
          </a>
              </p>

            </div>
            <button onClick={downloadCV} className="bg-red-500 text-white px-6 py-2 rounded-full">Download PDF</button>


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

<section className="container mx-auto pt-40 lg:pt-40 p-5 h-screen reveal" id='portfolio'>
        <h1 className="text-4xl text-center font-bold mb-4 text-red-500">Portfolio</h1>
        <p className="text-center mb-8">Here are some projects that I have worked on.</p>
        <Slider {...settings}>
        <div className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="bg-white p-4">
            <h1 className='text-center h-24'>Logo Not Available</h1>
            </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-red-500">PT. Bungo Padi Mandiri</h2>
                <p className="text-gray-600">Designer & Developer</p>
                <p className="text-gray-600 mt-2 text-sm lg:text-md">I developed the product cart and e-commerce processes using PHP and MySQL, ensuring a seamless shopping experience for users.</p>
                <div className="flex justify-center mt-4">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="bg-white p-4">

                <img src={unand} alt="Project 3" className=" w-20 mx-auto "/>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-red-500">LPPM Universitas Andalas</h2>
                <p className="text-gray-600">Backend Developer</p>
                <p className="text-gray-600 mt-2 text-sm lg:text-md">I am currently working on the backend development for the SIPPMI website at Lembaga Penelitian dan Pengabdian Masyarakat Universitas Andalas, focusing on enhancing the system's functionality and performance.</p>
                <div className="flex justify-center mt-4">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="bg-white p-4">

                <img src={kaito} alt="Project 3" className=" w-24 mx-auto "/>
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-red-500">Kaito Komputer & CCTV</h2>
                <p className="text-gray-600">Designer & Developer</p>
                <p className="text-gray-600 mt-2 text-sm lg:text-md">I developed a website using PHP and MySQL for laptop recommendations using the SMART method, ensuring users get the right recommendations based on their needs.</p>
                <div className="flex justify-center mt-4">
                </div>
              </div>
            </div>
          </div>

 
          {/* Add more cards as needed */}
        </Slider>
      </section>
      <section className="container mx-auto text-center pt-40 lg:pt-40 p-5 h-screen reveal" id='contact'>
      <h1 className="text-4xl font-bold mb-4 text-red-500">Contact</h1>
        <p className="text-center mb-8">Feel free to reach out to me for any inquiries or collaborations.</p>

        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
          </div>
          <div className="mb-4">
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Your message" rows="5"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSendClick}>
              Send
            </button>
           
          </div>
          <span id="message" className="text-red-500"></span>
        </form>
      </section>


      <footer className="text-black py-6 reveal">
      <div className="container mx-auto text-center">
      <p className='text-red-500'>&copy; 2024 ボーイ ケンリ</p>
      
     
        <div className="mt-4">
          <a href="https://www.instagram.com/_sino.ig/" className="text-pink-500 p-2 text-2xl border rounded" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.instagram} />
          </a>
          <a href="https://web.facebook.com/chichik.khenz" className="text-blue-600 p-2 m-2 text-2xl border rounded" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.facebook} />
          </a>
          <a href="https://wa.me/6282211779935" className="text-green-500  text-2xl p-2 border rounded" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={socialIcons.whatsapp} />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;