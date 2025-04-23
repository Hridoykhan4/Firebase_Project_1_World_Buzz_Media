const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-lg font-bold text-gray-900">World Buzz Media</h2>
          <p className="mt-2 text-gray-500">
            One World. One Feed. <br />
            Your trusted source for real-time buzz & global news.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/carrier" className="hover:text-blue-600 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Stay Connected</h3>
          <p className="text-gray-500 mb-3">
            Join our newsletter for the latest buzz.
          </p>
          <form className="flex  items-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-600">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-600">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        &copy; {new Date().getFullYear()} World Buzz Media. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
