import {Button} from "@material-tailwind/react";
import {FaCheck} from "react-icons/fa6";
import {PiCrownSimpleFill} from "react-icons/pi";
import {AuthContext} from "../AuthProvider";
import {useContext} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Upgrade() {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    fetch(`https://truebond-matrimony.vercel.app/biodatas?email=${user.email}`)
      .then((data) => data.json())
      .then((data) => setIsPremium(data.premium));
  }, [user]);

  return (
    <div className="flex flex-row-reverse h-[82vh] max-w-6xl mx-auto px-4 lg:px-10">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div>
          <h1 className="flex gap-1 my-6 text-2xl md:text-4xl font-bold text-purple-500">
            <PiCrownSimpleFill /> Premium Membership
          </h1>
          <div className="grid justify-between w-full grid-cols-2 gap-6">
            <div className="flex items-center gap-1">
              <FaCheck></FaCheck>{" "}
              <span className="opacity-80">Premium Badge</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck></FaCheck>{" "}
              <span className="opacity-80">More Visibility</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck></FaCheck>{" "}
              <span className="opacity-80">Contact without Request</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCheck></FaCheck>{" "}
              <span className="opacity-80">One time payment</span>
            </div>
          </div>
        </div>

        <div className="z-50 flex flex-col items-center justify-center space-y-1">
          <h1 className="font-extrabold text-7xl">$5.00</h1>

          <Button
            disabled={isPremium}
            size="sm"
            color="purple"
            onClick={() => navigate("/upgrade/checkout")}
          >
            {isPremium ? "You are a Premium Member!" : "Upgrade Membership"}
          </Button>
        </div>
      </div>
      <img
        src="/brand-loyalty-rafiki.svg"
        className="absolute left-0 opacity-10 lg:opacity-100 md:w-[55vw] lg:relative lg:w-[38vw] lg:flex"
        alt=""
      />
    </div>
  );
}
