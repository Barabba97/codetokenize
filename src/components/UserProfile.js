import React from 'react'
import profilePic from '../old/panda.png'
import balancePic from '../old/icp.png'

const UserProfile = () => {
  return (
    <div className="mt-8 flex items-start">
    {/* Contenitore dell'immagine del profilo e delle sezioni */}
    <div className="flex flex-col">
      {/* Immagine del profilo */}
      <div className="mr-4">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <img className="w-full h-full object-cover" src={profilePic} alt="Profile" />
        </div>
      </div>
      <div className="mt-8">
      <h2 className="text-2xl font-bold mb-0 text-gray-800">
        PandaMonster
      </h2>
      <div className="flex-1 " >
      <h2 className="text-gray-800  mb-2">  
        <p className='text-gray-600 mb-4'>Joined on February 2024</p>
        </h2>
      
      </div>
    </div>
   
      
      {/* Contenitore delle sezioni saldo e transazioni */}
      <div className="flex flex-col">
        {/* Sezione saldo */}
        <div className="flex flex-col mb-4">
          <h2 className="text-xl font-semibold mb-2">Balance</h2>
          <div className="flex items-center justify-between">
              <img className="w-10 h-10 rounded-full overflow-hidden shadow-lg" src={balancePic} alt="Placeholder Image" />
            <div className="flex-1">
            
          <p className="text-gray-600"> 0.0000 ICP</p>
      </div>
    
      </div>
        </div>

        {/* Sezione transazioni */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-1">Transactions</h2>
          {/* Aggiungi qui il codice per visualizzare le transazioni */}
          <ul>
            <li>Transaction n.1</li>
            <li>Transaction n.2</li>
          
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default UserProfile