/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import { useState } from "react";
import ScrimPage from "../../components/scrimPages/ScrimPage";

import { api } from "../../utils/api";

const Players: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [entryMenuOpen, setEntryMenuOpen] = useState(false);

  return (
    <div className="grid h-screen w-full">
      <div className="p-14">
        <div className="grid grid-cols-[repeat(2,_max-content)] justify-between pb-12">
          <div className="grid content-center gap-4 pl-4">
            <div className="text-4xl">AP Ranked Randomized Scrim</div>
            <div className="text-2xl text-subtext">
              BATTLE ROYALE, 10/06/2003, 21:00 MSC
            </div>
          </div>
          <div className="grid grid-cols-[repeat(3,_max-content)] items-center gap-6">
            <div className="grid h-32 w-60 content-center justify-items-center gap-3 rounded-3xl border-2 border-subline py-4 px-4">
              <div className="text-sm text-subtext">Lobby Average Rank</div>
              <div className="text-3xl">387 pts</div>
            </div>
            <div
              onMouseOver={() => setEntryMenuOpen(true)}
              onMouseOut={() => setEntryMenuOpen(false)}
              className="relative grid h-32 w-32 cursor-pointer content-center gap-2 rounded-3xl border-2 border-subline p-4 text-center text-subtext"
            >
              <div className="text-sm">Entry cost</div>
              <div className="grid grid-cols-[repeat(2,_max-content)] items-end gap-1">
                <div className="text-4xl text-accentSolid">35</div>
                <div className="text-2xl text-accentSolid">pts</div>
              </div>
              {entryMenuOpen && (
                <div className="absolute -bottom-24 justify-self-center rounded-lg border-2 border-subline bg-accentElement px-2 py-3 text-start text-xs shadow-md">
                  <div>Formula:</div>
                  <br></br>
                  <div>35/(342/387) pts</div>
                </div>
              )}
            </div>
            <div className="grid">
              <div className="ml-6 grid h-32 w-32 cursor-pointer content-center justify-items-center gap-3 rounded-3xl bg-gradient-to-br from-accentSolid via-pink-600 to-fuchsia-600 text-white shadow-md transition-all hover:opacity-50">
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <div className="text-2xl">Play</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <ScrimPage />
        </div>
      </div>
    </div>
  );
};

export default Players;
