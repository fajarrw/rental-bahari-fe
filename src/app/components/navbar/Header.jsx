"use client";

import {useContext, useEffect, useState} from "react";

import {Link} from "react-scroll";

import {useMediaQuery} from "react-responsive";

import {AiFillCar} from "react-icons/ai";

import {BiMenuAltRight, BiX} from "react-icons/bi";

import {BsPersonCircle} from "react-icons/bs";

import {SearchContext} from "@/app/context/search";

import Person from "./Person";

import {useGetRole} from "@/hooks/useCookies";

function HeaderLoggedIn() {
  const {setSearchActive} = useContext(SearchContext);

  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);

  return (
    <header
      id="navbarx"
      className="bg-[#045757] shadow-md py-5 w-full max-w-[1920px] mx-auto z-20 transition-all duation-300"
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="xl:max-w-[203px] cursor-pointer flex flex-row items-center gap-3"
          >
            <AiFillCar className="text-[#E4E4E4] text-4xl" />

            <div className="text-xl hidden md:block font-bold text-[#E4E4E4] cursor-pointer">
              Rental Bahari
            </div>
          </Link>

          <div className="xl:hidden flex flex-row justify-center gap-2">
            <div className="h-[36px] flex flex-row items-center px-2">
              <Link
                className="h-[36px] cursor-pointer mx-auto text-[#E4E4E4]"
                to="/"
                activeClass="active"
                smooth={desktopMode}
                spy={true}
              >
                <Person />
              </Link>
            </div>

            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer xl:hidden"
            >
              {nav ? (
                <BiX className="text-4xl text-white" />
              ) : (
                <BiMenuAltRight className="text-4xl text-white" />
              )}
            </div>
          </div>
        </div>

        <nav
          onClick={() => setNav(!nav)}
          className={`${
            nav
              ? " max-h-max py-8 px-4 xl:py-0 xl:px-0"
              : "max-h-0 xl:max-h-max"
          }  flex absolute top-16 -left-0 z-30 xl:static w-full flex-col items-center bg-dark-green-1 gap-y-8 overflow-hidden xl:overflow-visible font-bold 
        xl:font-medium xl:flex-row xl:w-max xl:gap-x-12 xl:h-max xl:bg-transparent
        xl:pb-0 transition-all duration-150 text-center xl:text-left 
        text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            to="homex"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>

          <Link
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            to="aboutx"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why Us
          </Link>

          <a
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            href="/search-car"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </a>
        </nav>

        <div className="flex w-[203px] h-[36px] flex-row items-center gap-4 xl:flex ">
          <Link
            className="h-[36px] cursor-pointer hidden xl:block ml-auto text-[#E4E4E4]"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            <Person />
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeaderNotLoggedIn() {
  const {setSearchActive} = useContext(SearchContext);

  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);

  return (
    <header
      id="navbar"
      className="bg-dark-green-1 shadow-md py-5 w-full max-w-[1920px] mx-auto z-20 transition-all duation-300"
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className=" cursor-pointer flex flex-row items-center gap-3"
          >
            <AiFillCar className="text-[#E4E4E4] text-4xl" />

            <div className="text-xl hidden md:block font-bold text-[#E4E4E4] cursor-pointer">
              Rental Bahari
            </div>
          </Link>

          <div className="xl:hidden flex flex-row justify-center gap-4">
            <div className="flex flex-row items-center gap-4 ">
              <div className="border-2 bg-transparent rounded-xl px-3 py-1 cursor-pointer hover:bg-dark-green-2">
                <a
                  className=" cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-200"
                  href="/login"
                  activeClass="active"
                  smooth={desktopMode}
                  spy={true}
                >
                  Log In
                </a>
              </div>

              <BsPersonCircle className=" hidden  text-3xl text-[#E4E4E4]" />

              <div className="hidden border-2 bg-transparent rounded-xl px-3 py-1 cursor-pointer hover:bg-dark-green-2">
                <a
                  className="cursor-pointer mx-auto text-[#E4E4E4]"
                  href="/register"
                  activeClass="active"
                  smooth={desktopMode}
                  spy={true}
                >
                  Sign Up
                </a>
              </div>
            </div>

            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer xl:hidden"
            >
              {nav ? (
                <BiX className="text-4xl text-white" />
              ) : (
                <BiMenuAltRight className="text-4xl text-white" />
              )}
            </div>
          </div>
        </div>

        <nav
          onClick={() => setNav(!nav)}
          className={`${
            nav
              ? " max-h-max py-8 px-4 xl:py-0 xl:px-0"
              : "max-h-0 xl:max-h-max"
          }  flex absolute top-16 -left-0 z-30 xl:static w-full flex-col items-center bg-dark-green-1 gap-y-8 overflow-hidden xl:overflow-visible font-bold 
                xl:font-medium xl:flex-row xl:w-max xl:gap-x-12 xl:h-max xl:bg-transparent
                xl:pb-0 transition-all duration-150 text-center xl:text-left 
                text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>

          <Link
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why Us
          </Link>

          <a
            onClick={() => setNav(!nav)}
            className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-500"
            href="/search-car"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </a>
        </nav>

        <div className="flex flex-row items-center gap-4 xl:flex px-4">
          <div className="border-2 bg-transparent rounded-xl px-3 py-1 cursor-pointer hover:bg-dark-green-2">
            <a
              className="cursor-pointer mx-auto text-[#E4E4E4] hover:text-gray-200"
              href="/login"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              Log In
            </a>
          </div>

          <BsPersonCircle className=" hidden text-3xl text-[#E4E4E4]" />

          <div className="hidden md:block border-2 bg-white text-black rounded-xl px-3 py-1 cursor-pointer hover:bg-dark-green-2">
            <a
              className="cursor-pointer mx-auto text-black"
              href="/register"
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header() {
  const [isUser, setIsUser] = useState(false);

  const getRole = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const role = await useGetRole();
    if (role?.value == "user") {
      setIsUser(true);
    }
    console.log({isUser});
  };

  useEffect(() => {
    getRole();
  }, []);

  return <>{isUser ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}</>;
}
