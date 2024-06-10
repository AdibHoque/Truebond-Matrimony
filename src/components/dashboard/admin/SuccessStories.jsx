import {
  Button,
  Card,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import MySwal from "sweetalert2";
import {FaPlay, FaTrash, FaUserCheck} from "react-icons/fa";
import {useContext, useEffect, useState} from "react";
import SectionTitle from "../../SectionTitle";
import {useQuery} from "@tanstack/react-query";
import {PiCrownSimpleFill} from "react-icons/pi";
import {RiAdminFill} from "react-icons/ri";
import {AuthContext} from "../../../AuthProvider";
import {MarriedCard} from "../../MarriedCard";

const TABLE_HEAD = ["Male Biodata Id", "Female Biodata Id", ""];

export default function SuccessStories() {
  const [openDialogId, setOpenDialogId] = useState(null);

  const handleOpen = (id) => {
    setOpenDialogId(openDialogId === id ? null : id);
  };
  const {
    isPending,
    isError,
    error,
    data: gotmarried,
  } = useQuery({
    queryKey: ["gotmarried"],
    queryFn: async () => {
      const res = await fetch(
        `https://truebond-matrimony.vercel.app/marriedstory`
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
  console.log(gotmarried[0]);
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
              {gotmarried.map((data, index) => (
                <tr key={index + 768686} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.selfBiodataId}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.partnerBiodataId}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Button
                      onClick={() => handleOpen(data._id)}
                      variant="gradient"
                      color="purple"
                      size="sm"
                      className="flex  items-center gap-3"
                    >
                      <FaPlay />
                      View Story
                    </Button>
                    <Dialog
                      open={openDialogId === data._id}
                      handler={() => handleOpen(data._id)}
                    >
                      <DialogBody>
                        <MarriedCard key={data._id} data={data}></MarriedCard>
                      </DialogBody>
                    </Dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {gotmarried.length == 0 ? (
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
