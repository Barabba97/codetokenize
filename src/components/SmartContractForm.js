import React, { useState } from 'react';

const SmartContractForm = ({ onSmartContractCreate }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const handleCreateSmartContract = () => {
    // Chiamare la funzione di callback per creare uno smart contract
    onSmartContractCreate(code);
  };

  const handleSmartContractCreate = async (code) => {
    try {
      console.log('Creazione dello smart contract con il codice:', code);
      // Implementa la logica per creare uno smart contract utilizzando il codice fornito
      // Aggiorna lo stato o gestisci eventuali azioni post-creazione
    } catch (error) {
      setError('Errore durante la creazione dello smart contract');
    }
  };

  return (
    <div className="mt-8">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Inserisci il codice dello Smart Contract"
        className="w-full h-40 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleCreateSmartContract}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Crea Smart Contract
      </button>
    </div>
  );
};

export default SmartContractForm;
