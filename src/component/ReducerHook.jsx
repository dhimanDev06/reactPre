import React,{useReducer} from "react";
const initianCount = 0;
const reducerFun = (st,ac)=>{
    if(ac === 'Pluse'){
        return st + 1;
    }else if(ac === 'Minus'){
        return st - 1;
    }else{
        return 0;
    }
}
const ReducerHook = () => {
    const [cont, dispatch] = useReducer(reducerFun,initianCount)
    return (
        <>
        <h1>Reducer Hook</h1>
        <p>Counter : {cont}</p>
            <button onClick={()=>dispatch('Pluse')}>Pluse</button>
            <button className="mx-2" onClick={()=>dispatch('Minus')}>Minus</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
        </>
    )
}
export default ReducerHook;