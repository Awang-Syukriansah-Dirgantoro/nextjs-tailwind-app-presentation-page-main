import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
          className="flex items-center"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {!isScrolling ? (
            <Image width={60} height={60} src="/image/logo-circle.png" className="h-[60px] w-[60px] object-contain" alt={"logo"} />
          ) : (
            <>RenovDulu</>
          )}
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            // color={isScrolling ? "gray" : "white"}
            className={`${isScrolling ? "text-[#4a3732]" : "text-white"}`}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            // color={isScrolling ? "gray" : "white"}
            className={`${isScrolling ? "text-[#4a3732]" : "text-white"}`}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            // color={isScrolling ? "gray" : "white"}
            className={`${isScrolling ? "text-[#4a3732]" : "text-white"}`}
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="#" target="_blank">
            <Button
              className={`${isScrolling ? "bg-[#4a3732] text-white" : "bg-white text-[#4a3732]"}`}
              size="sm"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Blocks
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="#" target="_blank">
              <Button color="gray" size="sm" className="ml-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
