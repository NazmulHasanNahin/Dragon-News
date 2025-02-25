import { Link } from "react-router-dom";


const Newscard = ({ news }) => {
    const { title, author, image_url, _id ,details } = news
    return (
        <div className="card bg-base-100 mb-4 w-full">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0,200)} <br /> <Link to={`/news/${_id}`} className="text-orange-500"> Read More...
                    </Link></p>
                    :
                    <p>{details}</p>
                }
               
                
            </div>
        </div>
    );
};

export default Newscard;