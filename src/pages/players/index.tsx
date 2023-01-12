/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { characters } from "../../types/characters";

import { api } from "../../utils/api";
import { players } from "../../utils/tempplayers";

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

const Players: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [currentPlayer, setCurrentPlayer] = useState<Iplayer | null>({
    image: "../../wraith.png",
    name: "byxir",
    clubName: "Taras&Stas",
    pts: 387,
    mainCharacter: 5,
    achievement1: {
      image: "../../predator.png",
      text: "GRINDER",
    },
    achievement2: {
      image: "../../master.png",
      text: "Ranked Good",
    },
  });

  return (
    <div className="grid h-screen w-full">
      <div className="grid h-screen grid-cols-[max-content_auto] gap-12">
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
            <div className="text-md grid h-12 grid-cols-[repeat(2,_max-content)] items-center justify-center gap-4 rounded-full bg-accentElement not-italic text-subtext shadow-md">
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
            <div className="text-md grid h-12 grid-cols-[repeat(2,_max-content)] items-center justify-center gap-2 rounded-full bg-accentElement not-italic text-subtext shadow-md">
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
          <div className="mt-6 grid w-max max-w-6xl auto-cols-max grid-cols-5 gap-8 px-2">
            {players.map((p, index) => (
              <Link
                href={`/players/${p.id}`}
                className="grid h-60 w-48 cursor-pointer grid-rows-[7fr_3fr] rounded-4xl bg-accentElement px-6 pt-6 pb-3 shadow-md outline-none outline-offset-0 hover:shadow-transparent hover:outline-2 hover:outline-white"
                key={p.id}
                onMouseOver={() => {
                  setCurrentPlayer({
                    image: p.image,
                    name: p.name,
                    clubName: p.clubName,
                    pts: p.pts,
                    mainCharacter: p.mainCharacter,
                    achievement1: p.achievement1,
                    achievement2: p.achievement2,
                  });
                }}
              >
                <div className="grid grid-rows-2 justify-items-center gap-2">
                  <div className="h-16 w-16">
                    <img
                      src={p.image}
                      alt="player profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="grid grid-rows-[repeat(2,_max-content)] justify-items-center">
                    <div className="h-max text-xl">{p.name}</div>
                    <div className="text-md h-max text-subtext">
                      {p.clubName}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-subline">
                  <div className="grid items-center justify-items-center text-2xl">
                    #{index + 1}
                  </div>
                  <div className="grid items-center">
                    <img src={`${p.mainCharacter}.png`} />
                  </div>
                  <div className="grid items-center justify-items-center text-4xl not-italic text-accentSolid">
                    9
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid h-screen w-full content-center items-center justify-items-center gap-14 border-l-2 border-subline p-8">
          {currentPlayer && (
            <>
              <div className="grid h-max w-full items-center justify-items-center gap-10 text-center">
                <div className="h-56 w-56">
                  <img
                    src="../../wraith.png"
                    className="h-full w-full rounded-full object-cover"
                    alt="player profile picture"
                  />
                </div>
                <div className="grid gap-6">
                  <div className="text-4xl text-white">
                    {currentPlayer.name}
                  </div>
                  <div className="text-2xl text-subtext">
                    {currentPlayer.clubName}
                  </div>
                </div>
              </div>
              <div className="grid w-full justify-center">
                <div className="mb-8 w-full text-start text-2xl">Info</div>
                <div className="grid grid-cols-[repeat(2,_max-content)] grid-rows-2 gap-6">
                  <div className="grid h-48 w-36 grid-rows-[repeat(3,_max-content)] content-center justify-items-center rounded-3xl bg-accentElement p-4">
                    <div className="text-7xl not-italic text-accentSolid">
                      9
                    </div>
                    <div className="mt-1 h-2 w-20 rounded-full bg-black">
                      <div
                        className="h-full rounded-l-full bg-accentSolid"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                    <div className="mt-4 text-2xl">{currentPlayer.pts}pts</div>
                  </div>
                  <div className="grid h-48 w-36 grid-rows-[max-content_auto] justify-items-center rounded-3xl bg-accentElement p-4 pt-5">
                    <div className="h-24 w-24">
                      <img
                        src={`${currentPlayer.mainCharacter}.png`}
                        className="h-full w-full object-cover"
                        alt="main legend picture"
                      />
                    </div>
                    <div className="grid h-full items-center text-2xl text-white">
                      {characters[currentPlayer.mainCharacter - 1]}
                    </div>
                  </div>
                  {currentPlayer.achievement1 && (
                    <div className="grid h-48 w-36 grid-rows-[max-content_auto] justify-items-center gap-2 rounded-3xl bg-accentElement px-4 pb-4 pt-5">
                      <div className="h-24 w-24">
                        <img
                          src={currentPlayer.achievement1.image}
                          alt="achievement image"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="grid h-full items-center text-center text-xl">
                        {currentPlayer.achievement1.text}
                      </div>
                    </div>
                  )}
                  {currentPlayer.achievement2 && (
                    <div className="grid h-48 w-36 grid-rows-[max-content_auto] justify-items-center gap-2 rounded-3xl bg-accentElement px-4 pb-4 pt-5">
                      <div className="h-24 w-24">
                        <img
                          src={currentPlayer.achievement2.image}
                          alt="achievement image"
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                      <div className="grid h-full items-center text-center text-xl">
                        {currentPlayer.achievement2.text}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
