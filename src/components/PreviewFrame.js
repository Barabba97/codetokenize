import React from 'react';

const PreviewFrame = ({ appliedSnippet }) => {
  return (
    <html>
      <body>
        <div className="container">
        <div className="grid grid-cols-2 gap-4">
            {/* Quadrato a sinistra */}
            <div className="col-span-1 bg-gray-200 rounded-lg p-4 centered">
              <img src="/ICP_Logo.png" alt="Avatar" className="avatar" />
              <span className='magic-span'></span>
            </div>
            {/* Quadrato a destra */}
            <div className="col-span-1 bg-gray-200 rounded-lg p-4">
                {/* Dividi il quadrato a destra in 4 quadrati */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Quadrato 1 */}
                    <div className="bg-white rounded-lg p-4">
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button className="button">Button 1</button>
                    </div>
                    {/* Quadrato 2 */}
                    <div className="bg-white rounded-lg p-4">
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button className="button">Button 2</button>
                    </div>
                    {/* Quadrato 3 */}
                    <div className="bg-white rounded-lg p-4">
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button className="button">Button 3</button>
                    </div>
                    {/* Quadrato 4 */}
                    <div className="bg-white rounded-lg p-4">
                      <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button className="button">Button 4</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </body>
    </html>
  );
};

export default PreviewFrame;
