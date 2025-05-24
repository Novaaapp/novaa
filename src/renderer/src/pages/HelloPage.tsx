import { useEffect, useState } from 'react'
import getMessage from '../services/helloService'

const Hello = () => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    const fetchMessage = async () => {
      const msg = await getMessage()
      setMessage(msg)
    }
    fetchMessage()
  }, [])

  return (
    <div>
      {message}
    </div>
  )
}

export default Hello
