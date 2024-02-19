import React from 'react'
import profilePic from '../old/panda.png'
import balancePic from '../old/icp.png'

const UserProfile = () => {
  return (
    <div className="w-full px-6 mx-auto mt-12">
      <div className="w-full  px-6 mt-6 -mt-16 overflow-hidden break-words border-0 shadow-blur bg-gradient-to-br from-blue-700 to-bg-white rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-100">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-soft-in-out h-28 w-28 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
              <img src={profilePic} alt="Profile" className="w-13  shadow-soft-sm rounded-xl" />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 dark:text-white"> Captain Code </h5>
              <p className="mb-0 font-semibold leading-normal text-sm dark:text-white dark:opacity-60">CEO / Co-Founder</p>
            </div>
          </div>
        </div>
      </div>




      <div className="grid grid-cols-2 gap-4 mt-1">
      <div className="relative flex flex-col flex-auto min-w-0 p-10 mx-6 mt-6 overflow-hidden break-words border-0 shadow-blur bg-gradient-to-br from-blue-700 to-bg-white rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-100">
     <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-auto max-w-full px-3 my-auto">
        <div className="h-full">
          <h5 className="mb-1 dark:text-white"> BALANCE </h5>
          <div className="h-full flex items-center">
          <img className="w-10 h-10 rounded-full overflow-hidden shadow-lg" src={balancePic} alt="Placeholder Image" />
          <p className="text-gray-600 ml-2">0.0000 ICP</p>
        </div>
           </div>
      </div>
    </div>
  </div>


  <div className="relative flex flex-col flex-auto min-w-0 p-10 mx-6 mt-6 overflow-hidden break-words border-0 shadow-blur bg-gradient-to-br from-blue-700 to-bg-white rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-100">
     <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-auto max-w-full px-3 my-auto">
        <div className="h-full">
          <h5 className="mb-1 dark:text-white"> TRANSACTIONS </h5>
          <p className="mb-0 font-semibold leading-normal text-sm dark:text-white dark:opacity-60">Transaction n.1</p>
        </div>
      </div>
      <div className="flex-none w-auto max-w-full px-3">
        <div className="text-base ease-soft-in-out h-28 w-28 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
          {/* Aggiungi un'altra immagine qui */}
        </div>
      </div>
    
    </div>
  </div>
      </div>

    
    </div>

    


  
  )
}



export default UserProfile