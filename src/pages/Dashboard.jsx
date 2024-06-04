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
  FaEdit,
  FaHeart,
  FaHome,
  FaPowerOff,
  FaUser,
  FaUserEdit,
  FaUserPlus,
  FaWpforms,
} from "react-icons/fa";
import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../AuthProvider";

export default function Dashboard() {
  const {user, logOut} = useContext(AuthContext);
  const isAdmin = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isAdmin) {
      navigate("/dashboard/home");
    }
  }, [user, navigate, isAdmin]);
  const navClass = ({isActive, isPending}) =>
    isPending || isActive ? "text-purple-500" : "";

  return (
    <>
      <div className="flex">
        {user && isAdmin ? (
          ""
        ) : (
          <Card className="h-screen rounded-none w-64 p-4 shadow-xl shadow-blue-gray-900/5 bg-purple-500 bg-opacity-10">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="purple">
                User Dashboard
              </Typography>
            </div>
            <List>
              <NavLink to="/editbiodata" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUserEdit className="h-5 w-5" />
                  </ListItemPrefix>
                  Edit Biodata
                </ListItem>
              </NavLink>
              <NavLink to="/viewbiodata" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUser className="h-5 w-5" />
                  </ListItemPrefix>
                  View Biodata
                </ListItem>
              </NavLink>
              <NavLink to="/mycontactrequest" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaUserPlus className="h-5 w-5" />
                  </ListItemPrefix>
                  My Contact Request
                </ListItem>
              </NavLink>
              <NavLink to="/favorites" className={navClass}>
                <ListItem>
                  <ListItemPrefix>
                    <FaHeart className="h-5 w-5" />
                  </ListItemPrefix>
                  Favourites Biodata
                </ListItem>
              </NavLink>

              <ListItem onClick={logOut}>
                <ListItemPrefix>
                  <FaPowerOff className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>

              <hr className="h-1 bg-blue-gray-700 opacity-20 my-6" />
              <Link to="/">
                <ListItem>
                  <ListItemPrefix>
                    <FaHome className="h-5 w-5" />
                  </ListItemPrefix>
                  Home
                </ListItem>
              </Link>
              <Link to="/biodatas">
                <ListItem>
                  <ListItemPrefix>
                    <FaDatabase className="h-5 w-5" />
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
