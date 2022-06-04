import React from "react";
import { Link } from "react-router-dom";
import { IoIosPerson, IoIosMenu } from "react-icons/io";
import { AiOutlinePhone, AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import DecuNavbar from "../../assets/DecumanusNavbar.png";
import "./Navbar.css";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { usuarioMail } from '../Login/Login.jsx'

const solutions = [
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
    localStorage.setItem("estaLogueado", "false");
    navigate("/");
  }


  return (
    <nav className="absolute z-10 transform bg-transparent flex justify-between items-center w-screen h-20 bg-sky-200 text-gray-700">
      <Link to="/">
        <img
          className="w-26 h-14 sm:pl-4 sm:w-30 sm:h-16 mb-2"
          src={DecuNavbar}
          alt="DecuNavbar"
        />
      </Link>

      <div className="flex justify-between items-center w-20 sm:w-24 md:w-36 pr-4 sm:pr-8 md:pr-20">
        {/* <a href='/About' className='LoginNavbar rounded-md hover:bg-blue-500'> <IoIosMenu size={25} /> </a> */}
        <Popover className="relative">
          {() => (
            <>
              <Popover.Button className="botonMenu pt-2">
                <IoIosMenu
                  className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer"
                  size={25}
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
                <Popover.Panel className="absolute z-10 -ml-40 mt-1 transform px-2 w-screen max-w-md sm:px-0 lg:w-64 ">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      {solutions.map((item) => (
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

        {localStorage.getItem("estaLogueado") === "true" ? ( // Operador ternario --> es un IF simplificado
          <>
            <p className="font-bold">{usuarioMail(setEmail)}</p>
            <button
              onClick={() => handleLogOut()}
              className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer"
            >
              {" "}
              <MdOutlineLogout size={25} />{" "}
            </button>
          </>
        ) : (
          <a
            href="/login"
            className="LoginNavbar rounded-md hover:bg-blue-500 cursor-pointer"
          >
            {" "}
            <IoIosPerson size={25} />{" "}
          </a>
        )}
      </div>
    </nav>
  );
}
