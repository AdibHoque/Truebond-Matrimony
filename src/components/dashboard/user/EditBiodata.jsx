import {
  Card,
  Typography,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import {useContext} from "react";
import {AuthContext} from "../../../AuthProvider";

export default function EditBiodata() {
  const {user, loading} = useContext(AuthContext);

  function handleEdit() {
    console.log("form");
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
                <Select size="lg" variant="outlined" label="Select Gender">
                  <Option>Male</Option>
                  <Option>Female</Option>
                </Select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Name"
                  name="text"
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
                  name="text"
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
                  name="text"
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
                <Select size="lg" variant="outlined" label="Height">
                  <Option>4&apos;0&quot;-4&apos;6&quot;</Option>
                  <Option>4&apos;7&quot;-5&apos;0&quot;</Option>
                  <Option>5&apos;1&quot;-5&apos;3&quot;</Option>
                  <Option>5&apos;4&quot;-5&apos;7&quot;</Option>
                  <Option>5&apos;8&quot;-6&apos;0&quot;</Option>
                  <Option>6&apos;0&quot;+</Option>
                </Select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Weight
                </Typography>
                <Select size="lg" variant="outlined" label="Weight">
                  <Option>40-45 Kgs</Option>
                  <Option>46-51 Kgs</Option>
                  <Option>52-57 Kgs</Option>
                  <Option>58-63 Kgs</Option>
                  <Option>64-69 Kgs</Option>
                  <Option>70-75 Kgs</Option>
                  <Option>75+ Kgs</Option>
                </Select>
              </div>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Fathers Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Name"
                  name="text"
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
                  placeholder="Your Name"
                  name="text"
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
                <Select size="lg" variant="outlined" label="Height">
                  <Option>Dhaka</Option>
                  <Option>Chattagram</Option>
                  <Option>Rangpur</Option>
                  <Option>Barisal</Option>
                  <Option>Khulna</Option>
                  <Option>Mymensingh</Option>
                  <Option>Sylhet</Option>
                </Select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Present Division
                </Typography>
                <Select size="lg" variant="outlined" label="Height">
                  <Option>Dhaka</Option>
                  <Option>Chattagram</Option>
                  <Option>Rangpur</Option>
                  <Option>Barisal</Option>
                  <Option>Khulna</Option>
                  <Option>Mymensingh</Option>
                  <Option>Sylhet</Option>
                </Select>
              </div>
            </div>

            <div className="flex gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Height
                </Typography>
                <Select size="lg" variant="outlined" label="Height">
                  <Option>4&apos;0&quot;-4&apos;6&quot;</Option>
                  <Option>4&apos;7&quot;-5&apos;0&quot;</Option>
                  <Option>5&apos;1&quot;-5&apos;3&quot;</Option>
                  <Option>5&apos;4&quot;-5&apos;7&quot;</Option>
                  <Option>5&apos;8&quot;-6&apos;0&quot;</Option>
                  <Option>6&apos;0&quot;+</Option>
                </Select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Weight
                </Typography>
                <Select size="lg" variant="outlined" label="Weight">
                  <Option>40-45 Kgs</Option>
                  <Option>46-51 Kgs</Option>
                  <Option>52-57 Kgs</Option>
                  <Option>58-63 Kgs</Option>
                  <Option>64-69 Kgs</Option>
                  <Option>70-75 Kgs</Option>
                  <Option>75+ Kgs</Option>
                </Select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Typography variant="h6" color="blue-gray" className="">
                  Expected Partner Age
                </Typography>
                <Input
                  size="lg"
                  placeholder="Your Age"
                  type="number"
                  name="text"
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
                  name="text"
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
                  placeholder="Your Name"
                  name="text"
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
