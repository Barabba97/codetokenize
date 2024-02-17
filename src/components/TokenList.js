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
      <div className='container-nft'>
        {items.map((nft) => (
          <div className="nft-card">
            {/* Immagine dell'NFT */}
            <div className='container-img'>
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
              <div className="nft-owner">Code: {nft.data.text}</div>
            </div>
            <button onClick={() => handleApplySnippet(nft.data.text)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Applica Snippet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}  

export default TokenList;
