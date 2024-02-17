import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import PreviewFrame from './PreviewFrame';

const LandingPage = ({ appliedSnippet }) => {
  const [cssSnippet, setCssSnippet] = useState('');
  const iframeRef = useRef(null);

  /* const iframeReference = (appliedSnippet) => {
    const iframeDocument = iframeRef.current.contentDocument;
    const styleElement = iframeDocument.createElement('style');
    styleElement.textContent = appliedSnippet;
    iframeDocument.head.appendChild(styleElement);
  }; */

  // Utilizza useEffect per applicare lo snippet all'iframe quando appliedSnippet cambia
  useEffect(() => {
    // Verifica se lo snippet è valido
    if (appliedSnippet.trim() !== '') {
      // Ottieni il documento dell'iframe
      const iframeDocument = iframeRef.current.contentDocument;
      // Crea un elemento style per inserire lo snippet
      const styleElement = iframeDocument.createElement('style');
      styleElement.textContent = appliedSnippet;
      // Rimuovi eventuali stili precedenti
      iframeDocument.head.innerHTML = '';
      // Applica lo snippet all'iframe
      iframeDocument.head.appendChild(styleElement);
    }
  }, [appliedSnippet]);
  
  const previewHtml = ReactDOMServer.renderToStaticMarkup(<PreviewFrame/>);
  
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-4">
      </div>
      <div className="mt-8">
        <iframe
          title="Anteprima Pagina Web"
          ref={iframeRef}
          className="w-full border rounded" // Rimuovi la classe h-64 per consentire all'iframe di adattarsi dinamicamente all'altezza del contenuto
          style={{ height: '300px' }} // Aggiungi uno stile inline per definire l'altezza dell'iframe
          srcDoc={`<!DOCTYPE html>${previewHtml}`}
        />
      </div>
    </div>
  );
};

export default LandingPage;
