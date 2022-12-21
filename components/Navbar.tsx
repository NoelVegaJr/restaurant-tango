import * as React from "react";
import { useState } from "react";
import { Diplomata_SC } from "@next/font/google";
const diplo = Diplomata_SC({
  subsets: ["latin"],
  weight: "400",
});
interface IAppProps {}

const Navbar: React.FunctionComponent = (props) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="px-12 py-6 ">
      <div className="flex justify-between  ">
        <div className={`text-orange-100 ${diplo.className}`}>Tango</div>
        <ul className="flex gap-8 text-zinc-100 mr-24">
          <li
            onClick={() => setActive("Menu")}
            className={`cursor-pointer hover:text-orange-200 ${
              active === "Menu" && "text-orange-200"
            } transition-all duration-200`}
          >
            Menu
          </li>
          <li
            onClick={() => setActive("Reserve")}
            className={`cursor-pointer hover:text-orange-200 ${
              active === "Reserve" && "text-orange-200"
            } transition-all duration-200`}
          >
            Reserve
          </li>
          <li
            onClick={() => setActive("About")}
            className={`cursor-pointer hover:text-orange-200 ${
              active === "About" && "text-orange-200"
            } transition-all duration-200`}
          >
            About
          </li>
          <li
            onClick={() => setActive("Online")}
            className={`cursor-pointer hover:text-orange-200 ${
              active === "Online" && "text-orange-200"
            } transition-all duration-200`}
          >
            Order Online
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
