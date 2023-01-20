/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { teamPerformances } from "../../utils/tempteams";

const ScrimPage = () => {
  const [selectedGame, setSelectedGame] = useState(6);

  const [status, setStatus] = useState(0);

  return (
    <div className="mt-6 grid grid-rows-[max-content_auto] gap-12">
      <div className="grid grid-cols-[repeat(2,_max-content)] items-center justify-between">
        <div className="text-3xl">Randomized teams</div>
        <div className="grid cursor-pointer grid-cols-7 rounded-full bg-accentElement text-xl text-subtext shadow-md transition-all">
          <div
            onClick={() => setSelectedGame(1)}
            className={`rounded-l-full border-r-2 border-subline py-4 pr-4 pl-6 transition-all hover:bg-neutral-900 ${
              selectedGame === 1 ? "bg-neutral-900" : ""
            }`}
          >
            G1
          </div>
          <div
            onClick={() => setSelectedGame(2)}
            className={`border-r-2 border-subline p-4 transition-all hover:bg-neutral-900 ${
              selectedGame === 2 ? "bg-neutral-900" : ""
            }`}
          >
            G2
          </div>
          <div
            onClick={() => setSelectedGame(3)}
            className={`border-r-2 border-subline p-4 transition-all hover:bg-neutral-900 ${
              selectedGame === 3 ? "bg-neutral-900" : ""
            }`}
          >
            G3
          </div>
          <div
            onClick={() => setSelectedGame(4)}
            className={`border-r-2 border-subline p-4 transition-all hover:bg-neutral-900 ${
              selectedGame === 4 ? "bg-neutral-900" : ""
            }`}
          >
            G4
          </div>
          <div
            onClick={() => setSelectedGame(5)}
            className={`border-r-2 border-subline p-4 transition-all hover:bg-neutral-900 ${
              selectedGame === 5 ? "bg-neutral-900" : ""
            }`}
          >
            G5
          </div>
          <div
            onClick={() => setSelectedGame(6)}
            className={`border-r-2 border-subline p-4 transition-all hover:bg-neutral-900 ${
              selectedGame === 6 ? "bg-neutral-900" : ""
            }`}
          >
            G6
          </div>
          <div
            onClick={() => setSelectedGame(0)}
            className={`rounded-r-full py-4 pl-4 pr-6 transition-all hover:bg-neutral-900 ${
              selectedGame === 0 ? "bg-neutral-900" : ""
            }`}
          >
            all
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-5 gap-8">
        {teamPerformances.map((tp) => (
          <div
            key={tp.teamPerformanceId}
            className="grid h-full w-full grid-rows-[repeat(3,_max-content)] rounded-3xl bg-accentElement p-6 shadow-md"
          >
            <div className="h-10 border-b-2 border-subline text-xl">Team 1</div>
            <div className="grid grid-rows-3 gap-3 py-4">
              {tp.playerPerformances.map((pp) => (
                <div
                  className="grid grid-cols-[max-content_auto_max-content] items-center gap-2"
                  key={pp.playerPerformanceId}
                >
                  <div className="h-10 w-10">
                    <img
                      src={pp.Player.image}
                      alt="player profile picture"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="w-full">{pp.Player.name}</div>
                  <div className="mr-1 grid w-12 grid-cols-[repeat(2,_max-content)] items-center gap-1">
                    <img
                      src="../../skull-bold.svg"
                      alt="kill icon"
                      className="h-7 w-7"
                    />
                    <div className="text-subtext">{pp.kills}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-[repeat(2,_max-content)] items-center justify-between border-t-2 border-subline px-2 pt-3">
              <div className="text-2xl text-white">#{tp.placement}</div>
              <div className="grid text-xl">{tp.killsTotal} pts</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-rows-[repeat(2,_max-content)] justify-items-center gap-12">
        <div className="text-3xl">Rules</div>
        <div className="w-5/6 max-w-4xl break-words rounded-3xl border-2 border-subline p-10 text-xl">
          ahsdfladshlfjkdlskjfhaskjfhlasjkhflk
          gasdflajsfaldhflkjahsdlkjfhkjlasdhfjasdjlflasdkjflajslhfjhasjldfljaskhdflkashdkjlfhalskjhfkljhawlefhlwhf
          guh iuas ofho ufu wdufhaisouhd fohasudfhuoasidh fuaishd foisauhd
          foiushd foiuhsa dofuihas udfhao suidfho iasdfoiahs duhf uasdf
          ohsadouifhosdaiuhf osauihf oaisduhfo uhasd hh hasduhf oasdhuf uasdh
          fuidsf ouiadhs foiuh sdaiouh fiaohsd hf hsd ioufhaosiduhf oasdiuhf
          asouihf oaisuhf oiudahs ofuih sioudhfuaishd fohua souidhf oiuashd
          foihasd fohiusadohf oasdui fhosadh foiusdahf odisuh fosadiuh foaiusdhf
          osaduih fodsiuah foisuh foisuhd ouuifhiuashiuod f
        </div>
      </div>
    </div>
  );
};

export default ScrimPage;
