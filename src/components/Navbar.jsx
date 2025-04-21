import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between">
      <div>{user && user.name}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-neutral ">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
