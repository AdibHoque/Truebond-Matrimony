import {
  Card,
  Typography,
  Input,
  Select,
  option,
  Button,
} from "@material-tailwind/react";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../AuthProvider";
import MySwal from "sweetalert2";

export default function EditBiodata() {
  const {user} = useContext(AuthContext);
  const [userBiodata, setUserBiodata] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/biodatas?email=${user.email}`)
      .then((data) => data.json())
      .then((data) => setUserBiodata(data));
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const gender = form.get("gender");
    const image = form.get("image");
    const dob = form.get("dob");
    const age = form.get("age");
    const height = form.get("height");
    const weight = form.get("weight");
    const occupation = form.get("occupation");
    const race = form.get("race");
    const fathersname = form.get("fathersname");
    const mothersname = form.get("mothersname");
    const permanentdivision = form.get("permanentdivision");
    const presentdivision = form.get("presentdivision");
    const partnerage = form.get("partnerage");
    const partnerheight = form.get("partnerheight");
    const partnerweight = form.get("partnerweight");
    const email = user.email;
    const mobilenumber = form.get("mobilenumber");

    if (userBiodata.biodataId) {
      const obj = {
        biodataId: userBiodata.biodataId,
        gender: gender,
        name: name,
        profileImage: image,
        dob: dob,
        height: height,
        weight: weight,
        age: age,
        occupation: occupation,
        race: race,
        fathersName: fathersname,
        mothersName: mothersname,
        permanentDivision: permanentdivision,
        presentDivision: presentdivision,
        expectedPartnerAge: partnerage,
        expectedPartnerHeight: partnerheight,
        expectedPartnerWeight: partnerweight,
        contactEmail: email,
        mobileNumber: mobilenumber,
        premium: userBiodata.premium,
      };
      fetch("http://localhost:5000/biodatas", {
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
            text: "Successfully Edited Biodata!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      return console.log(obj);
    }

    const obj = {
      gender: gender,
      name: name,
      profileImage: image,
      dob: dob,
      height: height,
      weight: weight,
      age: age,
      occupation: occupation,
      race: race,
      fathersName: fathersname,
      mothersName: mothersname,
      permanentDivision: permanentdivision,
      presentDivision: presentdivision,
      expectedPartnerAge: partnerage,
      expectedPartnerHeight: partnerheight,
      expectedPartnerWeight: partnerweight,
      contactEmail: email,
      mobileNumber: mobilenumber,
      premium: false,
    };
    console.log(obj);
    fetch("http://localhost:5000/biodatas", {
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
          text: "Successfully Added Biodata!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="p-10 w-full ">
      <div className="w-full ">
        <Typography variant="h4" color="blue-gray">
          Edit BioData
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your biodata details.
        </Typography>
        <form onSubmit={handleEdit} className="w-full mt-8 mb-2">
          <div className="flex flex-col gap-6 mb-1">
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Biodata Type
                </Typography>

                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Select Gender"
                  name="gender"
                  required
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Name"
                  type="text"
                  required
                  name="name"
                  defaultValue={userBiodata.name}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
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
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Date of Birth
                </Typography>
                <Input
                  size="lg"
                  placeholder="Date Of Birth"
                  type="date"
                  name="dob"
                  defaultValue={userBiodata.dob}
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Age
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Age"
                  type="number"
                  name="age"
                  defaultValue={userBiodata.age}
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Height
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Height"
                  name="height"
                  defaultValue={userBiodata.height}
                  required
                >
                  <option>4&apos;0&quot;-4&apos;6&quot;</option>
                  <option>4&apos;7&quot;-5&apos;0&quot;</option>
                  <option>5&apos;1&quot;-5&apos;3&quot;</option>
                  <option>5&apos;4&quot;-5&apos;7&quot;</option>
                  <option>5&apos;8&quot;-6&apos;0&quot;</option>
                  <option>6&apos;0&quot;+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className=""
                  required
                >
                  Weight
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Weight"
                  required
                  name="weight"
                  defaultValue={userBiodata.weight}
                >
                  <option>40-45 Kgs</option>
                  <option>46-51 Kgs</option>
                  <option>52-57 Kgs</option>
                  <option>58-63 Kgs</option>
                  <option>64-69 Kgs</option>
                  <option>70-75 Kgs</option>
                  <option>75+ Kgs</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Occupation
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Occupation"
                  name="occupation"
                  defaultValue={userBiodata.occupation}
                  required
                >
                  <option>Doctor</option>
                  <option>Engineer</option>
                  <option>Businessman</option>
                  <option>Service Holder</option>
                  <option>Teacher</option>
                  <option>Software Developer</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className=""
                  required
                >
                  Race
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Race"
                  required
                  defaultValue={userBiodata.race}
                  name="race"
                >
                  <option>Bengali</option>
                  <option>White</option>
                  <option>Black</option>
                  <option>Brown</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Fathers Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Fathers Name"
                  name="fathersname"
                  defaultValue={userBiodata.fathersName}
                  type="text"
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Mothers Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Mothers Name"
                  type="text"
                  defaultValue={userBiodata.mothersName}
                  name="mothersname"
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Permanent Division
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Permanent Division"
                  name="permanentdivision"
                  defaultValue={userBiodata.permanentDivision}
                  required
                >
                  <option>Dhaka</option>
                  <option>Chattagram</option>
                  <option>Rangpur</option>
                  <option>Barisal</option>
                  <option>Khulna</option>
                  <option>Mymensingh</option>
                  <option>Sylhet</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Present Division
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Present Division"
                  name="presentdivision"
                  defaultValue={userBiodata.presentDivision}
                  required
                >
                  <option>Dhaka</option>
                  <option>Chattagram</option>
                  <option>Rangpur</option>
                  <option>Barisal</option>
                  <option>Khulna</option>
                  <option>Mymensingh</option>
                  <option>Sylhet</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Height
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Height"
                  required
                  name="partnerheight"
                  defaultValue={userBiodata.expectedPartnerHeight}
                >
                  <option>4&apos;0&quot;-4&apos;6&quot;</option>
                  <option>4&apos;7&quot;-5&apos;0&quot;</option>
                  <option>5&apos;1&quot;-5&apos;3&quot;</option>
                  <option>5&apos;4&quot;-5&apos;7&quot;</option>
                  <option>5&apos;8&quot;-6&apos;0&quot;</option>
                  <option>6&apos;0&quot;+</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Weight
                </Typography>
                <select
                  size="lg"
                  className="border p-[11px] rounded-md border-3 border-blue-gray-200 text-blue-gray-300 focus:!border-t-gray-900"
                  label="Weight"
                  required
                  name="partnerweight"
                  defaultValue={userBiodata.expectedPartnerWeight}
                >
                  <option>40-45 Kgs</option>
                  <option>46-51 Kgs</option>
                  <option>52-57 Kgs</option>
                  <option>58-63 Kgs</option>
                  <option>64-69 Kgs</option>
                  <option>70-75 Kgs</option>
                  <option>75+ Kgs</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Age
                </Typography>
                <Input
                  size="lg"
                  placeholder="Partner Age"
                  type="number"
                  name="partnerage"
                  defaultValue={userBiodata.expectedPartnerAge}
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Email
                </Typography>
                <Input
                  disabled
                  readOnly
                  size="lg"
                  placeholder="Your Name"
                  name="email"
                  value={user.email}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Mobile Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Mobile Number"
                  type="number"
                  name="mobilenumber"
                  defaultValue={userBiodata.mobileNumber}
                  required
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
          </div>
          <Button className="mt-4" type="submit" fullWidth>
            Save & Publish Now
          </Button>
        </form>
      </div>
    </div>
  );
}
