import React from 'react';

const PreviewFrame = ({ appliedSnippet }) => {
  return (
    <html>
      <body>
        <div className="container">
          <img src="/ICP_Logo.png" alt="Avatar" className="avatar" />
          <div className="button-list">
            <button className="button">Button 1ab</button>
            <button className="button">Button 2ab</button>
            <button className="button">Button 3a</button>
          </div>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </body>
    </html>
  );
};

export default PreviewFrame;
