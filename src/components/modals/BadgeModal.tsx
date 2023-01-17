import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface IBadgeModal {
  open: boolean;
  closeModal: () => void;
  badges: Array<{
    image: string;
    text: string;
  }>;
}

const BadgeModal = ({ open, closeModal, badges }: IBadgeModal) => {
  const [infoMenuOpen, setInfoMenuOpen] = useState({
    open: false,
    id: "",
  });

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
              <Dialog.Panel className="text-4 relative grid transform grid-flow-col grid-rows-2 gap-12 overflow-hidden rounded-4xl bg-bg p-10 text-left font-mon font-semibold shadow-xl transition-all">
                {badges.map((b) => (
                  <div
                    onMouseOver={() =>
                      setInfoMenuOpen({ open: true, id: b.text })
                    }
                    onMouseOut={() => setInfoMenuOpen({ open: false, id: "" })}
                    className="relative grid h-40 w-36 justify-items-center gap-1 rounded-4xl bg-accentElement p-3 shadow-md"
                    key={b.text}
                  >
                    <div className="h-20 w-20">
                      <img
                        src={b.image}
                        alt="badge image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="grid text-center text-xl">{b.text}</div>

                    {/* finish this */}

                    {infoMenuOpen.open && infoMenuOpen.id === b.text ? (
                      <div className="absolute"></div>
                    ) : null}
                  </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BadgeModal;
