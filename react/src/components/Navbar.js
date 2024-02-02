import React from 'react';
import { useAuth } from '../Auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authenticated = useAuth();

  return (
    <nav className="bg-[#155263] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex center space-x-1">
          <img height="10px" width="40px" alt="ICPLogo" id="logo" src="/ICP_Logo_2.png"></img>
          <Link to="/" className="text-xl font-bold">
            Code Tokenize
          </Link>
        </div>
          { authenticated.authenticated ? (
              <div className="flex space-x-4">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
                <Link to="secured/gallery" className="hover:text-gray-300">
                  Galleria NFT Generati
                </Link>
                <Link to="secured/profilo" className="hover:text-gray-300">
                  Profilo Utente
                </Link>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/home" className="hover:text-gray-300">
                  Home
                </Link>
              </div>
            )}
      </div>
    </nav>
  );
};

export default Navbar;
