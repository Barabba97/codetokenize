import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

const SnippetEditorPage = () => {
  const [snippetCode, setSnippetCode] = useState('');
  const [selectedCodeType, setSelectedCodeType] = useState('css');

  const handleCodeChange = (editorState) => {
    setSnippetCode(editorState.doc.toString());
  };

  const handleCodeTypeChange = (codeType) => {
    setSelectedCodeType(codeType);
  };

  const handleSaveSnippet = () => {
    console.log('Codice salvato:', snippetCode);
    // Aggiungi qui la logica per inviare il codice al backend
  };

  return (
    <div>
      <br />
      <br />
      <CodeTypeSelector selectedCodeType={selectedCodeType} onChange={handleCodeTypeChange} />
      <CodeEditor codeType={selectedCodeType} onChange={handleCodeChange} />
      <br />
      <div className='text-center'>
        <button class="bg-[#F05B24] hover:bg-[#FBB03B] text-white font-bold py-2 px-4 rounded" onClick={handleSaveSnippet}>Salva Snippet</button>
      </div>
    </div>
  );
};

export default SnippetEditorPage;
