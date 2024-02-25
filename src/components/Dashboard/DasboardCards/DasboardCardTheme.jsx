import PropTypes from "prop-types";
export const DasboardCardTheme = ({ children }) => {
  return (
    <div className="w-full pb-8 bg-white border border-primary mmd:border-none mmd:shadow-md rounded-[10px] px-4 py-3 text-base text-[#4B4E6D] overflow-hidden">
      {children}
    </div>
  );
};

DasboardCardTheme.propTypes = {
  children: PropTypes.node,
};
