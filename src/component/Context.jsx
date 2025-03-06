import Contextchild from './Contextchild'
import { useState, useEffect, createContext } from "react";
const dataTrns = createContext()
const Context = () => {
    const [inputValue, setInputValue] = useState("");
    const [dataTrnsValue, setCataTrns] = useState("");
    const checkData = (val) =>{
        console.log(val);
        setInputValue(val)
    }
    const shoot = ()=>{
        setCataTrns(inputValue)
        console.log(dataTrnsValue);
    }
    return (
        <>
        <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">input </label>
                    <div className="col-sm-10">
                        <input type="text" value={inputValue} onChange={(e) => checkData(e.target.value)} className="form-control" id="staticEmail" />
                    </div>
                </div>
                <button type="button" onClick={shoot}>Submit</button>
                <dataTrns.Provider value={dataTrnsValue}>
                <Contextchild/>
                </dataTrns.Provider>
        </>
    )
}

export default Context;
export {dataTrns}