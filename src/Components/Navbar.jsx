import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../Images/logo.png";
export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-4 mb-1 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" size="sm" className="p-1 font-normal">
        <a href="/prices" className="flex text-gray-600 items-center">
          Pricing
        </a>
      </Typography>
      <Typography as="li" size="sm" className="p-1 font-normal">
        <a href="#" className="flex text-gray-600 items-center">
          Blog
        </a>
      </Typography>
      <Typography as="li" size="sm" className="p-1 font-normal">
        <a href="/faq" className="flex text-gray-600 items-center">
          FAQs
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="relative pb-1">
      <div className="fixed z-10 w-full bg-white">
        <Navbar className="max-w-full rounded-none px-2 py-2 lg:px-8 lg:py-4 bg-white">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex flex-row justify-between items-center align-middle">
              <a
                href="/"
                className="text-black tracking-widest text-2xl font-normal font-poppins flex items-center"
              >
                <img src={logo} className="h-6 w-auto" alt="Logo" /> &nbsp;diner
                <span className="text-green-600 tracking-widest font-black">
                  Dash
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1">
                <Button
                  size="sm"
                  className="hidden lg:inline-block rounded-lg font-bold text-green-600 bg-transparent hover:shadow-none shadow-none"
                >
                  <span>LogIn</span>
                </Button>
                <Button
                  size="sm"
                  className="hidden lg:inline-block rounded-lg bg-green-600"
                >
                  <span>Book a demo</span>
                </Button>
              </div>
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </div>
      {/* Content below the Navbar */}
      <div className="pt-16 px-4 lg:px-36">
        {" "}
        {/* Adjust padding as needed */}
        {/* Your content here */}
      </div>
    </div>
  );
}
