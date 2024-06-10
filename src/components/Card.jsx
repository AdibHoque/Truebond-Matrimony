import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {PiCrownSimpleFill} from "react-icons/pi";
import {Link} from "react-router-dom";

export default function BioCard({data}) {
  const {
    _id,
    name,
    biodataId,
    gender,
    age,
    occupation,
    permanentDivision,
    profileImage,
    premium,
  } = data;
  return (
    <Card className="max-w-[24rem] overflow-hidden mx-auto">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={profileImage} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <div className="flex justify-between items-center">
          <Typography variant="h5" color="purple">
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
            {age}
          </Typography>
        </div>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          <span className="font-medium text-blue-gray-900">
            Permanent Division:{" "}
          </span>
          {permanentDivision}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          <span className="font-medium text-blue-gray-900">Occupation: </span>{" "}
          {occupation}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/biodata/${_id}`} className="inline-block">
          <Button
            size="sm"
            color="purple"
            variant="text"
            className="flex items-center gap-2"
          >
            View Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
