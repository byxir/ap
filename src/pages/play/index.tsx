/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

import { api } from "../../utils/api";
import { scrims } from "../../utils/tempscrims";

const Play: NextPage = () => {
  const [scrimCategory, setScrimCategory] = useState(0);

  return (
    <div className="grid w-full">
      <div className="grid h-screen items-center justify-items-center">
        <div className="grid justify-items-center">
          <div className="mt-32 mb-12 grid grid-cols-[repeat(2,_max-content)]">
            <div
              onClick={() => setScrimCategory(0)}
              className={`cursor-pointer border-r-2 border-subline pr-10 text-5xl ${
                scrimCategory === 1 ? "text-subtext" : "text-white"
              }`}
            >
              Upcoming Scrims
            </div>
            <div
              onClick={() => setScrimCategory(1)}
              className={`cursor-pointer pl-10 text-5xl ${
                scrimCategory === 0 ? "text-subtext" : "text-white"
              }`}
            >
              Past Scrims
            </div>
          </div>
          {scrimCategory === 0
            ? scrims
                .filter((s) => s.category === 0)
                .map((s) => (
                  <Link
                    href={`/play/${s.id}`}
                    className="mb-8 grid h-44 max-w-4xl cursor-pointer grid-cols-[1fr_2fr_1fr] rounded-4xl bg-accentElement  not-italic shadow-md"
                    key={s.id}
                  >
                    <div className="">
                      <img
                        src={s.image}
                        alt="scrim picture"
                        className="h-full w-full rounded-l-4xl object-cover"
                      />
                    </div>
                    <div className="grid grid-rows-2 gap-6 p-8">
                      <div className="text-3xl text-white">{s.title}</div>
                      <div className="text-md text-subtext">
                        {s.description}
                      </div>
                    </div>
                    <div className="mr-10 grid justify-items-center">
                      <div className="mt-8 text-lg text-subtext">{s.date}</div>
                      <div className="grid h-16 w-16 cursor-pointer items-center justify-items-center rounded-xl bg-gradient-to-br from-accentSolid via-pink-600 to-fuchsia-600 transition-all hover:opacity-75">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-9 w-9"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))
            : scrims
                .filter((s) => s.category === 1)
                .map((s) => (
                  <Link
                    href={`/play/${s.id}`}
                    className="mb-8 grid h-44 max-w-4xl cursor-pointer grid-cols-[1fr_2fr_1fr] rounded-4xl bg-accentElement  not-italic shadow-md"
                    key={s.id}
                  >
                    <div className="">
                      <img
                        src={s.image}
                        alt="scrim picture"
                        className="h-full w-full rounded-l-4xl object-cover"
                      />
                    </div>
                    <div className="grid grid-rows-2 gap-6 p-8">
                      <div className="text-3xl text-white">{s.title}</div>
                      <div className="text-md text-subtext">
                        {s.description}
                      </div>
                    </div>
                    <div className="mr-10 grid justify-items-center">
                      <div className="mt-8 text-lg text-subtext">{s.date}</div>
                      <div className="grid h-16 w-16 cursor-pointer items-center justify-items-center rounded-xl bg-gradient-to-br from-accentSolid via-pink-600 to-fuchsia-600 transition-all hover:opacity-75">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-9 w-9"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Play;
