import React from 'react';
import { Link } from 'react-router-dom';
const AddressDetailsChild = ({address,updateFlag}) => {
    console.log(address)
    return (
        <>
            <p>{address.city}</p>
            <Link href="javaScript:void(0)" onClick={() => updateFlag(false)}>Show Less</Link>
        </>
    )
}

export default AddressDetailsChild;