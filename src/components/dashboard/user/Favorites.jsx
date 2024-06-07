import {Card, IconButton, Tooltip, Typography} from "@material-tailwind/react";
import MySwal from "sweetalert2";
import {FaTrash} from "react-icons/fa";
import {useEffect, useState} from "react";

const TABLE_HEAD = [
  "Name",
  "Biodata ID",
  "Permanent Address",
  "Occupation",
  "",
];

export default function Favorites() {
  const db = localStorage.getItem("favorites");
  const [data, setData] = useState([]);

  useEffect(() => {
    const favDb = db ? JSON.parse(db) : [];
    setData(favDb);
  }, [db, data]);

  function deleteById(_id) {
    MySwal.fire({
      title: "Logout?",
      text: "Remove This Biodata from Favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        const db = localStorage.getItem("favorites");
        const favDb = db ? JSON.parse(db) : [];

        const updatedFavDb = favDb.filter((item) => item._id !== _id);

        localStorage.setItem("favorites", JSON.stringify(updatedFavDb));
        MySwal.fire({
          title: "Removed Favorite!",
          text: "The Biodata has been removed from your favorites.",
          icon: "success",
        });
      }
    });
  }

  return (
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
          {data.map(
            ({name, biodataId, permanentDivision, occupation, _id}, index) => (
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
                    className="font-normal"
                  >
                    {permanentDivision}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {occupation}
                  </Typography>
                </td>
                <td onClick={() => deleteById(_id)} className="p-4">
                  <Tooltip content="Remove Favorite">
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
      {data.length == 0 ? (
        <h4 className="w-full text-center h-32 txet-3xl font-medium flex justify-center items-center">
          No Biodata Favorited.
        </h4>
      ) : (
        ""
      )}
    </Card>
  );
}
