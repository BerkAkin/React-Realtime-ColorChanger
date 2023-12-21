import {useState,React} from 'react'
import { send } from '../socketApi'


function Palette() {
    const [color,setColor] = useState('#000000');

  return (
    <div className='palette'>
        <input type='color' value={color} onChange={(event)=>setColor(event.target.value)}></input>
        <button onClick={()=>send(color)}>Click</button>
    </div>
  )
}

export default Palette