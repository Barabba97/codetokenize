import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const SnippetEditorPage = () => {
  const [snippetCode, setSnippetCode] = useState('');

  const handleCodeChange = (editorState) => {
    // Aggiorna lo stato con il codice dell'editor
    setSnippetCode(editorState.doc.toString());
  };

  const handleSaveSnippet = () => {
    // Logica per salvare lo snippet di codice
    console.log('Codice salvato:', snippetCode);
    // Aggiungi qui la logica per inviare il codice al backend
  };

  return (
    <div>
      <br />
      <br />
      <CodeEditor onChange={handleCodeChange} />
      <br />
      <div className='text-center'>
        <button class="bg-[#F05B24] hover:bg-[#FBB03B] text-white font-bold py-2 px-4 rounded" onClick={handleSaveSnippet}>Salva Snippet</button>
      </div>
    </div>
  );
};

export default SnippetEditorPage;
