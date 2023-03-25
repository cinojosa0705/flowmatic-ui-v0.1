import type { NextPage } from "next";
import Head from "next/head";
import { FlowTerminal } from "../views";

const FlowTerminalPage: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Flowmatic</title>
        <meta name="description" content="FLOW-Terminal" />
      </Head>
      <div className="z-10">
        <FlowTerminal />
      </div>
    </div>
  );
};

export default FlowTerminalPage;
