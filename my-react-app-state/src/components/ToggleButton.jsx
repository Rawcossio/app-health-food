import { useState } from "react"

const ToggleButton=()=>{
const[isActive,setIsActive]=useState(false);
return(
    <button onClick={()=>setIsActive(!isActive)}>
        {isActive?"Activo":"Inactive"}
    </button>
)
}
export default ToggleButton