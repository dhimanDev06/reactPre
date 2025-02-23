import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import AddressDetailsChild from "./AddressDetailsChild";
const UserDetailChaild = (data) => {
    const [isDisplay, setDisplay] = useState(false)
    const [userData,setUserData] = useState(data.data)
    const isShow = (flag) => {
        setDisplay(flag);
        console.log(flag, isDisplay)
    }
   
    return (
        <>
            <p>Name: <span>{userData.name}</span></p>
            <div>
            {(isDisplay) ? (
                <>
                    <AddressDetailsChild address={userData.address} updateFlag={isShow}></AddressDetailsChild>
                    {/* <Link href="javaScript:void(0)" onClick={() => isShow(false)}>Show Less</Link> */}
                </>
            ) : (
                <Link href="javaScript:void(0)" onClick={() => isShow(true)}>Show More</Link>
            )}
            </div>
        </>
    )
};
export default UserDetailChaild;