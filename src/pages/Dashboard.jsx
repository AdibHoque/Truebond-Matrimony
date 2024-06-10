import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Drawer,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import {useContext, useEffect, useState} from "react";
import {
  FaDatabase,
  FaHeart,
  FaHome,
  FaHouseUser,
  FaPowerOff,
  FaRegTimesCircle,
  FaTimes,
  FaUser,
  FaUserCheck,
  FaUserCog,
  FaUserEdit,
  FaUserPlus,
  FaUserShield,
} from "react-icons/fa";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {AuthContext} from "../AuthProvider";
import {useQuery} from "@tanstack/react-query";

export default function Dashboard() {
  const {user, loading, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname == "/dashboard") {
      navigate("/dashboard/home");
    }
  }, [user, navigate, location]);
  const navClass = ({isActive, isPending}) =>
    isPending || isActive ? "text-purple-500" : "";
  const [open, setOpen] = useState(window.innerWidth >= 960 ? false : true);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth <= 960 && setOpen(true)
    );
  }, []);

  const {data: Admin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, "Admin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://truebond-matrimony.vercel.app/users?email=${user.email}`
      );
      return res.json();
    },
  });
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <Spinner className="size-24" color="purple" />
      </div>
    );
  }

  return (
    <>
      <div className="flex">
        {user && Admin.role == "admin" ? (
          open ? (
            <IconButton
              variant="text"
              className="absolute top-1 left-1 z-50 size-24 text-3xl ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </IconButton>
          ) : (
            <Card className="z-50 absolute lg:sticky top-0 w-64 h-screen p-4 bg-purple-100 rounded-none shadow-xl shadow-blue-gray-900/5">
              <div className="p-4 mb-2">
                <IconButton
                  variant="text"
                  className="absolute top-1 left-1 size-24 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpen(true)}
                >
                  <FaRegTimesCircle className="text-3xl"></FaRegTimesCircle>
                </IconButton>
                <Typography variant="h5" color="purple" className="mt-2">
                  Admin Dashboard
                </Typography>
              </div>
              <List>
                <NavLink to="home" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaHouseUser className="w-5 h-5" />
                    </ListItemPrefix>
                    Dashboard Home
                  </ListItem>
                </NavLink>
                <NavLink to="admindashboard" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaUserShield className="w-5 h-5" />
                    </ListItemPrefix>
                    Admin Dashboard
                  </ListItem>
                </NavLink>
                <NavLink to="manageusers" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaUserCog className="w-5 h-5" />
                    </ListItemPrefix>
                    Manage Users
                  </ListItem>
                </NavLink>
                <NavLink to="approvedpremium" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaUserCheck className="w-5 h-5" />
                    </ListItemPrefix>
                    Approved Premium
                  </ListItem>
                </NavLink>
                <NavLink to="approvedcontactrequest" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaUserCheck className="w-5 h-5" />
                    </ListItemPrefix>
                    Approved Contact Request
                  </ListItem>
                </NavLink>
                <NavLink to="successstories" className={navClass}>
                  <ListItem>
                    <ListItemPrefix>
                      <FaHeart className="w-5 h-5" />
                    </ListItemPrefix>
                    Success Stories
                  </ListItem>
                </NavLink>

                <ListItem onClick={logOut}>
                  <ListItemPrefix>
                    <FaPowerOff className="w-5 h-5" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>

                <hr className="h-1 my-6 bg-blue-gray-700 opacity-20" />
                <Link to="/">
                  <ListItem>
                    <ListItemPrefix>
                      <FaHome className="w-5 h-5" />
                    </ListItemPrefix>
                    Home
                  </ListItem>
                </Link>
                <Link to="/biodatas">
                  <ListItem>
                    <ListItemPrefix>
                      <FaDatabase className="w-5 h-5" />
                    </ListItemPrefix>
                    Biodatas
                  </ListItem>
                </Link>

                {/* <NavLink to="/editbiodata" className={navClass}>
           
           </NavLink> */}
              </List>
            </Card>
          )
        ) : open ? (
          <IconButton
            variant="text"
            className="absolute top-1 left-1 z-50 size-24 text-3xl ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        ) : (
          <Card className="z-50 absolute lg:sticky top-0 w-64 h-screen p-4 bg-purple-100 rounded-none shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2">
              <IconButton
                variant="text"
                className="absolute top-1 left-1 size-24 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpen(true)}
              >
                <FaRegTimesCircle className="text-3xl"></FaRegTimesCircle>
              </IconButton>
              <Typography variant="h5" color="purple" className="mt-2">
                User Dashboard
              </Typography>
            </div>
            <List>
              <NavLink to="home" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaHouseUser className="w-5 h-5" />
                  </ListItemPrefix>
                  Dashboard Home
                </ListItem>
              </NavLink>
              <NavLink to="editbiodata" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUserEdit className="w-5 h-5" />
                  </ListItemPrefix>
                  Edit Biodata
                </ListItem>
              </NavLink>
              <NavLink to="viewbiodata" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUser className="w-5 h-5" />
                  </ListItemPrefix>
                  View Biodata
                </ListItem>
              </NavLink>
              <NavLink to="mycontactrequest" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUserPlus className="w-5 h-5" />
                  </ListItemPrefix>
                  My Contact Request
                </ListItem>
              </NavLink>
              <NavLink to="favorites" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaHeart className="w-5 h-5" />
                  </ListItemPrefix>
                  Favourites Biodata
                </ListItem>
              </NavLink>
              <NavLink to="gotmarried" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaHeart className="w-5 h-5" />
                  </ListItemPrefix>
                  Got Married
                </ListItem>
              </NavLink>
              <ListItem onClick={logOut}>
                <ListItemPrefix>
                  <FaPowerOff className="w-5 h-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>

              <hr className="h-1 my-6 bg-blue-gray-700 opacity-20" />
              <Link to="/">
                <ListItem>
                  <ListItemPrefix>
                    <FaHome className="w-5 h-5" />
                  </ListItemPrefix>
                  Home
                </ListItem>
              </Link>
              <Link to="/biodatas">
                <ListItem>
                  <ListItemPrefix>
                    <FaDatabase className="w-5 h-5" />
                  </ListItemPrefix>
                  Biodatas
                </ListItem>
              </Link>
              {/* <NavLink to="/editbiodata" className={navClass}>
             
             </NavLink> */}
            </List>
          </Card>
        )}

        <Outlet></Outlet>
      </div>
    </>
  );
}
