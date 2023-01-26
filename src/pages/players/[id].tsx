/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Spinner from "../../components/commons/spinner";
import BadgeModal from "../../components/modals/BadgeModal";
import RankDisplay from "../../components/RankDisplay";

import { api } from "../../utils/api";
import { badges } from "../../utils/tempbadges";
import { players } from "../../utils/tempplayers";
import { socials } from "../../utils/tempsocials";

const Player: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = api.players.getOne.useQuery(id as string);

  console.log("pid ->", id);

  if (user.data) {
    console.log(user);
  }

  const level = 9;

  const progress = 15;

  const [badgeModalOpen, setBadgeModalOpen] = useState(false);

  return (
    <div className="grid h-screen w-full">
      {user.isLoading ? (
        <div className="grid h-screen w-full items-center">
          <Spinner />
        </div>
      ) : user.data ? (
        <div className="grid h-screen grid-cols-[auto_max-content] gap-12">
          <div className="grid h-screen w-full grid-rows-[repeat(2,_max-content)] gap-12 overflow-auto py-10 pl-12">
            <div className="relative grid gap-14">
              <div className="row-span-1 grid h-64 grid-cols-[256px_auto_max-content]  gap-8">
                <div className="h-64 w-64">
                  <img
                    src={user.data.image ?? "../../apexlogowhite.png"}
                    className="h-full w-full rounded-full object-cover"
                    alt="player profile picture"
                  />
                </div>
                <div className="grid grid-rows-[repeat(2,_max-content)] content-center gap-4">
                  <div className="w-max cursor-pointer text-5xl hover:underline">
                    {user.data.name}
                  </div>
                  <div className="w-max cursor-pointer text-xl text-subtext hover:underline">
                    {user.data.clubId && user.data.clubId !== ""
                      ? user.data.clubId
                      : "No club"}
                  </div>
                </div>
                <div className="grid h-10 w-16 cursor-pointer items-center justify-items-center rounded-2xl bg-accentElement text-subtext shadow-md transition-all hover:bg-neutral-900">
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
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-[auto_max-content_auto] gap-12">
                <div className="grid h-60 w-full grid-rows-[max-content_auto] justify-items-center rounded-4xl bg-accentElement shadow-md">
                  <div className="w-max px-6 pt-4 pb-4 text-3xl">Socials</div>
                  <div className="grid auto-cols-max grid-flow-col grid-rows-[repeat(2,_max-content)] gap-4 px-6">
                    {socials.map((s) => (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={s}
                        className="h-16 w-16 rounded-xl"
                        key={s}
                      >
                        <img
                          src={
                            s.split("/")[2]
                              ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                                "../../../" + s.split("/")[2] + ".jpg"
                              : "../../../public/twitch.tv" + ".jpg"
                          }
                          className="h-full w-full rounded-xl object-cover"
                          alt="social image"
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="relative h-60 w-80 justify-self-center">
                  <RankDisplay
                    progress={progress}
                    pts={user.data.pts}
                    level={level}
                  />
                </div>
                <div className="grid h-60 w-full grid-cols-[5fr_3fr] items-center rounded-4xl bg-accentElement p-8 shadow-md">
                  <div className="grid w-max gap-8 justify-self-center pr-4 text-2xl">
                    <div className="grid grid-cols-[repeat(2,_max-content)] justify-end gap-4 text-end">
                      <div className="text-white">K/D </div>
                      <div className="text-accentSolid">3.87</div>
                    </div>
                    <div className="grid grid-cols-[repeat(2,_max-content)] justify-end gap-4 text-end">
                      <div className="text-white">Total Kills</div>
                      <div className="text-accentSolid">193</div>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-center">
                    <div className="mb-2 h-36 w-32">
                      <img
                        src="../../../5.png"
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="text-xl">Mad Maggie</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid w-full max-w-max grid-rows-[max-content_max-content] gap-8 self-end justify-self-center rounded-4xl border border-subline px-8 py-6">
              <div className="text-3xl">Badges</div>
              <div className="grid h-full auto-cols-max grid-flow-col items-center gap-8">
                {badges.slice(0, 5).map((b) => (
                  <div
                    className="grid h-40 w-36 justify-items-center gap-1 rounded-4xl bg-accentElement p-3 shadow-md"
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
                  </div>
                ))}
                <div
                  onClick={() => setBadgeModalOpen(true)}
                  className="grid h-40 w-40 cursor-pointer items-center justify-items-center rounded-4xl transition-all hover:bg-neutral-900"
                >
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-screen w-104 grid-rows-[max-content_auto] gap-16 self-end border-l-2 border-subline px-14 py-12">
            <div className="grid grid-rows-[repeat(3,_max-content)] justify-items-center gap-8">
              <div className="w-full text-start text-2xl">Clips</div>
              <div className="grid h-40 w-full items-center justify-items-center rounded-4xl bg-sidebarBg shadow-md">
                <div className="grid h-20 w-20 items-center justify-items-center rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 h-10 w-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
              </div>
              <div className="grid h-32 w-60 items-center justify-items-center rounded-4xl bg-sidebarBg shadow-md">
                <div className="grid h-16 w-16 items-center justify-items-center rounded-full border-2 border-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="ml-1 h-8 w-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-[max-content_auto]">
              <div className="mb-6 text-2xl">Match history</div>
              <div className="grid h-96 grid-flow-row auto-rows-max gap-4 overflow-auto p-2">
                {players.map((m) => (
                  <div
                    className="grid h-20 w-full cursor-pointer grid-cols-[auto_80px] rounded-4xl bg-accentElement shadow-md outline-none hover:outline-2 hover:outline-offset-0 hover:outline-white"
                    key={m.playerId}
                  >
                    <div className="grid h-full w-full grid-rows-2 items-center pl-10 pr-4">
                      <div className="text-xl">AP Scrim</div>
                      <div className="text-xs text-subtext">
                        <div className="h-max">BATTLE ROYALE</div>
                        <div className="h-max">10/06/2003</div>
                      </div>
                    </div>
                    <div className="grid h-20 w-20 items-center justify-items-center rounded-r-4xl bg-yellow-500 text-3xl">
                      1st
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid h-screen w-full grid-rows-[repeat(2,_max-content)] content-center items-center justify-items-center gap-8">
          <div className="text-3xl">404: No user with such ID</div>
          <Link
            href="/players"
            className="cursor-pointer rounded-3xl bg-red-700 px-4 py-6 text-lg shadow-md transition-colors hover:bg-red-900"
          >
            Back to player leaderboard
          </Link>
        </div>
      )}
      <BadgeModal
        open={badgeModalOpen}
        closeModal={() => setBadgeModalOpen(false)}
        badges={badges}
      />
    </div>
  );
};

export default Player;
