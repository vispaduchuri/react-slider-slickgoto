import React,{ useState } from 'react'
import SliderData from './SliderData'

const SliderHelper = ({data})=>{
  const [id, setId] = useState(0)
return(<>
  <ul style={{"list-style": 'none'}}>
        {data.categories.map((i, index) => (
          <li key={index} style={{'display':'inline-block','padding':'5px'}} onClick={() => setId(index)}><a>{i.name}</a></li>
        ))}
      </ul>
      <SliderData data={data} id={id}/>
</>)
}

export default SliderHelper