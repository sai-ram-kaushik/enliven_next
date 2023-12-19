import Button from "@/components/Button";
import { menuList } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-20 z-[999] bg-background sticky top-0">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-6 lg:px-0">
          {/* logo */}
          <div>
            <Link href="/">
              <h1 className="text-primary">Enliven</h1>
            </Link>
          </div>

          {/* menuList */}

          <div className="hidden lg:flex items-center gap-5">
            {menuList.map((list, index) => (
              <ul
                key={index}
                className="text-xl font-medium hover:text-primary duration-150">
                <Link href={list.path}>
                  <li>{list.label}</li>
                </Link>
              </ul>
            ))}
          </div>

          {/* login button */}

          <div className="hidden lg:flex">
            <Button className="font-medium lg:w-[7rem]">Login</Button>
          </div>

          {/* hamburger menu slider */}
          <div
            className="flex lg:hidden p-2 rounded-full bg-primary"
            onClick={handleChange}>
            {nav ? <IoClose size={30} /> : <LuMenu size={30} />}
          </div>
        </div>

        {/* mobile version */}

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }>
          <Link href="/" onClick={handleChange}>
            <h1 className="text-background">Enliven</h1>
          </Link>
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {menuList.map((link, index) => (
              <ul
                key={index}
                className="text-xl text-background"
                onClick={handleChange}>
                <Link
                  href={link.path}
                  className="text-background hover:text-secondary text-center duration-200">
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}

            <Link href="/login">
              {" "}
              <button
                className="bg-secondary text-background lg:w-[10rem] p-3 rounded-lg text-xl hover:bg-background hover:text-primary border border-secondary duration-200"
                onClick={handleChange}>
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
