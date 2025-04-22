import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between">
      <div>
        {user ? (user.displayName ? user?.displayName : "") : user?.email}
      </div>
      <div className="nav hidden sm:flex space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {user && (user?.email || user?.providerData[0].email) ? (
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={user?.photoURL || userIcon}
            alt=""
          />
        ) : (
          <img src={userIcon} alt="" />
        )}

        <div className="hidden lg:block">
          {user ? (
            <button onClick={logOutUser} className="btn btn-neutral ">
              Log Out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral  ">
              Login
            </Link>
          )}
        </div>

        <div className="drawer drawer-mobile lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-4">
            <label htmlFor="my-drawer" className="drawer-button lg:hidden">
              <FaBars className="text-2xl cursor-pointer" />
            </label>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 space-y-2">
              <li>
                {user ? (
                  <button
                    onClick={logOutUser}
                    className="btn btn-neutral w-full"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link to="/auth/login" className="btn btn-neutral w-full">
                    Login
                  </Link>
                )}
              </li>
              <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
