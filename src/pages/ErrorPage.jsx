import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <img src="/404-amico.svg" className="w-96" alt="" />
        <Link to="/">
          <Button color="purple">Return Home</Button>
        </Link>
      </div>
    </>
  );
}
