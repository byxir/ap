import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const LegendDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="">
        <Menu.Button className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accentElement px-4 py-2 font-mon font-semibold text-subtext shadow-md transition-all hover:bg-neutral-900 ">
          Legends
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-4 z-10 mt-2 w-56 origin-top-right divide-y divide-subline rounded-md bg-accentElement shadow-md">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className={classNames(
                  "text-subtext",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <HeartIcon
                  className="mr-3 h-5 w-5 text-subtext group-hover:text-subtext"
                  aria-hidden="true"
                />
                Add to favorites
              </a>
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className={classNames(
                  "text-subtext",
                  "group flex items-center px-4 py-2 text-sm"
                )}
              >
                <TrashIcon
                  className="mr-3 h-5 w-5 text-subtext group-hover:text-subtext"
                  aria-hidden="true"
                />
                Delete
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LegendDropdown;
