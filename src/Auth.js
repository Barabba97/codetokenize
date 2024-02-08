import { createContext, useEffect, useState, useContext } from "react";
import { authSubscribe, signIn, signOut } from "@junobuild/core";
import { Login } from "./Login";
import { Logout } from "./Logout";
import Navbar from "./components/Navbar";
import TitleAndDescription from "./components/TitleAndDescription";

export const AuthContext = createContext();

export const Auth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const sub = authSubscribe((user) => {
      setUser(user)
      setAuthenticated(!!user);
    });

    return () => sub();
  }, []);

  const login = async () => {
    try {
      await signIn();
      setUser();
      setAuthenticated(true);
    }catch (error) {
      console.error("Errore durante il login: ", error);
    }
  }

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      setAuthenticated(false);
    }catch (error) {
      console.error('Errore durante il logout: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, login, authenticated }}>
      <Navbar />
      {authenticated ? (
          <div className="isolate bg-white">
              <main>
                <div className="relative px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl pt-16">
                    {children}
                    <div className="text-center">
                      <Logout />
                    </div>
                  </div>
                </div>
              </main>
          </div>
      ) : (
        <div className="isolate bg-white">
              <main>
                <div className="relative px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl pt-16">
                    <TitleAndDescription />
                  </div>
                </div>
              </main>
              <Login />
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere utilizzato all\'interno di un AuthProvider');
  }
  return context;
};