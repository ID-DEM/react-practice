import React from "react"
import {useState} from "react"





const App =  ()=> {

// useState 配列を返す320は初期値
// 2つの値を返す(配列で)、一つは初期値、二つ目は関数(setCount)]
const [count,setCount] =  useState(0)

const incriment = () => setCount(count + 1)
const decriment = () => setCount(count - 1)

// setCount に関数を持たせることもできる
const incriment2 = () => setCount(previoud =>  previoud + 2)
const Reset = () => setCount(0)
const Double = () => setCount(previoud =>  previoud *2)
const threeCount =  count % 3 === 0  ? count / 3 : count;


return (
    <>
    {threeCount}
     <br/>
     <button onClick={incriment}>+1</button>
     <br/>
     <button onClick={decriment}>-1</button>
     <br/>
     <button onClick={incriment2}>+2</button>
     <br/>
     <button onClick={Reset}>reset</button>
     <br/>
     <button onClick={Double}>*2</button>
     <br/>
     <button onClick={threeCount}>3/</button>

     </>
  );
}

export default App;
