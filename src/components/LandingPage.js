import React, { useState, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import PreviewFrame from './PreviewFrame';

const LandingPage = ({ appliedSnippet }) => {
  const [cssSnippet, setCssSnippet] = useState('');
  const iframeRef = useRef(null);

  const handleApplySnippet = (snippet) => {
    const iframeDocument = iframeRef.current.contentDocument;
    const styleElement = iframeDocument.createElement('style');
    styleElement.textContent = snippet;
    iframeDocument.head.appendChild(styleElement);
  };

  const previewHtml = ReactDOMServer.renderToStaticMarkup(<PreviewFrame appliedSnippet={appliedSnippet}/>);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-4">
        <button onClick={handleApplySnippet} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Applica Snippet
        </button>
      </div>
      <div className="mt-8">
        <iframe
          title="Anteprima Pagina Web"
          ref={iframeRef}
          className="w-full h-64 border rounded"
          srcDoc={`<!DOCTYPE html>${previewHtml}`}
        />
      </div>
    </div>
  );
};

export default LandingPage;
