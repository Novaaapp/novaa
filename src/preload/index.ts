/* eslint-disable prettier/prettier */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
      send: (channel: string, ...args: unknown[]) => ipcRenderer.send(channel, ...args),
      on: (channel: string, func: (...args: unknown[]) => void) => {
        const listener = (_event: IpcRendererEvent, ...args: unknown[]) => func(...args)
        ipcRenderer.on(channel, listener)
        // It's good practice to return a function to remove the listener
        return () => {
          ipcRenderer.removeListener(channel, listener)
        }
      },
      removeAllListeners: (channel: string) => ipcRenderer.removeAllListeners(channel)
    }
  })
  contextBridge.exposeInMainWorld('context', {
    // fhtrytreytryet
  })
} catch (error) {
  console.error(error)
}
