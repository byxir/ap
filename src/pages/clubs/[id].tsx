import { type NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { api } from "../../utils/api";
import { members } from "../../utils/tempmembers";

interface member {
  id: string;
  image: string;
  name: string;
  pts: number;
  role: number;
}

const Players: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="grid h-screen w-full">
      <div className="grid h-screen grid-cols-[max-content_max-content] justify-between gap-12">
        <div className="grid h-screen grid-rows-[repeat(2,_max-content)] gap-12 overflow-auto  py-10 pl-12"></div>
        <div className="grid h-screen w-104 max-w-md grid-rows-[repeat(2,_max-content)] gap-14 self-end overflow-auto border-l-2 border-subline p-10">
          <div className="grid grid-cols-[repeat(2,_max-content)] items-center justify-between">
            <div className="text-3xl">Members</div>
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
          <div className="grid grid-flow-row gap-1">
            {members.map((m, index) => (
              <div
                className="relative grid w-full grid-cols-[max-content_auto] items-center gap-3"
                key={m.id}
              >
                <div className="text-subtext">{index}</div>
                <div
                  className={`grid w-full grid-cols-[max-content_auto] items-center gap-3 p-2 ${
                    m.role === 1
                      ? "rounded-3xl border-2 border-accentSolid"
                      : ""
                  }`}
                >
                  <div className="ml-1 h-16 w-16">
                    <img
                      src="../../../wraith.png"
                      alt="member profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="w-full text-xl">{m.name}</div>
                </div>
                {m.role === 1 ? (
                  <div className="absolute top-2 right-3 text-xs text-accentSolid">
                    admin
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
