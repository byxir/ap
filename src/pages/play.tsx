import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";

const Play: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return <>hi</>;
};

export default Play;
