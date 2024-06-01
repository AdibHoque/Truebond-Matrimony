import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";

export default function NavBar() {
  const navClass = ({isActive, isPending}) =>
    isPending || isActive ? "active-path" : "links";
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink className={navClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navClass} to="/about">
          Biodatas
        </NavLink>
      </li>
      <li>
        <NavLink className={navClass} to="/services">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink className={navClass} to="/pages">
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink className={navClass} to="/blog">
          Contact Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <Navbar className="w-full px-4 py-2 mx-auto lg:mt-4 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold flex justify-center items-center text-2xl gap-2 text-purple-300"
        >
          <img src="/couple.png"></img>
          TrueBond
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            variant="gradient"
            size="sm"
            color="purple"
            className="hidden lg:inline-block"
          >
            <span>Login</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto text-black">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
