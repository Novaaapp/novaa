/* eslint-disable prettier/prettier */
import { DraggableTopBar } from './components/DraggableTopBar'

const App = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen rounded-[10px] overflow-hidden bg-[rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.18)]"
      style={{
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        backgroundClip: 'padding-box',
        boxSizing: 'border-box'
      }}
    >
      <DraggableTopBar />
      <h1 className="text-4xl text-center font-bold mb-4 text-white">novaa</h1>
    </div>
  )
}

export default App
