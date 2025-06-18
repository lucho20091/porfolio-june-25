import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to={ROUTES.JOURNEY}
          className="flex items-center"
          onClick={() => setOpenNav(false)}
        >
          Journey
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-30 h-max max-w-full rounded-none px-4 py-2 md:px-8 md:py-4 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900 max-w-screen-xl mx-auto">
        <Link
          to={ROUTES.HOME}
          className="mr-4 cursor-pointer py-1.5 font-bold"
          onClick={() => setOpenNav(false)}
        >
          Luis M.
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden md:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Link to={ROUTES.LOGIN}>
              <Button
                variant="text"
                size="sm"
                className="hidden md:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to={ROUTES.SIGNIN}>
              <Button
                variant="gradient"
                size="sm"
                className="hidden md:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
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
                className="h-6 w-6"
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
      </div>
      <MobileNav open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Link to={ROUTES.LOGIN}>
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              onClick={() => setOpenNav(false)}
            >
              <span>Log In</span>
            </Button>
          </Link>
          <Link to={ROUTES.SIGNIN}>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              onClick={() => setOpenNav(false)}
            >
              <span>Sign in</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
}
