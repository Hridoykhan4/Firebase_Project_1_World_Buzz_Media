import logo from "../assets/logo2nd.webp";
const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
        <img src={logo} className="rounded-full h-12 w-12" />
      </div>
    </div>
  );
};

export default Loading;
