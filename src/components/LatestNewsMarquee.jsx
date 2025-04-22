import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNewsMarquee = () => {
  const [loadNews, setLoadNews] = useState([]);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
      .then((res) => res.json())
      .then((data) => setLoadNews(data.data));
  }, []);

  return (
    <div
      style={{ padding: "0 1rem" }}
      className="flex gap-3 bg-base-200 my-2 items-center"
    >
      <p className="bg-[#D72050] text-white px-3 rounded py-1 text-sm font-semibold">
        Latest
      </p>
      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        {loadNews.map((headline, index) => (
          <Link
            to={`/news/${headline._id}`}
            key={index}
            className="mx-4 text-sm text-gray-800 hover:text-[#D72050] font-medium"
          >
            {headline.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNewsMarquee;
