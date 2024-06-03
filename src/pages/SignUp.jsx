import {Card, Input, Button, Typography} from "@material-tailwind/react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useContext, useEffect, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {AuthContext} from "../AuthProvider";

export function SignUp() {
  const {user, createUser, errorMessage, googleLogIn} = useContext(AuthContext);
  const [showpass, setShowpass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location?.state : "/");
    }
  }, [user, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const username = form.get("username");
    const photo = form.get("photo");

    createUser(email, password, username, photo);
  };

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
        <form
          onSubmit={handleSignUp}
          className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        >
          <div className="flex flex-col gap-6 mb-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              type="text"
              placeholder="name"
              name="username"
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
              name="photo"
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
              name="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <div className="relative">
              <Input
                type={showpass ? "text" : "password"}
                size="lg"
                name="password"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <span
                onClick={() => setShowpass(!showpass)}
                className="absolute text-xl right-3 top-3"
              >
                {showpass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
          </div>
          <Typography color="gray" className="mt-4 text-xs font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-purple-500">
              Login
            </Link>
          </Typography>
          {errorMessage ? (
            <h3 className="text-red-600 mt-2">{errorMessage}</h3>
          ) : (
            ""
          )}
          <Button color="purple" className="mt-4" type="submit" fullWidth>
            Sign Up
          </Button>

          <Typography color="gray" className="my-2 text-center">
            ---- OR ----
          </Typography>
          <div className="flex justify-center">
            <Button onClick={googleLogIn} color="purple" className="">
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
