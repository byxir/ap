/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import SortDropdown from "../../components/dropdowns/SortDropdown";
import { characters } from "../../types/characters";

import { api } from "../../utils/api";
import type { User } from "@prisma/client";
import Spinner from "../../components/commons/spinner";
import { useRouter } from "next/router";
import PlayerPagination from "../../components/playerPagination";

const Players: NextPage = () => {
  const [currentPlayer, setCurrentPlayer] = useState<User>();

  const { query } = useRouter();

  const count = api.players.getCount.useQuery();

  const players = api.players.getBatch.useQuery({
    skip: (query.page ? Number(query.page) - 1 : 0) * 120,
  });

  return (
    <div className="grid h-screen w-full">
      <div className="grid h-screen grid-cols-[auto_max-content] gap-12">
        <div className="grid h-screen w-full grid-rows-[repeat(2,_max-content)] gap-12 overflow-auto py-10 pl-12">
          <div className="mt-10 h-max text-4xl">Player Leaderboard</div>
          <div className="grid grid-cols-[260px_140px] gap-8">
            <div className="grid h-12 grid-cols-[max-content_max-content] items-center gap-4 rounded-full bg-accentElement px-4 text-subtext">
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
            <SortDropdown />
          </div>
          {players.isLoading ? (
            <div className="mt-16 grid w-full justify-items-center">
              <Spinner />
            </div>
          ) : (
            <div className="mt-6 grid w-max max-w-6xl auto-cols-max grid-cols-5 gap-8 px-2">
              {players.data?.map((p: User, index: number) => (
                <Link
                  href={`/players/${p.id}`}
                  className="grid h-64 w-48 cursor-pointer grid-rows-[7fr_3fr] rounded-4xl bg-accentElement px-6 pt-6 pb-3 text-center shadow-md outline-none outline-offset-0 transition-all hover:shadow-transparent hover:outline-2 hover:outline-white"
                  key={p.id}
                  onMouseOver={() => {
                    setCurrentPlayer({
                      id: p.id,
                      email: p.email,
                      image: p.image,
                      name: p.name,
                      clubId: p.clubId,
                      pts: p.pts,
                      mainLegend: p.mainLegend,
                      kd: p.kd,
                      totalKills: p.totalKills,
                      role: p.role,
                      clubName: p.clubName,
                    });
                  }}
                >
                  <div className="grid grid-rows-2 justify-items-center">
                    <div className="h-16 w-16">
                      <img
                        src={p.image ? p.image : "../../../apexlogowhite"}
                        alt="player profile picture"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    <div className="grid grid-rows-[repeat(2,_max-content)] justify-items-center">
                      <div
                        className={`h-8 w-36 break-words ${
                          p.name && p.name.length > 20
                            ? "text-xs"
                            : p.name.length > 10
                            ? "text-lg"
                            : "text-2xl"
                        }`}
                      >
                        {p.name}
                      </div>
                      <a
                        href={`clubs/${p.clubId}`}
                        className={`h-max text-subtext ${
                          p.clubName && p.clubName.length > 11
                            ? "text-sm"
                            : "text-md"
                        }`}
                      >
                        {p.clubName ? p.clubName : "No club"}
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t-2 border-subline">
                    <div
                      className={`grid items-center justify-items-center ${
                        index + (Number(query.page) - 1) * 120 + 1 > 99
                          ? "text-lg"
                          : "text-2xl"
                      }`}
                    >
                      #{index + (Number(query.page) - 1) * 120 + 1}
                    </div>
                    <div className="grid items-center">
                      {p.mainLegend !== 0 && p.mainLegend ? (
                        <img src={`${p.mainLegend}.png`} alt="main legend" />
                      ) : (
                        <div className="text-center text-xs text-subtext">
                          No main
                        </div>
                      )}
                    </div>
                    <div className="grid items-center justify-items-center text-4xl font-bold not-italic text-accentSolid">
                      9
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <PlayerPagination count={count.data} />
        </div>
        <div className="grid h-screen w-104 content-center items-center justify-items-center gap-14 border-l-2 border-subline p-14">
          {currentPlayer ? (
            <>
              <div className="grid h-max w-full items-center justify-items-center gap-10 text-center">
                <div className="h-56 w-56">
                  <img
                    src={
                      currentPlayer.image
                        ? currentPlayer.image
                        : "../../../apexlogowhite"
                    }
                    className="h-full w-full rounded-full object-cover"
                    alt="player profile picture"
                  />
                </div>
                <div className="grid gap-6">
                  <div className="text-4xl text-white">
                    {currentPlayer.name}
                  </div>
                  <a
                    href={`clubs/${currentPlayer.clubId}`}
                    className="text-2xl text-subtext"
                  >
                    {currentPlayer.clubName !== "" &&
                    currentPlayer.clubName &&
                    currentPlayer.clubId
                      ? currentPlayer.clubName
                      : "No club"}
                  </a>
                </div>
              </div>
              <div className="grid w-full justify-center">
                <div className="mb-8 w-full text-start text-2xl">Info</div>
                <div className="grid grid-cols-[repeat(2,_max-content)] grid-rows-2 gap-6">
                  <div className="grid h-48 w-36 grid-rows-[repeat(3,_max-content)] content-center justify-items-center rounded-3xl bg-accentElement p-4">
                    <div className="text-7xl font-bold not-italic text-accentSolid">
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
                  <div
                    className={`grid h-48 w-36 ${
                      currentPlayer.mainLegend
                        ? "grid-rows-[max-content_auto]"
                        : "grid-rows-1"
                    } items-center justify-items-center gap-2 rounded-3xl bg-accentElement p-4 pt-5`}
                  >
                    {currentPlayer.mainLegend ? (
                      <>
                        <div className="h-24 w-24">
                          <img
                            src={`${
                              currentPlayer.mainLegend
                                ? currentPlayer.mainLegend
                                : 0
                            }.png`}
                            className="h-full w-full object-cover"
                            alt="main legend picture"
                          />
                        </div>
                        <div
                          className={`grid h-full items-center text-center text-white ${
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            characters[currentPlayer.mainLegend - 1].length > 8
                              ? "text-lg"
                              : "text-2xl"
                          }`}
                        >
                          {characters[currentPlayer.mainLegend - 1]}
                        </div>
                      </>
                    ) : (
                      <div className="text-subtext">No main</div>
                    )}
                  </div>
                  <div className="grid h-48 w-36 grid-rows-[max-content_auto] content-center justify-items-center gap-4 rounded-3xl bg-accentElement px-4 pb-4 pt-5">
                    <div className="h-max w-24 self-center text-center text-5xl not-italic text-accentSolid">
                      {Number(currentPlayer.kd)}
                    </div>
                    <div className="grid h-max items-center text-center text-2xl">
                      K/D
                    </div>
                  </div>
                  <div className="grid h-48 w-36 grid-rows-[max-content_auto] content-center justify-items-center gap-5 rounded-3xl bg-accentElement px-4 pb-4 pt-5">
                    <div className="h-max w-24 self-center text-center text-5xl not-italic text-accentSolid">
                      {currentPlayer.totalKills}
                    </div>
                    <div className="grid h-max items-center text-center text-xl">
                      Total Kills
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-xl text-subtext">No player chosen</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Players;
