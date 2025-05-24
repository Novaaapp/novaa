/* eslint-disable prettier/prettier */
import { DraggableSettingsTopBar } from "@renderer/components/DraggableSettingsTopBar"
import { useState } from "react"
import { AiOutlineSetting } from 'react-icons/ai'
import { BsPerson, BsRobot } from 'react-icons/bs'
import { FiInfo } from 'react-icons/fi'
import { VscExtensions } from 'react-icons/vsc'

type TabType = 'General' | 'Extensions' | 'AI'  | 'Account' | 'About'

export const Settings = () => {
  const [activeTab, setActiveTab] = useState<TabType>('General')

  return (
    <div className="relative min-h-screen rounded-[10px] overflow-hidden bg-[rgba(0,0,0,0.7)] border border-[rgba(255,255,255,0.28)]">
      <DraggableSettingsTopBar />
      
      {/* Tabs Navigation */}
      <div className="absolute top-8 left-0 right-0 mt-2 flex items-center justify-center space-x-8 px-4">
        <TabButton 
          icon={<AiOutlineSetting />} 
          label="General" 
          active={activeTab === 'General'} 
          onClick={() => setActiveTab('General')}
        />
        <TabButton 
          icon={<VscExtensions />} 
          label="Extensions" 
          active={activeTab === 'Extensions'}
          onClick={() => setActiveTab('Extensions')}
        />
        <TabButton 
          icon={<BsRobot />} 
          label="AI" 
          isPro 
          active={activeTab === 'AI'}
          onClick={() => setActiveTab('AI')}
        />
        
        <TabButton 
          icon={<BsPerson />} 
          label="Account" 
          active={activeTab === 'Account'}
          onClick={() => setActiveTab('Account')}
        />
       
       
        <TabButton 
          icon={<FiInfo />} 
          label="About" 
          active={activeTab === 'About'}
          onClick={() => setActiveTab('About')}
        />
      </div>

      {/* Tab Content */}
      <div className="absolute inset-0 pt-24 p-8 mt-4 text-white/80 overflow-y-auto">
        {activeTab === 'General' && <GeneralSettings />}
        {activeTab === 'Extensions' && <ExtensionsSettings />}
        {activeTab === 'AI' && <AISettings />}
        {activeTab === 'Account' && <AccountSettings />}
        {activeTab === 'About' && <AboutSettings />}
      </div>
    </div>
  )
}

const TabButton = ({ 
  icon, 
  label, 
  active = false, 
  isPro = false,
  onClick
}: { 
  icon: React.ReactNode
  label: string
  active?: boolean
  isPro?: boolean
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 px-3 py-2 rounded-lg transition-colors
        ${active ? 'bg-white/10' : 'hover:bg-white/5'}`}
    >
      <div className="relative">
        {icon}
        {isPro && (
          <span className="absolute -top-1 -right-1 text-[8px] font-semibold bg-blue-500 text-white px-1 rounded">
            PRO
          </span>
        )}
      </div>
      <span className="text-xs text-white/80">{label}</span>
    </button>
  )
}

const GeneralSettings = () => (
 
    <div className="space-y-6 mx-auto max-w-md">
      <div className="flex items-center justify-between ">
        <span>Theme</span>
        <select className="bg-white/10 rounded px-2 py-1">
          <option>System</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span>Language</span>
        <select className="bg-white/10 rounded px-2 py-1">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      <div className="space-y-4">
      <h3 className="font-medium">Hotkeys</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-white/5 p-3 rounded">
          <span>Open Settings</span>
          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Ctrl</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">+</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">,</kbd>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white/5 p-3 rounded">
          <span>Toggle Sidebar</span>
          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Ctrl</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">+</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">B</kbd>
          </div>
        </div>
        <div className="flex items-center justify-between bg-white/5 p-3 rounded">
          <span>Quick Search</span>
          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">Ctrl</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">+</kbd>
            <kbd className="px-2 py-1 bg-white/10 rounded text-sm">K</kbd>
          </div>
        </div>
      </div>
    </div>
    </div>
)

const ExtensionsSettings = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Extensions</h2>
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">Available Extensions</h3>
        <p className="text-sm opacity-60 mt-1">Discover and install new extensions</p>
      </div>
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">Installed Extensions</h3>
        <p className="text-sm opacity-60 mt-1">Manage your installed extensions</p>
      </div>
    </div>
  </div>
)

const AISettings = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">AI Settings</h2>
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">API Configuration</h3>
        <input
          type="text"
          placeholder="Enter API Key"
          className="mt-2 w-full bg-white/10 rounded px-3 py-2"
        />
      </div>
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">Model Selection</h3>
        <select className="mt-2 w-full bg-white/10 rounded px-3 py-2">
          <option>GPT-4</option>
          <option>GPT-3.5</option>
        </select>
      </div>
    </div>
  </div>
)



const AccountSettings = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">Account Settings</h2>
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">Profile</h3>
        <div className="mt-4 space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white/10 rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Current Password"
            className="w-full bg-white/10 rounded px-3 py-2"
          />
        </div>
      </div>
    </div>
  </div>
)





const AboutSettings = () => (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold">About</h2>
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">Version</h3>
        <p className="text-sm opacity-60 mt-1">1.0.0</p>
      </div>
      <div className="bg-white/5 p-4 rounded-lg">
        <h3 className="font-medium">License</h3>
        <p className="text-sm opacity-60 mt-1">MIT License</p>
      </div>
    </div>
  </div>
)