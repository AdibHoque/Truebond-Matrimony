import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {PiCrownSimpleFill} from "react-icons/pi";
import {useLoaderData} from "react-router-dom";

export default function BiodataDetails() {
  const data = useLoaderData();
  const {
    biodataId,
    gender,
    name,
    profileImage,
    dob,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
    premium,
  } = data;

  const isPremium = true;
  // {
  //   "biodataId": 1,
  //   "gender": "Male",
  //   "name": "Ahmed Rahman",
  //   "profileImage": "https://example.com/profile1.jpg",
  //   "dob": "1990-05-15",
  //   "height": "5'8\"",
  //   "weight": "70 kg",
  //   "age": 34,
  //   "occupation": "Engineer",
  //   "race": "Bengali",
  //   "fathersName": "Mohammed Rahman",
  //   "mothersName": "Shirin Rahman",
  //   "permanentDivision": "Dhaka",
  //   "presentDivision": "Chattagram",
  //   "expectedPartnerAge": "25-30",
  //   "expectedPartnerHeight": "5'2\"-5'6\"",
  //   "expectedPartnerWeight": "50-60 kg",
  //   "contactEmail": "ahmed.rahman@example.com",
  //   "mobileNumber": "017XXXXXXXX"
  // },

  return (
    <Card className="flex-col items-center justify-center w-full min-h-screen px-4 py-4 lg:flex-row lg:px-24">
      <CardHeader
        shadow={false}
        floated={false}
        className="px-4 m-0 mx-auto rounded-r-none lg:w-1/2 lg:h-full"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-center">
          <Typography variant="h3" color="purple">
            {name}
          </Typography>
          {premium ? (
            <Button
              variant="gradient"
              color="purple"
              size="sm"
              className="flex  items-center gap-3"
            >
              <PiCrownSimpleFill />
              PREMIUM
            </Button>
          ) : (
            ""
          )}
        </div>
        <Typography variant="lead" color="gray" className="text-xs font-normal">
          Biodata ID-{biodataId}
        </Typography>
        <Typography variant="h5" color="purple" className="mt-4">
          Complete Biodata
        </Typography>
        <div className="flex items-center justify-between">
          <Typography
            variant="lead"
            color={gender == "Male" ? "blue" : "pink"}
            className="mt-3 font-normal"
          >
            <span className="font-medium text-blue-gray-900">Gender: </span>
            {gender}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Age: </span>
            {`${age} (${dob})`}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Height: </span>
            {height}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Weight: </span>
            {weight}
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Occupation: </span>
            {occupation}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Race: </span>
            {race}{" "}
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-2">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Fathers Name:{" "}
            </span>
            {fathersName}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Mothers Name:{" "}
            </span>
            {mothersName}
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-2">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Permanent Division:{" "}
            </span>
            {permanentDivision}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Present Division:{" "}
            </span>
            {presentDivision}
          </Typography>
        </div>
        <Typography variant="h5" color="purple" className="mt-6">
          Expectations from Partner
        </Typography>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Age: </span>
            {expectedPartnerAge}
          </Typography>
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Height: </span>
            {expectedPartnerHeight}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Weight: </span>
            {expectedPartnerWeight}
          </Typography>
        </div>
        {isPremium ? (
          <div>
            <Typography variant="h5" color="purple" className="mt-6">
              Contact Information
            </Typography>
            <div className="flex flex-wrap items-center justify-between gap-x-2">
              <Typography variant="lead" className="mt-3 font-normal">
                <span className="font-medium text-blue-gray-900">
                  Mobile Number:{" "}
                </span>
                {mobileNumber}
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                <span className="font-medium text-blue-gray-900">Email: </span>
                {contactEmail}
              </Typography>
            </div>
          </div>
        ) : (
          <a href="#" className="inline-block mt-4 mr-2">
            <Button
              variant="outlined"
              color="purple"
              className="flex items-center gap-2"
            >
              Request Contact Information
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        )}
        <a href="#" className="inline-block mt-4">
          <Button
            variant="outlined"
            color="purple"
            className="flex items-center gap-2"
          >
            Add To Favorites
            <FaRegHeart></FaRegHeart>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
