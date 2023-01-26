/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import { signIn } from "next-auth/react";

const Me: NextPage = () => {
  const handleDiscordSignIn = async () => {
    await signIn("discord", {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <div className="grid h-screen w-full items-center justify-items-center text-xl">
      <div
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleDiscordSignIn}
        className="grid h-32 w-96 cursor-pointer grid-cols-[repeat(2,_max-content)] items-center justify-center gap-4 rounded-3xl bg-violet-800 shadow-md transition-colors hover:bg-violet-900"
      >
        <div className="h-20 w-20">
          <img
            src="../../discord.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="">Sign in with Discord</div>
      </div>
    </div>
  );
};

export default Me;
