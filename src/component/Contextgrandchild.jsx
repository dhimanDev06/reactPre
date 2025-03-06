import { dataTrns} from './Context'
import { useState, useEffect, useContext } from "react";
const Contextgranschild = () => {
    const data = useContext(dataTrns)
    return (
        <>
        <h1>Hello {data}</h1>
        </>
    )
}

export default Contextgranschild;