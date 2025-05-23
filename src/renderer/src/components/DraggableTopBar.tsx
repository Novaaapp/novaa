/* eslint-disable prettier/prettier */
/* export const DraggableTopBar = () => {
  return (
    <header className="absolute inset-0 h-8 bg-transparent border-b border-[rgba(255,255,255,0.1)]"></header>
  )
} */

// ... existing code ...
export const DraggableTopBar = () => {
  const handleMinimize = () => {
    // window.electron.ipcRenderer.send('minimize-window');
    console.log('Minimize clicked')
  }

  const handleMaximize = () => {
    // window.electron.ipcRenderer.send('maximize-window');
    console.log('Maximize clicked')
  }

  const handleClose = () => {
    // window.electron.ipcRenderer.send('close-window');
    console.log('Close clicked')
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-8 bg-transparent border-b border-white/10 flex items-center select-none z-50">
      <div className="w-64 h-full flex items-center space-x-2 pl-3 bg-black/20  border-r border-white/10 -webkit-app-region-no-drag">
        {' '}
        {/* Buttons on the left */}
        <button
          onClick={handleClose} // Swapped order for macOS like feel (red first)
          className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
          aria-label="Close"
        ></button>
        <button
          onClick={handleMinimize}
          className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none"
          aria-label="Minimize"
        ></button>
        <button
          onClick={handleMaximize}
          className="w-3 h-3 bg-green-400 rounded-full hover:bg-green-500 focus:outline-none"
          aria-label="Maximize"
        ></button>
      </div>
      <div className="-webkit-app-region-drag h-full flex-grow flex items-center justify-center ">
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
