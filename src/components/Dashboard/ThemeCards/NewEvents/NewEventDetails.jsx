import { Fragment } from "react";
import { Link } from "react-router-dom";

const NewEventDetails = ({ item }) => {
  return (
    <Fragment>
      <Link to={item.url} className="">
        <img src={item.image} alt="event" className="w-full h-44 rounded-t-lg" />
        
        <div className="p-2">
        <p className="mt-3 text-md font-semibold line-clamp-1">Resources and Strategies for Higher Score.
        </p>
        <p className="text-slate-400 line-clamp-1 ">Deadline: 12th August, 2021
        </p>
        </div>

      </Link>
    </Fragment>
  );
};

export default NewEventDetails;
