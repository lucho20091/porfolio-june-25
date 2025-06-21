import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import * as ROUTES from "../constants/routes";
export function SimpleFooter() {
  return (
    <footer className="container flex flex-row flex-wrap items-center justify-between border-t border-blue-gray-50 px-4 py-6 md:px-8 md:py-8  text-center md:justify-between  max-w-screen-xl mx-auto">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2025 Luis M.
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            as="a"
            to={ROUTES.HOME}
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            as="a"
            to={ROUTES.JOURNEY}
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Journey
          </Link>
        </li>
      </ul>
    </footer>
  );
}
