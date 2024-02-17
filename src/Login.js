import { useContext } from "react";
import { AuthContext } from "./Auth";

export const Login = () => {
  //TODO: STEP_2_AUTH_SIGN_IN
  // onClick={signIn}
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // Chiamare la funzione di logout definita nel contesto AuthContext
    login();
  };

  return (
    <div className="pb-10 mt-10 flex items-center justify-center gap-x-6">
      <button
        type="button"
        onClick={handleLogin}
        className="rounded-md bg-[#ff6f3c] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#ff9a3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <div className="flex items-center justify-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Sign In
        </div>
      </button>
    </div>
  );
};
