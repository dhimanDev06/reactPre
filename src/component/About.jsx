import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const About = () => {
    const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
        setLoading(false);
        if(response.status === 200){
            setPhotos(response.data);
        }
      })
      .catch((error) => console.error("Error fetching photos:", error));
  },[]);
  if(loading) return (<p>...Loading</p>);


    return (
        <>
            <h5>
                Using axios
            </h5>
            <div className="row">
               {
                photos.map((ph)=>(
                    <div className="col-lg-4">
                        {/* <img src={ph.thumbnailUrl} alt="" /> */}
                       
                        <a href={ph.url} target="_blank"> <p>{ph.title}</p></a>
                    </div>
                ))
               }
            </div>
        </>
    )
}
export default About;