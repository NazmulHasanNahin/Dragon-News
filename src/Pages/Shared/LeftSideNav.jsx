import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    })

    return (
        <div className="space-y-6">
            <h1 className="text-3xl">All Caterogy</h1>
            {
                categories.map(catetgory=><Link className="block font-semibold p-4" key={catetgory.id}>{catetgory.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;