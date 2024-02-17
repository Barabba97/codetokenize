import React, { useContext, useEffect, useState } from 'react';
import { setDoc, uploadFile } from "@junobuild/core";
import CodeEditor from './CodeEditor';
import CodeTypeSelector from './CodeTypeSelector';
import { AuthContext } from "../Auth";
import { nanoid } from "nanoid";
import '../assets/main.css';

const SnippetEditorPage = () => {
  const [snippetCode, setSnippetCode] = useState('');
  const [selectedCodeType, setSelectedCodeType] = useState('css');
  const [progress, setProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const { user } = useContext(AuthContext);

  const handleCodeChange = (editorState) => {
    //console.log(editorState.text);
    setSnippetCode(editorState);
  };

  const handleCodeTypeChange = (codeType) => {
    setSelectedCodeType(codeType);
  };

  // const handleSaveSnippet = () => {
  //   const formattedCode = snippetCode.text.filter(line => line.trim() !== "").join("\n");
  //   console.log('Codice salvato:', formattedCode);
  //   // Aggiungi qui la logica per inviare il codice al backend
  // };

  const reload = () => {
    let event = new Event("reload");
    window.dispatchEvent(event);
  };

  const handleSaveSnippet = async () => {
    //console.log();
    // Demo purpose therefore edge case not properly handled
    if ([null, undefined].includes(user)) {
      return;
    }

    setProgress(true);
    const formattedCode = snippetCode.text.filter(line => line.trim() !== "").join("\n");

    try {

      const key = nanoid();

      await setDoc({
        collection: "notes",
        doc: {
          key,
          data: {
            text: formattedCode,
          },
        },
      });

      setSuccessMessage('Snippet salvato con successo!');

      setTimeout(() => {
        setSuccessMessage(''); // Reimposta il messaggio di successo dopo 4 secondi
      }, 4000); // 4000 millisecondi = 4 secondi

      reload();
    } catch (err) {
      console.error(err);
    }

    setProgress(false);
  };

  return (
    <div>
      <br />
      <br />
      <CodeTypeSelector selectedCodeType={selectedCodeType} onChange={handleCodeTypeChange} />
      <CodeEditor codeType={selectedCodeType} onChange={handleCodeChange} />
      <br />
      <div className='text-center'>
        <button className="bg-[#F05B24] hover:bg-[#FBB03B] text-white font-bold py-2 px-4 rounded" onClick={handleSaveSnippet}>Minta Snippet</button>
        {successMessage && <div className="success-message">{successMessage}</div>} {/* Visualizza il messaggio di successo se è stato impostato */}
      </div>
    </div>
  );
};

export default SnippetEditorPage;
