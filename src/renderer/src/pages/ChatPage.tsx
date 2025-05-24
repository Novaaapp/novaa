/* eslint-disable prettier/prettier */

import { ChatArea } from '@renderer/components/ChatArea'
import { useEffect, useState } from 'react'
import { DraggableTopBar } from '../components/DraggableTopBar'
import { Sidebar } from '../components/Sidebar'

const Chat = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const [message, setMessage] = useState('')
  // Exemple dans App.tsx ou un hook
  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error('Erreur:', error)
        setMessage(error.message)
      })
  }, [])

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
      <DraggableTopBar onToggleSidebar={handleToggleSidebar} />
      <div className="flex flex-1 pt-8">
        <Sidebar isVisible={isSidebarVisible} />
        <ChatArea />
      </div>
    </div>
  )
}

export default Chat
