import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import AuthContext from "../Contexts/AuthContext";

const SocialLogin = () => {
  const { logInGoogle, logInGithub } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    logInGoogle()
      .then((result) => {
        console.log(result.user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLoginWIthGithub = () => {
    logInGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button onClick={handleLoginWIthGithub} className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
