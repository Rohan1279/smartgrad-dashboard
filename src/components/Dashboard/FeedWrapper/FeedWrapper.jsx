import PropTypes from "prop-types";
import { ScrollArea } from "@/components/ui/scroll-area";

const FeedWrapper = ({ children, className }) => {
  return (
    <>
      <ScrollArea className={`w-full h-[100vmin] ${className}`}>
        {children}
      </ScrollArea>
    </>
  );
};

FeedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.string,
};

export default FeedWrapper;
