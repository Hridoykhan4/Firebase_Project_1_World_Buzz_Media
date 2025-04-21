import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNewsMarquee = () => {
  const headlines = [
    "🔥 Govt announces new tech park in Dhaka",
    "⚡ Electricity prices revised: Check the new rates",
    "🛒 Daraz Mega Sale: Flat 50% off on electronics",
    "📱 New iPhone 15 hits stores with AI boost",
    "🚨 Cyclone alert in coastal areas: Stay safe!",
  ];

  return (
    <div style={{ padding: "0 1rem" }} className="flex gap-3 bg-base-200 my-2 items-center">
      <p className="bg-[#D72050] text-white px-3 rounded py-1 text-sm font-semibold">Latest</p>
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {headlines.map((headline, index) => (
          <Link
            to="/news"
            key={index}
            className="mx-4 text-sm text-gray-800 hover:text-[#D72050] font-medium"
          >
            {headline}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNewsMarquee;
