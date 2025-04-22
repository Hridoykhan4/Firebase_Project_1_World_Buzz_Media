import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  const { image_url, title, details, thumbnail_url } = news || {};

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">World Buzz Media</h2>
          <div className="card bg-base-100 shadow-md border border-gray-300">
            <figure className="px-10 pt-10">
              <img
                src={image_url || thumbnail_url}
                alt={title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body px-10">
              <h2 className="card-title">{title}</h2>
              <p className="font-normal tracking-wide leading-6">{details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn btn-secondary"
                >
                  <FaArrowLeft />
                  All News In This Category
                </Link>
              </div>
            </div>
          </div>
        </section>

        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
