import {useContext} from "react";
import {AuthContext} from "../../../AuthProvider";
import {Avatar, Badge} from "@material-tailwind/react";

export default function UserHome() {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex flex-col p-10">
      <h1 className="text-purple-500 text-6xl font-bold">
        Welcome to your dashboard
      </h1>

      <div className="flex">
        <div className="flex justify-center items-center gap-2">
          <Badge placement="top-end" color="green" withBorder>
            <Avatar
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://docs.material-tailwind.com/img/face-2.jpg"
              }
              alt="avatar"
              variant="rounded"
            />
          </Badge>
          <h1 className="text-2xl font-bold text-blue-gray-900">
            {user.displayName}
          </h1>
        </div>
      </div>
    </div>
  );
}
