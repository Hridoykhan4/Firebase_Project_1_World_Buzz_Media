import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LatestNewsMarquee from "../components/LatestNewsMarquee";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNav from "../components/layout-component/RightNav";
import Navbar from "../components/Navbar";
import logo from '../assets/logo3rd.jpg'
import Footer from "../components/Footer";
const HomeLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNewsMarquee></LatestNewsMarquee>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-5">
        <aside className="lg:col-span-3 md:col-span-4">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="lg:col-span-6 md:col-span-4">
          {navigation.state === "loading" ? (
            <div className="relative flex justify-center items-center">
              <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
              <img
                src={logo}
                className="rounded-full h-12 w-12"
              />
            </div>
          ) : (
            <Outlet></Outlet>
          )}
        </section>
        <aside className="lg:col-span-3 md:col-span-4">
          <RightNav />
        </aside>
      </main>
      <>
        <Footer></Footer>
      </>
    </div>
  );
};

export default HomeLayout;
