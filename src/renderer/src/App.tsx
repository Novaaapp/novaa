/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import { DraggableTopBar } from './components/DraggableTopBar';
import { Sidebar } from './components/Sidebar';


const App = () => {

  const [message, setMessage] = useState('')
  // Exemple dans App.tsx ou un hook
  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Erreur:', error);
        setMessage(error.message);
      });
  }, []);
  
  return (
    <div
      className="min-h-screen rounded-[10px] overflow-hidden bg-[rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.28)] flex flex-col"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundClip: 'padding-box',
        boxSizing: 'border-box'
      }}
    >
      <DraggableTopBar />
      <div className="flex flex-1 pt-8">
        {' '}
        {/* Added pt-8 to account for DraggableTopBar height */}
        <Sidebar />
        <main className="flex-1 flex flex-col p-4 overflow-hidden">
          {' '}
          {/* Main content area made flex-col and overflow-hidden */}
          {/* Message display area */}
          <div className="flex-1 overflow-y-auto space-y-4 p-2 rounded-md">
            {/* Example Messages (you can replace these with dynamic data) */}
            <div className="flex justify-start"></div>
            <div className="flex justify-end">
              <div className="bg-red-500/60 text-white p-3 rounded-xl max-w-xs">
                Hi novaa! How are you?
              </div>
            </div>
            <div className="flex justify-start">
              <div className=" text-white p-3 rounded-lg max-w-xs">
                I&apos;m good, thanks for asking! This is a slightly longer message to see how it
                wraps and fits into the container.
              </div>
            </div>

            {/* Add more messages as needed */}
          </div>
          {/* Message input area */}
          <div className="mt-4 flex items-center p-1 bg-black/20 rounded-2xl">
            {' '}
            {/* Changed to flex and items-center, adjusted padding */}
            <button className="p-2 text-gray-400 hover:text-white focus:outline-none">
              {/* SVG Plus Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none rounded-md border border-transparent"
            />
            {/* You can add a send button here if needed */}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
