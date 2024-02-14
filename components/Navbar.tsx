'use client'
import React from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Navbar as MTNavbar, IconButton, Typography, Button, } from "@material-tailwind/react";
import { ChevronDownIcon , XMarkIcon, Bars3Icon,} from "@heroicons/react/24/solid";
import { signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react';
import { Menu, Transition  } from '@headlessui/react';

const Navbar = () => {
  const { data: session, status  } = useSession();

  
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [isMobileView, setIsMobileView] = React.useState(false);

  React.useEffect(() => {
    // Resize event listener
    console.log(session?.user.name);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // Change 1024 to the breakpoint you consider as mobile size
      if (window.innerWidth > 1024) {
          setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup functions for removing event listeners
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleLogout: () => void = async () => { // Specify handleLogout type
    signOut();
  };

  return (
    <MTNavbar shadow={false} fullWidth blurred={false} color={isScrolling ? "white" : "transparent"} className="fixed justify-center top-0 z-50 border-0" placeholder={""} >
      <nav className="flexBetween max-container padding-container relative z-30"> 
        <Typography placeholder={""} color={isScrolling ? "black" : "white"} className="text-xl font-bold" > Monterya </Typography>

        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white" }`} >
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regualr-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"> {link.lable}  </Link>
          ))}
        </ul>

        {session ? (
          <AuthenticatedNav session={session} handleLogout={handleLogout} />
        ) : (
          <UnauthenticatedNav />
        )}

        <IconButton variant="text" color={isScrolling ? "gray" : "white"} onClick={handleOpen} className="ml-auto inline-block lg:hidden" placeholder={""} >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </nav>
    </MTNavbar>
  );
}

const AuthenticatedNav = ({ session, handleLogout }: { session: any, handleLogout: () => void }) => { // Specify session and handleLogout types
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '1rem' }}>
      <div className="flex">
        <div className="relative">      
          <Button placeholder={""} className="relative px-4 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease">
            <span className="relative">Start Game</span>
          </Button>
        </div>
      </div>

      <Menu as="div" className="relative inline-block text-left">
        <div className="relative">
          <Menu.Button className="flex relative px-4 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease">
            {session.user?.name}
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="/profile" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}>Account settings</a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}>Support</a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}>Transaction</a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button type="submit" className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block w-full px-4 py-2 text-left text-sm`} onClick={handleLogout}>Sign out</button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {session.user?.image && (
        <div className="ml-2 rounded-full overflow-hidden">
          <img src={session.user.image} alt="User Image" className="w-12 h-12" />
        </div>
      )}
    </div>
  );
};

const UnauthenticatedNav = () => {
  return (
    <Link href="/login" passHref>
      <div className="relative">
        <Button placeholder={""} className="relative px-10 py-3 font-medium text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease">
          <span className="relative">Login</span>
        </Button>
      </div>
    </Link>
  );
};

export default Navbar;
