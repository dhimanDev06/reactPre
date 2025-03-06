import React,{useCallback, useState} from 'react';
import CallbackHookRender from './CallbackHookRender'
const CallbackHook = () =>{
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const func1 = useCallback(
        () =>{

        },[val2]
    )
    return (
        <>
            <p> CallbackHook {val1}</p>
            <CallbackHookRender func1={func1} val2={val2}/>
            <button onClick={()=> setVal1(val1 + 1)}>Add val1</button>
            <button onClick={()=> setVal2(val2 + 1)}>Add val2</button>
        </>
    )
}
export default CallbackHook;