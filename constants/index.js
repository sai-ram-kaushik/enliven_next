import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

export const menuList = [
  { label: "Features", path: "/features" },
  { label: "Contact with a Psycologist", path: "contact-with-a-psycologist" },
  { label: "Free Learning Modules", path: "free-learning-modules" },
  { label: "Community", path: "/community" },
  { label: "Support", path: "/support" },
];

export const socials = [
  {
    label: "Instagram",
    icon: <BsInstagram size={20} />,
    key: "Instagram",
  },
  {
    label: "Facebook",
    icon: <FaFacebookF size={20} />,
    key: "facebook",
  },
  {
    label: "LinkedIn",
    icon: <AiFillLinkedin size={20} />,
    key: "LinkedIn",
  },
  {
    label: "Twitter",
    icon: <RiTwitterXFill size={20} />,
    key: "Twitter",
  },
];

