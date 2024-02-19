import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#155263] text-white fixed bottom-0 left-0 right-0 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">&copy; 2024 CodeTokenize. Tutti i diritti riservati.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">Termini di Servizio</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Informativa sulla Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Contattaci</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
