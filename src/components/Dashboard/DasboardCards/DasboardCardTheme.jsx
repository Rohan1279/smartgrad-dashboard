import PropTypes from "prop-types";
export const DasboardCardTheme = ({ children }) => {
  return (
    <div className="w-full h-[166px] bg-white/70 rounded-[10px] px-4 py-2 text-base text-[#4B4E6D]">
      {children}
    </div>
  );
};

DasboardCardTheme.propTypes = {
  children: PropTypes.node,
};
