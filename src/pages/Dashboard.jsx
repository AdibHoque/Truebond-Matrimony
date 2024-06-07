import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {useContext, useEffect} from "react";
import {
  FaDatabase,
  FaHeart,
  FaHome,
  FaHouseUser,
  FaPowerOff,
  FaUser,
  FaUserCheck,
  FaUserCog,
  FaUserEdit,
  FaUserPlus,
  FaUserShield,
} from "react-icons/fa";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthProvider";

export default function Dashboard() {
  const {user, logOut} = useContext(AuthContext);
  const isAdmin = false;
  const navigate = useNavigate();

  useEffect(() => {
    // if (user) {
    //   navigate("/dashboard/home");
    // }
  }, [user, navigate, isAdmin]);
  const navClass = ({isActive, isPending}) =>
    isPending || isActive ? "text-purple-500" : "";

  return (
    <>
      <div className="flex">
        {user && isAdmin ? (
          <Card className="w-64 h-screen p-4 bg-purple-500 rounded-none shadow-xl shadow-blue-gray-900/5 bg-opacity-10">
            <div className="p-4 mb-2">
              <Typography variant="h5" color="purple">
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
        ) : (
          <Card className="w-64 h-screen p-4 bg-purple-500 rounded-none shadow-xl shadow-blue-gray-900/5 bg-opacity-10">
            <div className="p-4 mb-2">
              <Typography variant="h5" color="purple">
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
