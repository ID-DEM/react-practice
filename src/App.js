import React from "react"
import {useState} from "react"

const App =  (props)=> {


  const [name,setName] = useState(props.name)
  const [price,setPrice] = useState(props.price)

  const reset = () =>{
    setPrice(props.price)
    setName(props.name)
  }

return (
<>
<p>現在の{name}は、{price}円です</p>
<button onClick={()=>setPrice(price + 1)}>+1</button>
<br/>
<button onClick={()=>setPrice(price - 1)}>-1</button>
<br/>

<button onClick={reset}>Reset</button>
<br/>

<input type="text" value={name}  onChange={ (e) => setName(e.target.value) }/>
     </>
  );
}

App.defaultProps = {
  name:"サンプル",
  price:1000
}
//https://qiita.com/pepo/items/fa68fdc3c79e006adef6

export default App;
