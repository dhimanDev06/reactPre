import { useState, useEffect, useRef } from "react";
const FormValidation = () => {
    const [inputValue, setInputValue] = useState("");
    const [errors, setErrors] = useState({});
    const nameRef = useRef()
    const validationCheck = () => {
        let errorMsg = {}
        if (!inputValue) {
            errorMsg.email = "Email error"
        } else {
            errorMsg.email = ""
        }

        if (!nameRef.current.value) {
            errorMsg.name = "Name error"
        } else {
            errorMsg.name = ""
        }
        setErrors(errorMsg)
        console.log(inputValue, nameRef.current.value, errorMsg, Object.keys(errorMsg).length)
        return Object.keys(errorMsg).length;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationCheck() > 0) {
            alert("Error")
        }
    }
    const checkData = (val) =>{
        console.log(val);
        setInputValue(val)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="needs-validation">
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name Uncrolled</label>
                    <div className="col-sm-10">
                        <input type="text" ref={nameRef} className="form-control" id="nameRef" />
                        
                    </div>
                    {(errors.name) ?(
                    <div>
                             {errors.name}
                        </div>
                    ):(
                        <></>
                    )}
                </div>
                <div className="mb-3 row">
                    <label for="staticEmail" className="col-sm-2 col-form-label">Email Crolled</label>
                    <div className="col-sm-10">
                        <input type="text" value={inputValue} onChange={(e) => checkData(e.target.value)} className="form-control" id="staticEmail" />
                    </div>
                    {(errors.email) && <p>errors.email</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormValidation;