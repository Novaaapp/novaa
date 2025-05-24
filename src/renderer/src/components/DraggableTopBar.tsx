/* eslint-disable prettier/prettier */
import { FiSidebar } from 'react-icons/fi'
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc'

type DraggableTopBarProps = {
  onToggleSidebar: () => void
}

export const DraggableTopBar = ({ onToggleSidebar }: DraggableTopBarProps) => {
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window')
  }

  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-8 bg-transparent border-b border-white/10 flex items-center select-none z-50">
      <div className="w-1/3 min-w-56 max-w-80 h-full flex items-center justify-between bg-black/20 border-r border-white/10 -webkit-app-region-no-drag">
        <div className="flex items-center space-x-2 pl-3">
          <button
            onClick={handleClose}
            className="group relative w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
            aria-label="Close"
          >
            <VscChromeClose className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity text-black" />
          </button>
          <button
            onClick={handleMinimize}
            className="group relative w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none"
            aria-label="Minimize"
          >
            <VscChromeMinimize className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity text-black" />
          </button>
          <button
            onClick={handleMaximize}
            className="group relative w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 focus:outline-none"
            aria-label="Maximize"
          >
            <VscChromeMaximize className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity text-black" />
          </button>
        </div>
        <button
          onClick={onToggleSidebar}
          className="group relative focus:outline-none pr-3"
          aria-label="Toggle Sidebar"
        >
          <FiSidebar className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
        </button>
      </div>
      <div className="-webkit-app-region-drag h-full flex-grow flex items-center justify-center">
        <span
          className="text-red-500 font-black transform hover:scale-110 transition-transform duration-200 inline-block"
          style={{
            fontFamily: "'TT Berlinerins', 'Hope Sans', cursive",
            fontSize: '1rem',
            textShadow: '0 0 10px rgba(255, 0, 0, 0.3)',
            transform: '',
            filter: 'drop-shadow(0 0 2px rgba(255, 0, 0, 0.5))',
            letterSpacing: '0.08rem',
            fontWeight: 'bold'
          }}
        >
          n
        </span>
        ovaa
      </div>
    </header>
  )
}
