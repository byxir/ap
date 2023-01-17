import { useEffect, useState } from "react";

const RankDisplay = ({ progress }: { progress: number }) => {
  const [infoMenuOpen, setInfoMenuOpen] = useState(false);

  const getFill1 = () => {
    if (progress >= 12.5) {
      return 12.5;
    } else {
      return progress;
    }
  };
  const getFill2 = () => {
    if (progress - 12.5 >= 25) {
      return 25;
    } else if (progress - 12.5 > 0) {
      return progress - 12.5;
    } else {
      return 0;
    }
  };
  const getFill3 = () => {
    if (progress - 37.5 >= 25) {
      return 25;
    } else if (progress - 37.5 > 0) {
      return progress - 37.5;
    } else {
      return 0;
    }
  };
  const getFill4 = () => {
    if (progress - 62.5 >= 25) {
      return 25;
    } else if (progress - 62.5 > 0) {
      return progress - 62.5;
    } else {
      return 0;
    }
  };
  const getFill5 = () => {
    if (progress - 87.5 >= 12.5) {
      return 12.5;
    } else if (progress - 87.5 > 0) {
      console.log(progress - 87.5);
      return progress - 87.5;
    } else {
      return 0;
    }
  };

  return (
    <div className="absolute bottom-0 grid h-80 w-80 rounded-4xl bg-accentElement shadow-md">
      <div
        onMouseOver={() => setInfoMenuOpen(true)}
        onMouseOut={() => setInfoMenuOpen(false)}
        className="relative grid h-full w-full cursor-pointer"
      >
        <div className="grid gap-4 self-center justify-self-center">
          <div className="text-center text-9xl font-bold not-italic text-accentSolid">
            9
          </div>
          <div className="text-3xl">387 pts</div>
        </div>
        {infoMenuOpen && (
          <div className="absolute -top-16 -right-32 grid h-20 w-32 items-center justify-items-center rounded-3xl bg-accentElement transition-all">
            387/400 pts
          </div>
        )}
      </div>
      <div className="absolute left-1/2 h-1 w-34">
        <div
          className="h-full border-t-2 border-accentSolid"
          style={{ width: `${getFill1() * 8}%` }}
        ></div>
      </div>
      <div
        className={`absolute right-0 h-7 w-7 rounded-tr-4xl border-accentSolid bg-accentElement ${
          progress > 12.5 ? "border-t-2 border-r-2" : "border-none"
        }`}
      ></div>
      <div className="absolute right-0 top-7 h-68 w-1">
        <div
          className="border-r-2 border-accentSolid"
          style={{ height: `${getFill2() * 4}%`, top: "27px" }}
        ></div>
      </div>
      <div
        className={`absolute right-0 bottom-0 h-7 w-7 rounded-br-4xl border-accentSolid ${
          progress > 37.5 ? "border-r-2 border-b-2" : ""
        }`}
      ></div>
      <div className="absolute left-7 bottom-0 grid h-1 w-68 justify-items-end">
        <div
          className="border-b-2 border-accentSolid"
          style={{ width: `${getFill3() * 4}%` }}
        ></div>
      </div>
      <div
        className={`absolute bottom-0 h-7 w-7 rounded-bl-4xl border-accentSolid ${
          progress > 62.5 ? "border-b-2 border-l-2" : ""
        }`}
      ></div>
      <div className="absolute bottom-7 grid h-68 w-1 items-end">
        <div
          className="w-full border-l-2 border-accentSolid"
          style={{ height: `${getFill4() * 4}%` }}
        ></div>
      </div>
      <div
        className={`absolute h-7 w-7 rounded-tl-4xl border-accentSolid ${
          progress > 87.5 ? "border-t-2 border-l-2" : ""
        }`}
      ></div>
      <div className="absolute left-7 h-1 w-34">
        <div
          className="border-t-2 border-accentSolid"
          style={{ width: `${getFill5() * 8}%` }}
        ></div>
      </div>
    </div>
  );
};

export default RankDisplay;
