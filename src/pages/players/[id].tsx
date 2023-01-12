import { type NextPage } from "next";
import Link from "next/link";

import { api } from "../../utils/api";

const Players: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return <div className="grid h-screen w-full"></div>;
};

export default Players;
