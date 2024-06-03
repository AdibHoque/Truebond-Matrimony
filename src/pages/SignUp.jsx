import {Card, Input, Button, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

export function SignUp() {
  return (
    <div className="flex min-h-[86vh] items-center justify-center px-4 py-4 lg:py-0 lg:justify-between lg:px-24">
      <img src="/Signup-rafiki.svg" className="hidden w-1/2 lg:flex" alt="" />
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="mt-4">
          SignUp
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to SignUp.
        </Typography>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Photo URL
            </Typography>
            <Input
              size="lg"
              placeholder="Photo URL"
              type="url"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              type="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Typography color="gray" className="mt-4 text-xs font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-purple-500">
              Login
            </Link>
          </Typography>
          <Button color="purple" className="mt-4" type="submit" fullWidth>
            Sign Up
          </Button>

          <Typography color="gray" className="my-2 text-center">
            ---- OR ----
          </Typography>
          <div className="flex justify-center">
            <Button color="purple" className="">
              <span className="flex items-center justify-center gap-2">
                <FcGoogle className="text-xl" />
                Continue with Google
              </span>
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}