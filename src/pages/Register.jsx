import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Contexts/AuthContext";

const Register = () => {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState({});

  const nav = useNavigate()

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    if (name.length < 5) {
      return setError({ ...error, name: "must be more than 5 letters" });
    }

    const email = form.get("email");
    const password = form.get("password");
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            console.log('Profile Updated');
            nav(`/`)
          })
          .catch((err) => {
            console.log(err.message)
          })
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className=" flex justify-center items-center px-4 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              id="name"
              ref={nameRef}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {error.name && (
            <label className="block label text-sm font-semibold text-red-600 mb-1">
              {error.name}
            </label>
          )}

          <div>
            <label htmlFor="photo" className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
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

          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="checkbox checkbox-sm"
            />
            <label htmlFor="terms" className="text-sm">
              Accept Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full btn bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-2">
          Already Have An Account?{" "}
          <Link
            to="/auth/login"
            className="text-red-500 link font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
