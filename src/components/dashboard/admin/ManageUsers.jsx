import {
  Button,
  Card,
  IconButton,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import MySwal from "sweetalert2";
import {FaTrash} from "react-icons/fa";
import {useEffect, useState} from "react";
import SectionTitle from "../../SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {PiCrownSimpleFill} from "react-icons/pi";
import {RiAdminFill} from "react-icons/ri";

const TABLE_HEAD = ["Username", "Email", "", ""];

export default function ManageUsers() {
  function handleMakeAdmin(email) {
    MySwal.fire({
      title: "Make Admin?",
      text: "This action will make the user admin.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://truebond-matrimony.vercel.app/users/admin/${email}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        });
        MySwal.fire({
          title: "Successfully Made Admin!",
          text: "The User is now an Admin.",
          icon: "success",
          timer: 2000,
        });
      }
    });
  }
  function handleMakePremium(email) {
    MySwal.fire({
      title: "Make Biodata Premium?",
      text: "This action will make the user biodata premium.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Premium",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://truebond-matrimony.vercel.app/biodatas/premium/${email}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        MySwal.fire({
          title: "Successfully Made Premium!",
          text: "The User Biodata is now premium.",
          icon: "success",
          timer: 2000,
        });
      }
    });
  }

  const {
    isPending,
    isError,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://truebond-matrimony.vercel.app/users");
      return res.json();
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="my-6">
          <SectionTitle title="Favorites"></SectionTitle>
        </div>

        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(({username, email, role}, index) => (
                <tr key={username} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {username}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Button
                      onClick={() => handleMakePremium(email)}
                      variant="gradient"
                      color="purple"
                      size="sm"
                      className="flex  items-center gap-3"
                    >
                      <PiCrownSimpleFill />
                      MAKE PREMIUM
                    </Button>
                  </td>
                  <td className="p-4">
                    {role == "admin" ? (
                      <Button
                        variant="text"
                        size="sm"
                        className="flex  items-center gap-3"
                      >
                        <RiAdminFill />
                        ADMIN
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleMakeAdmin(email)}
                        variant="gradient"
                        color="purple"
                        size="sm"
                        className="flex  items-center gap-3"
                      >
                        <RiAdminFill />
                        MAKE ADMIN
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length == 0 ? (
            <h4 className="w-full text-center h-32 txet-3xl font-medium flex justify-center items-center">
              No Biodata Favorited.
            </h4>
          ) : (
            ""
          )}
        </Card>
      </div>
    </>
  );
}
