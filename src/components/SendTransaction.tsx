import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { clusterApiUrl, Keypair, PublicKey, SystemProgram, Transaction, TransactionMessage, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { FC, useCallback } from 'react';
import { notify } from "../utils/notifications";
import dexterityTs, { DexterityWallet } from '@hxronetwork/dexterity-ts';
import { useState } from 'react';
const dexterity = dexterityTs;
import OrderbookDisplay from './orderbook'
import { CliComponent } from './cli-component/cliComponent';

export const SendTransaction: FC = () => {

    const { publicKey, signTransaction, signAllTransactions } = useWallet();

    const rpc = 'https://hxro-hxro-b289.testnet.rpcpool.com/d6b016ce-7636-41b9-ae9d-1b38ce05a888'

    const PRODUCT = 'BTCUSD-PERP'

    const { connection } = useConnection();

    const UserWallet: DexterityWallet = {
        publicKey: publicKey,
        signTransaction: signTransaction,
        signAllTransactions: signAllTransactions
    }

    const [userTrg, setUserTrg] = useState<string>('')

    const mpgPubkey = new PublicKey('7Z1XJ8cRvVDYDDziL8kZW6W2SbFRoZhzmpeAEBoxwXxa');

    const onClick = useCallback(async () => {
        if (!publicKey) {
            notify({ type: 'error', message: `Wallet not connected!` });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }

        let signature = '';
        try {

            const manifest = await dexterity.getManifest(rpc, false, UserWallet);
            const trgPubkey = await manifest.createTrg(mpgPubkey);

            setUserTrg(trgPubkey.toString())

            console.log('success! trg pubkey:', trgPubkey.toBase58());

            notify({ type: 'success', message: `Created new TRG!\n${trgPubkey.toBase58()}`, txid: signature });
        } catch (error: any) {
            notify({ type: 'error', message: `Transaction failed!`, description: error?.message, txid: signature });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [publicKey, connection, signTransaction, signAllTransactions]);

    return (
        <div>
            <div className="flex flex-row justify-center" style={{zIndex: '999'}}>
                <div className="relative group items-center">
                    <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-green-500 to-black 
                rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button
                        className="group w-60 m-2 btn animate-pulse bg-gradient-to-br from-green-500 to-black hover:from-white hover:to-green-300 text-white hover:text-black"
                        onClick={onClick} disabled={!publicKey}
                    >
                        <div className="hidden group-disabled:block ">
                            Wallet not connected
                        </div>
                        <span className="block group-disabled:hidden">
                            Create TRG
                        </span>
                    </button>
                </div>
            </div>
            <text>{userTrg === "" ? 'Please create a TRG' : 'Your TRG: ' + userTrg}</text>
            <div className="mt-10">
                {/* <h3>OrderBook: {PRODUCT}</h3>
                <OrderbookDisplay rpc={rpc} wallet={UserWallet} targetProductName={PRODUCT} mpgPubkey={mpgPubkey}/> */}
            </div>
            <div className="flex">
                <div className="mr-10">
                    Terminal 1:
                  <CliComponent/>
                </div>
                <div className="ml-10">
                    Terminal 2:
                <CliComponent/>
                </div>
            </div>
        </div>
    );
};