import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PlayerPagination({
  count,
}: {
  count: number | undefined;
}) {
  const endPage = Math.ceil(count ? count / 1 : 10);
  const [currentPage, setCurrentPage] = useState(1);

  const { query } = useRouter();

  useEffect(() => {
    setCurrentPage(Number(query.page));
  }, [query.page]);

  const getLeftDots = () => {
    if (currentPage > 4 && endPage > 7) {
      return true;
    } else {
      return false;
    }
  };

  const getRightDots = () => {
    if ((currentPage < endPage - 3 && endPage > 7) || !currentPage) {
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
    <nav className="flex h-max items-center justify-between border-t-2 border-subline px-4 text-subtext sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        {currentPage > 1 && (
          <Link
            href={`players?page=${currentPage > 1 ? currentPage - 1 : 1}`}
            className="group inline-flex items-center pt-4 pr-1 text-lg font-medium text-subtext hover:text-white"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-subtext group-hover:text-white"
              aria-hidden="true"
            />
            Previous
          </Link>
        )}
      </div>
      <div className="hidden md:-mt-px md:flex">
        <Link
          href="players?page=1"
          className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
            currentPage === 1
              ? "border-t-2 border-accentSolid text-accentSolid"
              : "hover:text-white"
          }`}
        >
          1
        </Link>
        {endPage > 1 && (
          <Link
            href={
              getLeftDots()
                ? `players?page=${Math.ceil(currentPage / 2)}`
                : "players?page=2"
            }
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium ${
              currentPage === 2
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
            aria-current="page"
          >
            {getLeftDots() ? "..." : "2"}
          </Link>
        )}
        {endPage > 2 && (
          <Link
            href={`players?page=${getLeftValue()}`}
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
              currentPage === 3
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
          >
            {getLeftValue()}
          </Link>
        )}
        {endPage > 3 && (
          <Link
            href={`players?page=${getCenterValue()}`}
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
              currentPage === 4 ||
              currentPage === endPage - 3 ||
              (currentPage > 4 && currentPage < endPage - 3)
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
          >
            {getCenterValue()}
          </Link>
        )}
        {endPage > 4 && (
          <Link
            href={`players?page=${getRightValue()}`}
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
              currentPage === endPage - 2
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
          >
            {getRightValue()}
          </Link>
        )}
        {endPage > 5 && (
          <Link
            href={
              getRightDots()
                ? `players?page=${
                    currentPage + Math.floor((endPage - currentPage) / 2)
                  }`
                : "players?page=2"
            }
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
              currentPage === endPage - 1
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
          >
            {getRightDots() ? "..." : endPage > 6 ? endPage - 1 : 6}
          </Link>
        )}
        {endPage > 6 && (
          <Link
            href={`players?page=${endPage}`}
            className={`inline-flex items-center px-4 pt-4 text-lg font-medium hover:border-subline ${
              currentPage === endPage
                ? "border-t-2 border-accentSolid text-accentSolid"
                : "hover:text-white"
            }`}
          >
            {endPage}
          </Link>
        )}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        {currentPage < endPage && (
          <Link
            href={`players?page=${
              currentPage < endPage ? currentPage + 1 : endPage
            }`}
            className="group inline-flex items-center pt-4 pl-1 text-lg font-medium text-subtext hover:text-white"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-subtext group-hover:text-white"
              aria-hidden="true"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}
