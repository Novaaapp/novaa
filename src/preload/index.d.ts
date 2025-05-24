/* eslint-disable prettier/prettier */
declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, ...args: unknown[]) => void
        on: (channel: string, func: (...args: unknown[]) => void) => (() => void) | void
        removeAllListeners: (channel: string) => void
      }
    }
    context: unknown
  }
}

export {}
