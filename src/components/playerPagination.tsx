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
  const endPage = Math.ceil(count ? count / 1 : 10);
  const [currentPage, setCurrentPage] = useState(60);

  const [dotsLeft, setDotsLeft] = useState(false);
  const [dotsRight, setDotsRight] = useState(false);
  const [rightValue, setRightValue] = useState<number | null>(5);
  const [centerValue, setCenterValue] = useState<number | null>(4);
  const [leftValue, setLeftValue] = useState<number | null>(3);

  const getLeftDots = () => {
    if (currentPage > 4 && endPage > 7) {
      return true;
    } else {
      return false;
    }
  };

  const getRightDots = () => {
    if (currentPage < endPage - 3 && endPage > 7) {
      return true;
    } else {
      return false;
    }
  };

  const getCenterValue = () => {
    if (currentPage > 4 && currentPage < endPage - 3) {
      return currentPage;
    } else if (currentPage < endPage - 3) {
      return 4;
    } else if (currentPage > 4) {
      return endPage - 3;
    } else {
      return 4;
    }
  };

  const getLeftValue = () => {
    if (currentPage > 4 && currentPage < endPage - 3) {
      return currentPage - 1;
    } else if (currentPage < endPage - 3) {
      return 3;
    } else if (currentPage > 4) {
      return endPage - 4;
    } else {
      return 3;
    }
  };

  const getRightValue = () => {
    if (currentPage > 4 && currentPage < endPage - 3) {
      return currentPage + 1;
    } else if (currentPage < endPage - 3) {
      return 5;
    } else if (currentPage > 4) {
      return endPage - 2;
    } else {
      return 5;
    }
  };

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
        {endPage > 1 && (
          <a
            href={
              getLeftDots()
                ? `players?page=${Math.ceil(currentPage / 2)}`
                : "players?page=2"
            }
            className="inline-flex items-center border-t-2 border-accentSolid px-4 pt-4 text-lg font-medium text-accentSolid"
            aria-current="page"
          >
            {getLeftDots() ? "..." : "2"}
          </a>
        )}
        {endPage > 2 && (
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
          >
            {getLeftValue()}
          </a>
        )}
        {endPage > 3 && (
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
          >
            {getCenterValue()}
          </a>
        )}
        {endPage > 4 && (
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
          >
            {getRightValue()}
          </a>
        )}
        {endPage > 5 && (
          <a
            href={
              getRightDots()
                ? `players?page=${
                    currentPage + Math.floor((endPage - currentPage) / 2)
                  }`
                : "players?page=2"
            }
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
          >
            {getRightDots() ? "..." : endPage > 6 ? endPage - 1 : 6}
          </a>
        )}
        {endPage > 6 && (
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-lg font-medium text-subtext hover:border-subline hover:text-gray-700"
          >
            {endPage}
          </a>
        )}
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
