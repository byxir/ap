import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import Play from "./play";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const router = useRouter();

  useEffect(() => {
    if (router.pathname == "/") {
      router.push("/play").catch((err) => console.log(err));
    }
  }, []);

  return <></>;
};

export default Home;
