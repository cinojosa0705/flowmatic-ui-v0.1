import type { NextPage } from "next";
import Head from "next/head";

const FlowmaticVaultsPage: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Flowmatic</title>
                <meta
                    name="description"
                    content="Flowmatic Vaults"
                />
            </Head>
            <div className="flex flex-col items-center" style={{ zIndex: 2, marginTop: '30px' }}>
                <div className="text-bold" style={{fontSize: '40px'}}>
                    Flowmatic Vaults
                </div>
                <div style={{fontSize: '20px', marginTop: '30px'}}>
                    Coming soon...
                </div>
            </div>

            {/* <div className="flex flex-row justify-center position-absolute" style={{ zIndex: '1', marginTop: '-125px' }}>
                <img src="/random-bg.png" style={{ opacity: 0.55 }} />
            </div> */}
        </div>
    );
};

export default FlowmaticVaultsPage;