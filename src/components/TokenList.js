import React, { useState, useEffect, useContext, useRef } from 'react';
import { listDocs } from "@junobuild/core";
import { AuthContext } from "../Auth";
import nftImage from "../assets/images/coding.png";

const TokenList = ({ onApplySnippet }) => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  
  const list = async () => {
    const { items } = await listDocs({
      collection: "notes",
    });

    setItems(items);
    //console.log(items);
  };

  useEffect(() => {
    if ([undefined, null].includes(user)) {
      setItems([]);
      return;
    }

    (async () => await list())();
  }, [user]);

  const handleApplySnippet = (snippet) => {
    onApplySnippet(snippet); // Passa lo snippet al componente genitore
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista NFT</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {items.map((nft, index) => (
          <div key={index} className="nft-card">
            {/* Immagine dell'NFT */}
            <div className="container-img">
              <img src={nftImage} alt="NFT Image" className="nft-image" />
            </div>
            {/* Contenuto della NFT Card */}
            <div className="nft-card-content">
              {/* Titolo dell'NFT */}
              <div className="nft-title">test</div>
              {/* Descrizione dell'NFT */}
              <div className="nft-description">test</div>
              {/* Proprietario dell'NFT */}
              <div className="nft-owner">Owned by: {nft.owner}</div>
              <div className="nft-owner">
              Code: {nft.data.text.split(' ').length > 15 ? `${nft.data.text.split(' ').slice(0, 15).join(' ')}...` : nft.data.text}
              </div>
            </div>
            <div className='container-botton-nft'>
              <button onClick={() => handleApplySnippet(nft.data.text)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Applica NFT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}  

export default TokenList;
