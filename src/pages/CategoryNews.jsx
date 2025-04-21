import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();


  return (
    <div>
      <h2 className="font-semibold mb-2">World Buzz Media</h2>
      <p className="text-sm">{news.length} news found in this category</p>
      <div>
            {
                news.map((singleNews) => <NewsCard news={singleNews} key={singleNews._id}></NewsCard>)
            }
      </div>
    </div>
  );
};

export default CategoryNews;
