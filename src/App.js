import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { initJuno } from '@junobuild/core';
import { Auth } from './Auth';
import UserProfile from './components/UserProfile';
import TokenList from './components/TokenList';
import PrivateRoute from './PrivateRoute';
import Homepage from './components/Homepage';
import ErrorPage from './components/ErrorPage';

function App() {
  const [appState, setAppState] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeJuno = async () => {
      try {
        await initJuno({
          satelliteId: 'mgaka-yyaaa-aaaal-adlnq-cai',
        });
        setAppState('initialized');
      } catch (error) {
        setError('Errore durante l\'inizializzazione di Juno');
        setAppState('error');
      }
    };

    initializeJuno();
  }, []);

  return (
    <BrowserRouter>
      <Auth>
        {appState === 'loading' ? (
          <p className="mt-6 text-lg leading-8 text-gray-600">Inizializzazione...</p>
          ) : appState === 'initialized' ? (
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/secured" element={<PrivateRoute />}>
                <Route path="/secured/profilo" element={<UserProfile />} />
                <Route path="/secured/gallery" element={<TokenList />} />
              </Route>
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        ) : (
          <p className="mt-6 text-lg leading-8 text-red-600">{error}</p>
          )}
      </Auth>
    </BrowserRouter>
  );
}

export default App;
