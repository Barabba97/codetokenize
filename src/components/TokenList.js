import React, { useState, useEffect } from 'react';

const TokenList = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    // Aggiungi qui la logica per ottenere la lista degli NFT utilizzando Juno
    const fetchNFTs = async () => {
      // Esempio: Simuliamo una chiamata a Juno per ottenere gli NFT
      const response = await fetch('url-api-juno/nfts');
      const data = await response.json();
      setNFTs(data);
    };

    fetchNFTs();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista NFT</h2>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.id} className="mb-2">
            <span className="font-semibold">ID:</span> {nft.id}, <span className="font-semibold">Nome:</span>{' '}
            {nft.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
