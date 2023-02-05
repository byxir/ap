type ITourney = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  additionalInfo?: string;

  matches?: Array<{
    id: string;

    teamPerformances: Array<{
      id: string;
      teamName: string;
      place: number;

      kills: Array<{
        player: string;
        amount: number;
      }>;

      killsTotal: number;

      ptsDeltas: Array<{
        id: string;
        playerName: string;
        ptsDelta: number;
      }>;

      ptsDeltaTotal: number;
    }>;
  }>;

  tourneyPtsDeltas?: Array<{
    id: string;
    teamName: string;
    ptsDelta: number;
  }>;
};

type IPlayer = {
  id: string;
  image: string;
  name: string;
  teamName: string;
  pts: number;
  mainLegend: string;

  infoCards: Array<string>;
};

type IPlayerFull = {
  id: string;

  basicInfo: IPlayer;

  clips: Array<string>;
  achievements: Array<string>;

  history: Array<ITourney>;
};

type ITeam = {
  id: string;
  image?: string;
  name: string;
  players: Array<IPlayer>;
};

type ITeamFull = {
  basicInfo: ITeam;

  banner?: string;

  history: Array<ITourney>;
};
