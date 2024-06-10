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
import {useContext, useEffect, useState} from "react";
import SectionTitle from "../../SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {PiCrownSimpleFill} from "react-icons/pi";
import {RiAdminFill} from "react-icons/ri";
import {AuthContext} from "../../../AuthProvider";

const TABLE_HEAD = ["Name", "Biodata ID", "Status", "Email", "Mobile No.", ""];

export default function MyContactRequest() {
  const {user} = useContext(AuthContext);
  function handleDelete(_id) {
    MySwal.fire({
      title: "Delete this Contact Request?",
      text: "This action will delete this contact request and you wont receive any refunds.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/contactrequests/delete/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        MySwal.fire({
          title: "Successfully Approved!",
          text: "The Biodata is approved to be seen by Requester.",
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
        `http://localhost:5000/contactrequests?email=${user.email}`
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
          <SectionTitle title="My Contact Request"></SectionTitle>
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
              {mycontacts.map(
                (
                  {name, biodataId, status, contactEmail, mobileNumber, _id},
                  index
                ) => (
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
                        {biodataId}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className={`font-normal ${
                          status == "pending"
                            ? "text-red-600"
                            : "text-green-500"
                        }`}
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status == "approved"
                          ? contactEmail
                          : "[Will be Shown when Approved]"}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status == "approved"
                          ? mobileNumber
                          : "[Will be Shown when Approved]"}
                      </Typography>
                    </td>

                    <td onClick={() => handleDelete(_id)} className="p-4">
                      <Tooltip content="Delete Request">
                        <IconButton variant="text">
                          <FaTrash className="h-4 w-4 text-red-600" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {mycontacts.length == 0 ? (
            <h4 className="w-full text-center h-32 txet-3xl font-medium flex justify-center items-center">
              No Contacts Found.
            </h4>
          ) : (
            ""
          )}
        </Card>
      </div>
    </>
  );
}
