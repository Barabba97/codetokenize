import React, { useEffect, useState } from 'react';
import { getSnippetsFromDB } from '../api/api'; // Funzione per recuperare gli snippet dal database

const TokenListPage = ({ onApplySnippet }) => {
  const [snippets, setSnippets] = useState([]);

  /* useEffect(() => {
    // Recupera gli snippet dal database al caricamento della pagina
    getSnippetsFromDB()
      .then(snippets => {
        setSnippets(snippets);
      })
      .catch(error => console.error('Errore nel recuperare gli snippet:', error));
  }, []); */

  const handleApplySnippet = (snippet) => {
    // Passa lo snippet applicato al componente LandingPage
    onApplySnippet(snippet);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Lista NFT</h2>
      <ul>
        {snippets.map(snippet => (
          <li key={snippet.id}>
            <div>{snippet.title}</div>
            <button onClick={() => handleApplySnippet(snippet.code)}>Applica</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenListPage;
