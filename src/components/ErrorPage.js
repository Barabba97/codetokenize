import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Oops! Pagina non trovata</h1>
      <p className="text-lg text-gray-600">La pagina che stai cercando potrebbe essere stata rimossa o non esiste.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">Torna alla Home</Link>
    </div>
  );
};

export default ErrorPage;
