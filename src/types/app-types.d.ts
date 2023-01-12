//types for tourneys & scrims: scheduled and completed (also ongoing)

//the admin first creates the tourney manually in the admin panel.
//as it progresses it automatically, fills up the "matches" array
//and pts deltas for players. When a tourney is completed,
//player rankings are also updated
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

//types for players: inline and full page

//players are stored in 2 types that are linked to each other:
//the first one contains all the basic info displayed on the leaderboard
//the second one also contains more specific information about a player
//including their match history, which is just a linked array of tourney objects

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

//types for teams: inline and full page

//same thing with teams

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
