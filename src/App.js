import React from "react"
import {useEffect,useState} from "react"

const App = (props)=> {

  // こっちは useState の展開方法
  const [state,setState] = useState(props)  // props をobjとして直接渡せる
 
  // こっちは分割代入
  const {name,price} = state
  
  // useEffect is invoked 初回＋レンダリング時に毎回呼ばれる
  useEffect(()=>{
    console.log("useEffect is invoked")
  })
  // []これだけだとレンダリングされても呼ばれない
  useEffect(()=>{
    console.log("useEffect is invoked_2")
  },[])
// name 要素が変更されたら、に限定してみる
  useEffect(()=>{
    console.log("This callback is for name only")
  },[name])

  

return (
<>
<p>現在の{name}は、{price}円です</p>
<button onClick={()=>setState({...state,price:price + 1})}>+1</button>
<br/>
<button onClick={()=>setState({...state,price:price - 1})}>-1</button>
<br/>

<button onClick={ () => setState(props)}>Reset</button>
<br/>

<input type="text" value={name}  onChange={ (e) => setState({...state,name:e.target.value}) }/>
     </>
  );
}

App.defaultProps = {
  name:"サンプル",
  price:1000
}
//https://qiita.com/pepo/items/fa68fdc3c79e006adef6

export default App;
