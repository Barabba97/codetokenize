import React from 'react';

const PreviewFrame = ({ appliedSnippet }) => {
  return (
    <html>
      <head>
        <style>
          {/* Stile di default dell'iframe */}
          {`
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
            }
            .avatar {
              width: 100px;
              height: 100px;
              border: 2px solid black;
              border-radius: 50%;
              margin-bottom: 10px;
            }
            .button-list {
              display: flex;
              justify-content: space-between;
              margin-bottom: 10px;
            }
            .button {
              padding: 8px 16px;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              background-color: #007bff;
              color: #fff;
            }
            .button:hover {
              background-color: #0056b3;
            }
            .text {
              font-size: 16px;
              line-height: 1.5;
            }
            /* Applica lo snippet CSS */
            ${appliedSnippet}
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <img src="https://image-link-di-prova/image.png" alt="Avatar" className="avatar" />
          <div className="button-list">
            <button className="button">Button 1</button>
            <button className="button">Button 2</button>
            <button className="button">Button 3</button>
          </div>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </body>
    </html>
  );
};

export default PreviewFrame;
