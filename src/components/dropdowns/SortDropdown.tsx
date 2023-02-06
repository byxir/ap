/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronRightIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

const SortDropdown = ({
  sortMethod,
  changeSortMethod,
}: {
  sortMethod: number;
  changeSortMethod: (newSortMethod: number) => void;
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="">
        <Menu.Button className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accentElement px-6 py-2 font-mon font-semibold text-subtext shadow-md transition-all hover:bg-neutral-900">
          Sort by
          <ChevronRightIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute -top-12 left-full z-10 ml-4 mt-2 w-56 origin-top-right divide-y divide-subline rounded-md bg-accentElement shadow-md">
          <div className="py-1">
            <Menu.Item>
              <div
                onClick={() => changeSortMethod(1)}
                className="group grid cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-between px-4 py-2 text-sm text-subtext hover:text-white"
              >
                <div className="flex w-max">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 group-hover:text-subtext"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                  AP Rank
                </div>
                {sortMethod === 1 && (
                  <div className="h-3 w-3 rounded-full bg-accentSolid"></div>
                )}
              </div>
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              <div
                onClick={() => changeSortMethod(2)}
                className="group grid cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-between px-4 py-2 text-sm text-subtext hover:text-white"
              >
                <div className="flex w-max">
                  <img
                    src="../../../skull-bold.svg"
                    alt="k/d icon"
                    className="mr-3 h-5 w-5 group-hover:text-white"
                  />
                  K/D
                </div>
                {sortMethod === 2 && (
                  <div className="h-3 w-3 rounded-full bg-accentSolid" />
                )}
              </div>
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              <div
                onClick={() => changeSortMethod(3)}
                className="group grid cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-between px-4 py-2 text-sm text-subtext hover:text-white"
              >
                <div className="flex w-max">
                  <img
                    src="../../../skull-bold.svg"
                    alt="k/d icon"
                    className="mr-3 h-5 w-5 group-hover:text-white"
                  />
                  Total kills
                </div>
                {sortMethod === 3 && (
                  <div className="grid h-3 w-full justify-items-end">
                    <div className="h-3 w-3 rounded-full bg-accentSolid"></div>
                  </div>
                )}
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortDropdown;

//finish checkboxes
