import { StarIcon } from "lucide-react";
import React from "react";

const ScoreComponent = ({ score }) => {
  return (
    <div className="flex items-center ">
      {[...Array(5)].map((_, i) => {
        return i < score ? (
          <StarIcon
            key={i}
            className="text-yellow-400 fill-yellow-400 h-4 w-4"
          />
        ) : (
          <StarIcon key={i} className="text-gray-300 fill-gray-300h-4 w-4" />
        );
      })}
    </div>
  );
};

export default ScoreComponent;
