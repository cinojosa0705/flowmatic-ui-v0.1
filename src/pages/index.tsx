import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Flowmatic</title>
        <meta
          name="description"
          content="Flowmatic Home"
        />
      </Head>
      <div>
      <HomeView />
      </div>
    </div>
  );
};

export default Home;
