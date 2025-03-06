import {React,memo} from "react";
const CallbackHookRender = ({func1,val2}) =>{
    console.log("Hii",val2)
    return (
        <>
            <p> referential equality {val2}</p>
        </>
    )
}
export default memo(CallbackHookRender);