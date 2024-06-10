import {
  Card,
  Typography,
  Input,
  Select,
  option,
  Button,
  Textarea,
} from "@material-tailwind/react";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../AuthProvider";
import MySwal from "sweetalert2";
import {format} from "date-fns";

export default function GotMarriedDashboard() {
  const {user} = useContext(AuthContext);
  const [userBiodata, setUserBiodata] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/biodatas?email=${user.email}`)
      .then((data) => data.json())
      .then((data) => setUserBiodata(data));
  }, [user.email]);

  function handleMarried(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const self = form.get("selfbiodata");
    const partnerbiodata = form.get("partnerbiodata");
    const image = form.get("image");
    const review = form.get("review");
    const date = new Date();
    const formattedDate = format(date, "yyyy-MM-dd");
    const obj = {
      selfBiodataId: self,
      partnerBiodataId: partnerbiodata,
      coupleImage: image,
      successStory: review,
      reviewRating: 5.0,
      marriageDate: formattedDate,
    };
    fetch("http://localhost:5000/marriedstory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(() => {
        MySwal.fire({
          position: "center",
          icon: "success",
          text: "Successfully Added Success story!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="p-10 w-full ">
        <div className="w-full ">
          <Typography variant="h4" color="blue-gray">
            Success Story
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details.
          </Typography>
          <form onSubmit={handleMarried} className="w-full mt-8 mb-2">
            <div className="flex flex-wrap lg:flex-nowrap flex-col gap-6 mb-1">
              <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
                <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                  <Typography variant="h6" color="blue-gray" className="">
                    Self Biodata ID
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Your Name"
                    type="number"
                    required
                    defaultValue={userBiodata.biodataId}
                    name="selfbiodata"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                  <Typography variant="h6" color="blue-gray" className="">
                    Partner Biodata ID
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Your Partner Biodata ID"
                    type="number"
                    required
                    name="partnerbiodata"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-nowrap gap-2 w-full">
                <div className="flex flex-wrap lg:flex-nowrap flex-col gap-2 w-full">
                  <Typography variant="h6" color="blue-gray" className="">
                    Image URL
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="1200x800px Image"
                    type="url"
                    name="image"
                    defaultValue={userBiodata.profileImage}
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <Typography variant="h6" color="blue-gray" className="">
                Review
              </Typography>
              <Textarea
                required
                name="review"
                variant="outlined"
                placeholder="Write your success story and review about the website"
                rows={8}
              />
            </div>
            <Button className="mt-4" type="submit" fullWidth>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
