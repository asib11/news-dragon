import { useEffect, useState } from "react";


const RightNav = () => {
    const [catagories, uesCatagories] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h2>right nav</h2>
        </div>
    );
};

export default RightNav;