import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    total_view,
    rating,
    published_date,
  } = {
    ...(news || {}),
    published_date: news?.author?.published_date || "Not Updated",
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold">{news.author.name}</h3>
            <p className="text-xs text-gray-500">
              {published_date?.slice(0, 10)}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold px-4 pb-2">{title}</h2>

      {/* Thumbnail */}
      <img src={image_url} alt={title} className="w-full  object-cover" />

      {/* Details */}
      <div className="p-4 pt-2 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/news/${news._id}`}
              className="text-[#D72050] font-medium ml-1"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-2 border-t">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 text-sm">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.floor(rating.number)
                  ? "text-orange-500"
                  : "text-gray-300 "
              }
            ></FaStar>
          ))}

          <span className="ml-1 text-gray-700 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaEye className="text-gray-500" />
          {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
