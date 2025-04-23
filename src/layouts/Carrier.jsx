import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { FaPenNib, FaVideo, FaEnvelope, FaClock } from "react-icons/fa";

const Carrier = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header>
        <Header />
      </header>

      <nav className="w-11/12 mx-auto">
        <Navbar />
      </nav>

      <main className="px-4 md:px-12 lg:px-24 py-10 space-y-16">
        {/* Hero Intro */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Careers at World Buzz Media</h1>
          <p className="text-lg text-gray-600">
            We’re shaping the future of news. Join our global newsroom and bring stories to life.
          </p>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">We're Hiring!</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Job Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaPenNib className="text-blue-500 text-2xl mb-3" />
              <h3 className="font-semibold text-xl mb-1">News Writer (International Desk)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Strong writing, global awareness, and tight deadlines are your playground.
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <FaClock />
                Full-time · Remote
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaVideo className="text-blue-500 text-2xl mb-3" />
              <h3 className="font-semibold text-xl mb-1">Video Editor (Social Stories)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Quick cuts, bold captions, and storytelling for reels, shorts, and more.
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <FaClock />
                Full-time · On-site
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <FaPenNib className="text-blue-500 text-2xl mb-3" />
              <h3 className="font-semibold text-xl mb-1">Content Curator (Buzz Trends)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Research and highlight what’s buzzing — from TikTok trends to world news.
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <FaClock />
                Part-time · Remote
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Ready to Make Headlines?</h2>
          <p className="text-gray-600 mb-4">
            Send us your portfolio, past work, or anything that shows your media spark.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm">
            <FaEnvelope />
            careers@worldbuzzmedia.com
          </div>
        </section>
      </main>
    </div>
  );
};

export default Carrier;
