import PropTypes from "prop-types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Fragment } from "react";

const FeedWrapper = ({ children, className }) => {
  return (
    <Fragment>
      <ScrollArea className={`w-full max-h-screen  sm:h-auto ${className}  `}>
        {children}
      </ScrollArea>
    </Fragment>
  );
};

FeedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default FeedWrapper;
