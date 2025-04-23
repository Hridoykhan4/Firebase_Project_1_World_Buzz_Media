import Header from "../components/Header";
import heroImage from "../assets/demo-card-thumbnail.png";
import { FaGlobe, FaHeart, FaUsers } from "react-icons/fa";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <nav className="w-11/12 mx-auto">
      <Navbar></Navbar>
      </nav>

      <main className="px-4 md:px-12 lg:px-24 py-10 space-y-16">
      
        <section className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              One World. One Feed. We believe in the power of connection. Our
              mission is to bring the world closer with a seamless, vibrant
              social experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={heroImage}
              alt="About us hero"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </section>

    
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaGlobe className="text-blue-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with people from all over the world in a meaningful way.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaHeart className="text-red-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Built with Love</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our team puts their heart into creating a smooth, delightful
                experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <FaUsers className="text-green-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a strong community where everyone's voice matters.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Mission Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className=" text-lg">
            We aim to empower people to express themselves, discover new
            cultures, and build meaningful relationships — all in one place.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
