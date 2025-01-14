import React, { useContext } from "react";
import { AuthContext } from "./Auth";

export const Logout = () => {
  //TODO: STEP_3_AUTH_SIGN_OUT
  // onClick={signOut}
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Chiamare la funzione di logout definita nel contesto AuthContext
    logout();
  };


  return (
    <button
      type="button"
      onClick={handleLogout}
      className="text-sm rounded-md mt-16 px-3.5 py-1.5 text-base font-semibold leading-7 text-white bg-[#ff6f3c] hover:bg-[#ff9a3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
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
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
        Logout
      </div>
    </button>
  );
};
