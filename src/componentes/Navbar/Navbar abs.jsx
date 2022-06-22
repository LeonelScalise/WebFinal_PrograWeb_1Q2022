import React from "react";
import { Link } from "react-router-dom";
import { IoIosPerson, IoIosMenu } from "react-icons/io";
import { AiOutlinePhone, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import DecuNavbar from "../../assets/DecumanusNavFoot.png";
import "./Navbar.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { usePosicionScroll } from "../../Hooks/usePosicionScroll";

const contenidoMenu = [
  {
    name: "Contacto",
    href: "./Contacto",
    icon: AiOutlinePhone,
  },
  {
    name: "About",
    href: "./About",
    icon: AiOutlineInfoCircle,
  },
];

export function Navbar() {
  const navigate = useNavigate();

  function handleLogOut() {
    sessionStorage.setItem("estaLogueado", "false");
    navigate("/");
  }

  const posicionScroll = usePosicionScroll();

  return (
    <nav
      className={`text-gray-700 w-full font-sans z-10 ${
        posicionScroll > 50
          ? "flex justify-center items-center fixed top-4 h-16 m-auto "
          : "absolute bg-transparent h-28"
      }`}
    >
      <div
        className={`flex flex-wrap sm:flex-nowrap justify-between items-center ${
          posicionScroll > 50
            ? "w-11/12 bg-white rounded-sm shadow-xl bg-gradient-to-r from-blue-400 to-cyan-300 "
            : ""
        }`}
      >
        <Link to="/">
          <img
            className="w-26 h-14 mr-6 sm:pl-4 sm:w-30 sm:h-16 mb-2 md:ml-32 mx-auto"
            src={DecuNavbar}
            alt="DecuNavbar"
          />
        </Link>

        <div className="flex justify-center items-center w-20 mr-10 sm:mr-20 sm:w-24 md:w-36 pr-4 sm:pr-8 md:pr-20 md:mr-20 mx-auto">
          {sessionStorage.getItem("estaLogueado") === "true" ? ( // Operador ternario --> es un IF simplificado
            <>
              <p className="font-bold mr-2 sm:mr-4 md:mr-6">
                {sessionStorage.getItem("usuario")}
              </p>
              <button
                onClick={() => handleLogOut()}
                className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer mr-2 sm:mr-4 md:mr-6"
              >
                {" "}
                <MdOutlineLogout size={30} />{" "}
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer mr-2 sm:mr-4 md:mr-6"
            >
              {" "}
              <IoIosPerson size={30} />{" "}
            </a>
          )}
          <Popover className="relative">
            {() => (
              <>
                <Popover.Button className="botonMenu pt-2">
                  <IoIosMenu
                    className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer"
                    size={30}
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-32 w-52 md:-ml-52 mt-1 transform px-2 w-screen max-w-md sm:px-0 lg:w-64 ">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {contenidoMenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-blue-500"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </nav>
  );
}
