import React from 'react'
import axios from 'axios'
import './Home.css'



export default function Home() {
    const[address,setAddress]=React.useState('')

    const handleClick = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3001/getHistory')
            .then(res=>{
                console.log(res.data)
                setAddress(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
      }

  //<Maploader lat={Number(latitude)} long={Number(longitude)}/>  /<Placesrender/>
   //<History/>
  return (
    <div className="flex-container">
        <button onClick={handleClick} className='button' title="History">History</button>
       <div>
        <p>{address}</p>
       </div>
        
    </div>
  )
}

