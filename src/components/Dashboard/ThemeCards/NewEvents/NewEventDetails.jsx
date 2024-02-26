import { Fragment } from "react";
import { Link } from "react-router-dom";

const NewEventDetails = ({ item }) => {
  return (
    <Fragment>
      <Link to={item.url}>
        <img src={item.image} alt="event" className="w-full h-44" />
      </Link>
    </Fragment>
  );
};

export default NewEventDetails;
