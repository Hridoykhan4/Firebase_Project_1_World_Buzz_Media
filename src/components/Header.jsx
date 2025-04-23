import moment from "moment";

import logo3 from "../assets/logo3rd.jpg";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interValId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interValId);
  }, []);

  /* dddd, MMMM Do, YYYY */
  /* DD MM YYYY hh:mm:ss */
  return (
    <div className="flex justify-center items-center flex-col gap-2 py-2">
      <div className="logo">
        <img
          className="w-[7rem] rounded-full object-cover  dark:bg-white/40"
          src={logo3}
          alt=""
        />
      </div>
      <p className="">One World. One Feed.</p>
      <p className="font-medium">
        {moment(currentTime).format(`
           dddd,
           MMMM
           Do,
           YYYY 
           hh:mm:ss
           A`)}
      </p>
    </div>
  );
};

export default Header;
