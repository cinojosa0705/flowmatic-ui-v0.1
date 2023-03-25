import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import dexterityTs, { DexterityWallet } from '@hxronetwork/dexterity-ts';
const dexterity = dexterityTs;

interface OrderbookDisplayProps {
  rpc: string;
  wallet: DexterityWallet; // Replace with the appropriate wallet type
  targetProductName: string;
  mpgPubkey: PublicKey
}

interface Order {
  price: number;
  size: number;
}

const OrderbookDisplay: React.FC<OrderbookDisplayProps> = ({ rpc, wallet, targetProductName, mpgPubkey }) => {
    const [bids, setBids] = useState<Order[]>([]);
    const [asks, setAsks] = useState<Order[]>([]);
    const [targetProduct, setTargetProduct] = useState<any>();
  
    // useEffect(() => {
    //   const fetchOrderbook = async () => {
    //     const manifest = await dexterity.getManifest(rpc, false, wallet);

    //     const  {orderbooks}  = manifest.fields.mpgs.get(mpgPubkey.toString())

    //     console.log('ORDERBOOKS: ', orderbooks)
  
    //     for (const [, { mpg }] of manifest.fields.mpgs) {
    //       for (const [productName, { product }] of dexterity.Manifest.GetActiveProductsOfMPG(mpg)) {
    //         if (productName.trim() === targetProductName.trim()) {
    //           setTargetProduct(product);
    //           console.log(product.outright.outright.metadata.orderbook)
    //           break;
    //         }
    //       }
    //       if (targetProduct !== null) {
    //         break;
    //       }
    //     }
  
    //     if (targetProduct) {
    //       const meta = dexterity.productToMeta(targetProduct)  
    //       const marketState = orderbooks.get(meta.orderbook.toBase58())
    //       console.log('PRODUCT: ', JSON.stringify(targetProduct))
    //       console.log('STATE: ', JSON.stringify(marketState))
    //       manifest.streamBooks(
    //         targetProduct,
    //         marketState,
    //         (book) => {
    //           setBids(book.bids.slice(0, 10).map((item) => ({ price: item.price, size: item.quantity })));
    //           setAsks(book.asks.slice(0, 10).map((item) => ({ price: item.price, size: item.quantity })));
    //         }
    //       );
    //     }
    //   };
  
    //   fetchOrderbook();
    // }, [rpc, wallet, targetProductName, targetProduct, setTargetProduct, mpgPubkey]);

    return (<div></div>)
  
    return (
      <div className="color-white">
        <h3>Bids</h3>
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={index}>
                <td>{bid.price}</td>
                <td>{bid.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Asks</h3>
        <table>
          <thead>
            <tr>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {asks.map((ask, index) => (
              <tr key={index}>
                <td>{ask.price}</td>
                <td>{ask.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OrderbookDisplay;