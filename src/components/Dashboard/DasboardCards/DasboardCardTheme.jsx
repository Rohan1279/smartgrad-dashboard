import PropTypes from "prop-types";
export const DasboardCardTheme = ({ children }) => {
  return (
    <div className="w-full h-[166px] bg-white lg:bg-[#F5F5F5] rounded-[10px] px-4 py-2 text-base ">
      {children}
    </div>
  );
};

DasboardCardTheme.propTypes = {
  children: PropTypes.node,
};
