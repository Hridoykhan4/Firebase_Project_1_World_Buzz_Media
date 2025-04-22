import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const nav = useNavigate();

  const { state } = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        nav(state ? state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="min-h-[calc(100vh-57px)] flex justify-center items-center px-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          {error.login && <label className="label text-red-600">{error.login} !!!</label>}

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
          <Link
            to="/auth/register"
            className="text-red-500 link font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
