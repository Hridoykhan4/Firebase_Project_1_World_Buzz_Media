import logo from "../assets/logo.png";
const Header = () => {

    const date = new Date();
    const data = `${date}`
 

  return (
    <div className="flex justify-center items-center flex-col gap-2 py-2">
      <div className="logo">
        <img className="w-[300px] dark:bg-white/40" src={logo} alt="" />
      </div>
      <p className="">One World. One Feed.</p>
      <p>{data}</p>
    </div>
  );
};

export default Header;
