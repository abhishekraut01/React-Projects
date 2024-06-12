import { useState } from 'react'

function App() {
  const [color, setColor] = useState('salmon');
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan','magenta'];

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      
       <div className='flex fixed flex-wrap bottom-12 inset-x-0 justify-center '>
        <div className='flex flex-wrap bg-white px-4 py-2 rounded-xl gap-3 shadow-lg'>
          {colors.map((btnCol) => {
            return <button onClick={()=>{
              setColor(btnCol)
            }} className='py-2 rounded-xl gap-3 shadow-lg px-5' style={{backgroundColor: btnCol}}>Red</button>
          })}
        </div>
      </div>
    </div>

  )
}

export default App
