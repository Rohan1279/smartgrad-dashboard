import PropTypes from "prop-types";
import { ScrollArea } from "@/components/ui/scroll-area";

const FeedWrapper = ({ children }) => {
  return (
    <>
      <ScrollArea className="w-full pr-5">{children}</ScrollArea>
    </>
  );
};

FeedWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedWrapper;
