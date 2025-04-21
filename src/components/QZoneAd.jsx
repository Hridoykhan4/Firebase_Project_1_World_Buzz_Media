import swimKid from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playGround from "../assets/playground.png";
import ads from "../assets/bg.png";
const QZoneAd = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] p-4 rounded">
        <h2 className="font-semibold text-lg">Q-Zone</h2>
        <div className="flex flex-col gap-1">
          <img src={swimKid} alt="" />
          <img src={classImage} alt="" />
          <img src={playGround} alt="" />
        </div>
      </div>

      {/* Advertise Poster */}
      <img src={ads} alt="" />
    </div>
  );
};

export default QZoneAd;
