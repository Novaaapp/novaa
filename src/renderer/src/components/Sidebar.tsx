/* eslint-disable prettier/prettier */
// ... existing code ...
type SidebarProps = {
  isVisible?: boolean
}

export const Sidebar = ({ isVisible = true }: SidebarProps) => {
  // Sample chat data - you'll likely fetch this or manage it with state
  const chats = [
    { id: 1, name: 'New Chat', snippet: 'Ask AI Anything...' },
    {
      id: 2,
      name: 'Summarizing last updated file n...',
      snippet: 'The last file you updated is: File Na...'
    },
    {
      id: 3,
      name: 'Greeting and offer of assistance...',
      snippet: "Hello! I'm here to assist you. What..."
    }
  ]

  return (
    <aside
      className={`bg-black/20 space-y-2 border-r border-white/10 overflow-y-auto transition-all duration-[850ms] ease-in-out ${
        isVisible
          ? 'w-1/3 min-w-56 max-w-80 opacity-100 translate-x-0'
          : 'w-0 opacity-0 -translate-x-full overflow-hidden'
      }`}
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Search Chats..."
          className="w-full p-3 bg-black/30 text-white placeholder-gray-400 focus:outline-none focus:ring-white/30 text-sm"
        />
      </div>
      <div className="px-3 py-1">
        <p className="text-xs text-gray-400 px-2 mb-1">Today</p>
        {chats
          .filter((chat) => chat.name === 'New Chat') // Simple filter for example
          .map((chat) => (
            <div
              key={chat.id}
              className="p-2 rounded hover:bg-white/10 cursor-pointer mb-1 bg-white/5"
            >
              <h3 className="text-sm font-semibold text-white truncate">{chat.name}</h3>
              <p className="text-xs text-gray-300 truncate">{chat.snippet}</p>
            </div>
          ))}
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-400 px-2 mb-1">Yesterday</p>
        {chats
          .filter((chat) => chat.name !== 'New Chat') // Simple filter for example
          .map((chat) => (
            <div key={chat.id} className="p-2 rounded hover:bg-white/10 cursor-pointer mb-1">
              <h3 className="text-sm font-semibold text-white truncate">{chat.name}</h3>
              <p className="text-xs text-gray-300 truncate">{chat.snippet}</p>
            </div>
          ))}
      </div>
      {/* You can add more sections or a footer here */}
    </aside>
  )
}
