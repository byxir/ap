import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function PlayerPagination({
  count,
}: {
  count: number | undefined;
}) {
  const endPage = Math.ceil(count ? count / 2 : 10);
  const [currentPage, setCurrentPage] = useState(30);

  const [dotsLeft, setDotsLeft] = useState(false);
  const [dotsRight, setDotsRight] = useState(true);
  const [centerValue, setCenterValue] = useState(4);

  useEffect(() => {
    if (currentPage >= 5 || (currentPage >= 3 && currentPage <= endPage - 3)) {
      setDotsLeft(true);
    } else {
      setDotsLeft(false);
    }

    if (currentPage <= 5 || (currentPage >= 2 && currentPage <= endPage - 3)) {
      setDotsRight(true);
    } else {
      setDotsRight(false);
    }

    if (dotsLeft) {
      setCenterValue(currentPage - 1);
    } else if (currentPage < 5) {
      setCenterValue(3);
    } else {
      setCenterValue(currentPage);
    }
  }, [currentPage]);

  return (
    <nav className="flex h-max items-center justify-between border-t border-subline px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-subtext"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-subtext hover:text-gray-700 hover:border-subline" */}
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-accentSolid px-4 pt-4 text-lg font-medium text-accentSolid"
          aria-current="page"
        >
          {dotsLeft ? "..." : "2"}
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          3
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          {centerValue}
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          5
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          {dotsRight ? "..." : endPage - 1}
        </a>
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          {endPage}
        </a>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-subtext"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
}
