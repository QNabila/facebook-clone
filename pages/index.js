import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import { getSession } from "next-auth/react";
import Feed from "../components/Feed";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    console.log(session.user.email);
    return (
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Facebook</title>
        </Head>
        {/* header */}
        <Header></Header>
        
        <main className="flex">
          {/* sidebar */}
          <Sidebar />

          {/* feed */}
          <Feed />

          {/* widgets */}

        </main>
      </div>
    );
  }

  return <Login />;
}

// server side rendering
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
