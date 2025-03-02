import { useState } from 'react'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%]'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

export default App
