import { useSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import { getSession } from "next-auth/react";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";


export default function Home() {
  const { data: session,status} = useSession();

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
          <Sidebar />
          <Feed/> 
          <Widgets/>
    

        </main>
      </div>
    );
  }

  return <Login />;
}

// server side rendering
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // prefetching data from firebase
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
console.log(posts)
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  // db.collection("posts").orderBy("timestamp", "desc")
  //   .get()
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //       });
  //   })


  return {
    props: {
      session,
      // posts: docs,
    },
  };
}
