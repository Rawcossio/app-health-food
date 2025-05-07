import { useEffect, useState } from "react"

const CounterWithEffect=()=>{
const [count, setCount]=useState(0)

useEffect(()=>{console.log(`el contador cambio a :${count}`);
},[count])
return(
    <div>
    <p>El contador este en :{count}</p>
    <button onClick={()=>setCount(count+1)}>Incrementar</button>
    </div>
)
}
export default CounterWithEffect