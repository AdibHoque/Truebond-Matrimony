import {Card, Typography, Input, Button} from "@material-tailwind/react";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../AuthProvider";
import MySwal from "sweetalert2";
export default function ViewBiodata() {
  const {user} = useContext(AuthContext);
  const [userBiodata, setUserBiodata] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/biodatas?email=${user.email}`)
      .then((data) => data.json())
      .then((data) => setUserBiodata(data));
  }, [user.email]);

  function handlePremium() {
    MySwal.fire({
      title: "Request Premium?",
      text: "Request to make Biodata Premium?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Request",
    }).then((result) => {
      if (result.isConfirmed) {
        const obj = {
          biodataId: userBiodata.biodataId,
          email: userBiodata.contactEmail,
          name: userBiodata.name,
        };
        fetch("http://localhost:5000/premiumrequests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then(() => {
          MySwal.fire({
            title: "Successfully Requested!",
            text: "The Admin would approve or reject your request soon.",
            icon: "success",
            timer: 4000,
          });
        });
      }
    });
  }

  return (
    <div className="p-10 w-full">
      <div className="w-full">
        <Typography variant="h4" color="blue-gray">
          View BioData
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Here are your biodata details.
        </Typography>
        <form className="w-full mt-8 mb-2">
          <div className="flex flex-wrap lg:flex-nowrap flex-col gap-6 mb-1">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Biodata Type
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="gender"
                  readOnly
                  value={userBiodata.gender || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Your Name
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="name"
                  readOnly
                  value={userBiodata.name || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Image URL
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="url"
                  name="image"
                  readOnly
                  value={userBiodata.profileImage || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Date of Birth
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="date"
                  name="dob"
                  readOnly
                  value={userBiodata.dob || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Age
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="number"
                  name="age"
                  readOnly
                  value={userBiodata.age || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Height
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="height"
                  readOnly
                  value={userBiodata.height || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Weight
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="weight"
                  readOnly
                  value={userBiodata.weight || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Occupation
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="occupation"
                  readOnly
                  value={userBiodata.occupation || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Race
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="race"
                  readOnly
                  value={userBiodata.race || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Father&apos;s Name
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="fathersName"
                  readOnly
                  value={userBiodata.fathersName || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Mother&apos;s Name
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="mothersName"
                  readOnly
                  value={userBiodata.mothersName || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Permanent Division
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="permanentDivision"
                  readOnly
                  value={userBiodata.permanentDivision || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Present Division
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="presentDivision"
                  readOnly
                  value={userBiodata.presentDivision || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Expected Partner Height
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="partnerHeight"
                  readOnly
                  value={userBiodata.expectedPartnerHeight || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Expected Partner Weight
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="partnerWeight"
                  readOnly
                  value={userBiodata.expectedPartnerWeight || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Expected Partner Age
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="number"
                  name="partnerAge"
                  readOnly
                  value={userBiodata.expectedPartnerAge || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Email
                </Typography>
                <Input
                  disabled
                  readOnly
                  size="lg"
                  type="text"
                  name="email"
                  value={user.email}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
              <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray">
                  Mobile Number
                </Typography>
                <Input
                  disabled
                  size="lg"
                  type="text"
                  name="mobileNumber"
                  readOnly
                  value={userBiodata.mobileNumber || ""}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                />
              </div>
            </div>
          </div>
        </form>
        {userBiodata.premium ? (
          <Button className="mt-4" color="purple" fullWidth disabled>
            Request to Make Biodata Premium
          </Button>
        ) : !userBiodata.biodataId ? (
          <Button className="mt-4" color="purple" fullWidth disabled>
            Request to Make Biodata Premium
          </Button>
        ) : (
          <Button
            onClick={handlePremium}
            className="mt-4"
            color="purple"
            fullWidth
          >
            Request to Make Biodata Premium
          </Button>
        )}
      </div>
    </div>
  );
}
