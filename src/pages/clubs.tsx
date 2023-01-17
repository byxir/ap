/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { characters } from "../types/characters";

import { api } from "../utils/api";
import { clubs } from "../utils/tempclubs";

interface Iplayer {
  image: string;
  name: string;
  clubName: string;
  pts: number;
  mainCharacter: number;
  achievement1?: {
    image: string;
    text: string;
  };
  achievement2?: {
    image: string;
    text: string;
  };
}

interface Iclub {
  id: string;
  name: string;
  image?: string;

  members?: Array<Iplayer>;
}

const Players: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [currentClub, setCurrentClub] = useState<Iclub | null>(null);

  return (
    <div className="grid h-screen w-full">
      <div className="grid h-screen grid-cols-[max-content_max-content] justify-between gap-12">
        <div className="grid h-screen grid-rows-[repeat(2,_max-content)] gap-12 overflow-auto  py-10 pl-12">
          <div className="mt-10 h-max text-4xl">Player Leaderboard</div>
          <div className="grid grid-cols-[260px_130px_150px] gap-8">
            <div className="grid h-12 grid-cols-[max-content_auto] items-center gap-4 rounded-full bg-accentElement px-4 text-subtext">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                placeholder="Search"
                className="h-full w-full rounded-r-full border-none bg-accentElement text-lg text-white placeholder-subtext outline-none"
              />
            </div>
            <div className="text-md grid h-12 cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-center gap-4 rounded-full bg-accentElement not-italic text-subtext shadow-md">
              <p>Rank</p>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="text-md grid h-12 cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-center gap-2 rounded-full bg-accentElement not-italic text-subtext shadow-md">
              <p>Legends</p>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-6 grid w-max max-w-6xl auto-cols-max grid-cols-3 gap-12 px-2">
            {clubs.map((c, index) => (
              <Link
                href={`/players/${c.id}`}
                className="grid h-72 w-80 cursor-pointer grid-rows-[repeat(3,_max-content)] rounded-4xl bg-accentElement shadow-md outline-none outline-offset-0 transition-all hover:shadow-transparent hover:outline-2 hover:outline-white"
                key={c.id}
                onMouseOver={() => {
                  setCurrentClub(null);
                }}
              >
                <div className="h-28 w-full">
                  <img
                    src={c.image}
                    alt="club image"
                    className="h-full w-full rounded-t-4xl object-cover"
                  />
                </div>
                <div className="mx-6 grid border-b-2 border-subline bg-accentElement py-4 text-2xl">
                  {c.name}
                </div>
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-[repeat(2,_max-content)] items-center gap-2 px-6 py-4">
                    <div className="text-5xl font-bold not-italic text-accentSolid">
                      9
                    </div>
                    <div className="w-20 text-sm text-subtext">
                      <div>Average level</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[repeat(2,_max-content)] items-center gap-2">
                    <div className="text-end text-sm text-subtext">
                      <div>{c.members.length}</div>
                      <div>members</div>
                    </div>
                    <div className="relative grid items-center">
                      <div className="absolute h-10 w-10 rounded-full">
                        <img
                          src={c.members[0]?.image}
                          className="h-full w-full rounded-full object-cover"
                          alt="member profile picture"
                        />
                      </div>
                      <div className="absolute left-1 h-11 w-11 rounded-full bg-accentElement" />
                      <div className="absolute left-2 h-10 w-10 rounded-full">
                        <img
                          src={c.members[1]?.image}
                          className="h-full w-full rounded-full object-cover"
                          alt="member profile picture"
                        />
                      </div>
                      <div className="absolute left-3 h-11 w-11 rounded-full bg-accentElement" />
                      <div className="absolute left-4 h-10 w-10 rounded-full">
                        <img
                          src={c.members[2]?.image}
                          className=" h-full w-full rounded-full object-cover"
                          alt="member profile picture"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid h-screen w-104 max-w-md content-center items-center justify-items-center gap-14 self-end border-l-2 border-subline p-14">
          {currentClub && <></>}
        </div>
      </div>
    </div>
  );
};

export default Players;
