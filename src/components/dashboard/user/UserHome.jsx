import {useContext} from "react";
import {AuthContext} from "../../../AuthProvider";
import {Avatar, Badge} from "@material-tailwind/react";
import SectionTitle from "../../SectionTitle";

export default function UserHome() {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex flex-col p-2 lg:p-10 gap-y-10 mt-10">
      <SectionTitle title="Welcome to your dashboard"></SectionTitle>

      <div className="flex flex-wrap">
        <div className="flex items-center justify-center flex-wrap gap-2">
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
          <h2>- {user.email}</h2>
        </div>
      </div>
    </div>
  );
}
