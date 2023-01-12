import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";

import "../styles/globals.css";
import Sidebar from "../components/SidebarLayout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="font-mon font-semibold">
        <Sidebar>
          <div className="grid w-full justify-items-center bg-bg">
            <Component {...pageProps} />
          </div>
        </Sidebar>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
