import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Toggler from "../InviteOnlyToggler";

interface IBadgeModal {
  open: boolean;
  closeModal: () => void;
}

const CreateClubModal = ({ open, closeModal }: IBadgeModal) => {
  const [clubName, setClubName] = useState("");

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="text-4 relative grid transform grid-flow-col overflow-hidden rounded-4xl bg-bg p-10 text-left font-mon font-semibold shadow-xl transition-all">
                <div className="grid justify-items-center gap-8">
                  <div className="grid h-32 w-60 cursor-pointer grid-rows-[repeat(2,_max-content)] content-center items-center justify-items-center gap-4 rounded-xl border-2 border-dashed border-subline text-subtext transition-all hover:bg-neutral-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    Add club image
                  </div>
                  <div className="h-10 w-full rounded-xl border-2 border-subline">
                    <input
                      value={clubName}
                      onChange={(e) => setClubName(e.target.value)}
                      className="h-full w-full rounded-xl border-none bg-bg px-3 italic placeholder-subtext outline-none"
                      placeholder="Club Name"
                    />
                  </div>
                  <div className="grid items-center justify-items-center gap-2 text-subtext">
                    Invite only <Toggler />
                  </div>
                  <div className="grid grid-cols-[repeat(2,_max-content)] justify-center gap-8 pt-4">
                    <div
                      onClick={() => {
                        setClubName("");
                        closeModal();
                      }}
                      className="grid h-12 w-28 cursor-pointer items-center  justify-items-center rounded-xl bg-accentElement text-lg shadow-md transition-all hover:bg-neutral-900"
                    >
                      Cancel
                    </div>
                    <div className="grid h-12 w-28 cursor-pointer items-center justify-items-center rounded-xl bg-gradient-to-r from-accentSolid via-pink-600 to-fuchsia-600 shadow-md transition-all hover:opacity-30">
                      Create
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CreateClubModal;
