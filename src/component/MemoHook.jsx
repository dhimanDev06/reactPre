import React, { useMemo, useState } from "react";
const MemoHook = () => {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const multi = useMemo(() => {
        console.log("****************")
        return (val2 * 10)
    }, [val2])
    return (
        <>

            <h5>
                MemoHook {multi}
            </h5>
            <button onClick={() => setVal1(val1 + 1)}>Add {val1}</button>
            <button onClick={() => setVal2(val2 + 1)}>Add {val2}</button>
        </>
    )
}

export default MemoHook; 