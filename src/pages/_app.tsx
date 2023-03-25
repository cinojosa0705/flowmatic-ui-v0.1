import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Flowmatic.xyz</title>
      </Head>
      <ContextProvider>
        <div className="flex flex-col min-h-screen">
          <Notifications />
          <div style={{ zIndex: 3 }}>
            <AppBar />
          </div>
          <ContentContainer>
            <div className="flex-grow" style={{
              zIndex: 2
            }}>
              <Component {...pageProps} />
            </div>
          </ContentContainer>
          <div style={{ zIndex: 1 }}>
            <Footer />
          </div>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;

