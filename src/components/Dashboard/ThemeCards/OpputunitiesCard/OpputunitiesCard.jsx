import React from "react";
import { DasboardCardTheme } from "../../DasboardCards/DasboardCardTheme";
import CareerIcon from "../../../ThemeIcons/CareerIcon";

const OpputunitiesCard = () => {
  return (
    <DasboardCardTheme>
      <div className="flex items-center gap-x-2">
        <CareerIcon className={"min-w-8 max-w-8 fill-none stroke-primary"} />
        <h1>Opputunities</h1>
      </div>
    </DasboardCardTheme>
  );
};

export default OpputunitiesCard;
