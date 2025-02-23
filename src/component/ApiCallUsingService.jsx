import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import UserDetailChaild from "./UserDetailChaild";
const ApiCallUsingService = () => {
    const [useList, setUseList] = useState([]);
    useEffect(() => {
        ApiService.getUsers().then((res) => {
            if (res.status === 200) {
                setUseList(res.data);
            }
        }).catch((er) => {
            console.log(er)
        })
    }, [])
    return (
        <div className="row">
            
                {
                    useList.map((u) => (
                        <div className="col-lg-4 d-flex justify-content-center">
                        <UserDetailChaild data={u}></UserDetailChaild>
                        </div>
                    ))
                }

        </div>
    )
}
export default ApiCallUsingService;