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
    <ul className="flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="py-1.5 font-bold"
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
        <div className="flex items-center justify-end">
          <div className="">{navList}</div>
        </div>
      </div>
    </Navbar>
  );
}
