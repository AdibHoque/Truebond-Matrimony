import {
  Button,
  Card,
  IconButton,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import MySwal from "sweetalert2";
import {FaTrash, FaUserCheck} from "react-icons/fa";
import {useContext, useEffect, useState} from "react";
import SectionTitle from "../../SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {PiCrownSimpleFill} from "react-icons/pi";
import {RiAdminFill} from "react-icons/ri";
import {AuthContext} from "../../../AuthProvider";

const TABLE_HEAD = ["Name", "Email", "Biodata ID", ""];

export default function ApprovedPremium() {
  function handleApprove(email) {
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
        refetch();
      }
    });
  }

  const {
    isPending,
    isError,
    error,
    refetch,
    data: mycontacts,
  } = useQuery({
    queryKey: ["mycontacts"],
    queryFn: async () => {
      const res = await fetch(
        `https://truebond-matrimony.vercel.app/premiumrequests`
      );
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
          <SectionTitle title="Approve Premium Request"></SectionTitle>
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
              {mycontacts.map(({name, email, biodataId}, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {biodataId}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Button
                      onClick={() => handleApprove(email)}
                      variant="gradient"
                      color="purple"
                      size="sm"
                      className="flex  items-center gap-3"
                    >
                      <PiCrownSimpleFill />
                      Make Premium
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {mycontacts.length == 0 ? (
            <h4 className="w-full text-center h-32 txet-3xl font-medium flex justify-center items-center">
              No Requests Found.
            </h4>
          ) : (
            ""
          )}
        </Card>
      </div>
    </>
  );
}
