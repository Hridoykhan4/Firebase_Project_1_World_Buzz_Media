import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
