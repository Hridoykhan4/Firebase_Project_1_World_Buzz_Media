import FindUs from "../FindUs";
import QZoneAd from "../QZoneAd";
import SocialLogin from "../SocialLogin";

const RightNav = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>       
            <FindUs></FindUs> 
            <QZoneAd></QZoneAd>    
        </div>
    );
};

export default RightNav;