import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

const items = [
  {
    name: "Contacto",
    href: "./Contacto",
    icon: ChartBarIcon,
  },
  {
    name: "Home",
    href: "/",
    icon: CalendarIcon,
  },
  {
    name: "About",
    href: "./About",
    icon: BookmarkAltIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Menu() {
  return <></>;
}

export default Menu;
