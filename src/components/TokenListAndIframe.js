import React, { useState } from 'react';
import LandingPage from './LandingPage';
import TokenList from './TokenList';

const TokenListAndIframe = () => {
  const [appliedSnippet, setAppliedSnippet] = useState('');

  const handleApplySnippet = (snippet) => {
    // Imposta lo snippet applicato nello stato del componente
    setAppliedSnippet(snippet);
  };

  return (
    <div>
      <TokenList onApplySnippet={handleApplySnippet} />
      <LandingPage appliedSnippet={appliedSnippet} />
    </div>
  );
};

export default TokenListAndIframe;
