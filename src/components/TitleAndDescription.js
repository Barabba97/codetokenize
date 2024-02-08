import React from 'react';

const TitleAndDescription = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Code Tokenize
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Tokenizza gli snippet di codice e gestisci gli NFT generati. Realizzato in React, Tailwind e{' '}
        <a href="https://juno.build" rel="noopener noreferrer" target="_blank" className="underline">
          Juno
        </a>
        .
      </p>
    </div>
  );
};

export default TitleAndDescription;
