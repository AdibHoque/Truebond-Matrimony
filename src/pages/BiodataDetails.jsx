import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {FaHeart, FaRegHeart} from "react-icons/fa";

export default function BiodataDetails() {
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
        <Typography variant="h3" color="purple">
          Ahmed Rahman
        </Typography>
        <Typography variant="lead" color="gray" className="text-xs font-normal">
          Biodata ID-1
        </Typography>
        <Typography variant="h5" color="purple" className="mt-4">
          Complete Biodata
        </Typography>
        <div className="flex items-center justify-between">
          <Typography
            variant="lead"
            color={"Male" == "Male" ? "blue" : "pink"}
            className="mt-3 font-normal"
          >
            <span className="font-medium text-blue-gray-900">Gender: </span>
            Male
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Age: </span>
            30 (1990-05-15)
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Height: </span>
            5&apos;9
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Weight: </span>
            70Kg
          </Typography>
        </div>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Occupation: </span>
            Engineer
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Race: </span>
            Bengali
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-2">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Fathers Name:{" "}
            </span>
            Mohammed Rahman
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Mothers Name:{" "}
            </span>
            Shirin Rahman
          </Typography>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-2">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Permanent Division:{" "}
            </span>
            Chattogram
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">
              Present Division:{" "}
            </span>
            Dhaka
          </Typography>
        </div>
        <Typography variant="h5" color="purple" className="mt-6">
          Expectations from Partner
        </Typography>
        <div className="flex items-center justify-between">
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Age: </span>
            25-30
          </Typography>
          <Typography variant="lead" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Height: </span>
            5&apos;2-5&apos;6
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <span className="font-medium text-blue-gray-900">Weight: </span>
            50-60Kg
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
                017XXXXXXXX
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                <span className="font-medium text-blue-gray-900">Email: </span>
                ahmed.rahman@example.com
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
