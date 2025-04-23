import moment from "moment";

import logo3 from "../assets/logo3rd.jpg";
const Header = () => {


  return (
    <div className="flex justify-center items-center flex-col gap-2 py-2">
      <div className="logo">
        <img className="w-[7rem] rounded-full object-cover  dark:bg-white/40" src={logo3} alt="" />
      </div>
      <p className="">One World. One Feed.</p>
      <p className="font-medium">{moment().format(`dddd, MMMM Do, YYYY`)}</p>
    </div>
  );
};

export default Header;
