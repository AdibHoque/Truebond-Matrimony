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

export default function BioCard({data}) {
  const {name, biodataId, gender, age, occupation, permanentDivision} = data;
  return (
    <Card className="max-w-[24rem] overflow-hidden mx-auto">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="purple">
          {name}
        </Typography>
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
        <a href="#" className="inline-block">
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
        </a>
      </CardFooter>
    </Card>
  );
}