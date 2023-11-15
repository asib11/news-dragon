import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RightNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(response => response.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h4>All Catagory</h4>
            {
                catagories.map((catagory) => {
                    // console.log(catagory)
                    <p
                        key={catagory.id}
                    >
                        <Link>{catagory.name}</Link>
                    </p>
                    
                })
            }
        </div>
    );
};

export default RightNav;