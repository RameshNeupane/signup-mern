import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

import Bars from "./icons/Bars";
import { data } from "@assets/data/account-detail";

const MenuDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className=" w-10 h-10 p-2 border border-slate-600 rounded hover:bg-slate-600 flex items-center justify-center"
        title="Menu"
      >
        <Bars />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-2 mt-2 w-max origin-top-right px-6 py-3 border-2 border-slate-600 rounded-md flex flex-col gap-2 dark:bg-gray-600">
          <Menu.Item>
            {({ active }) => (
              <Link
                to={`/register`}
                className={`w-full p-2 border border-slate-800 rounded-md text-center text-b2 ${
                  active && "bg-slate-800"
                }`}
              >
                Create New Account
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                to={`/account/${data.username}/change-password`}
                className={`w-full p-2 border border-slate-800 rounded-md text-center text-b2 ${
                  active && "bg-slate-800"
                }`}
              >
                Change Password
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`w-full p-2 border border-slate-800 rounded-md text-b2 ${
                  active && "bg-slate-800"
                }`}
              >
                Delete Account
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleLogout}
                className={`w-full p-2 border border-slate-800 rounded-md text-b2 ${
                  active && "bg-slate-800"
                }`}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MenuDropdown;
