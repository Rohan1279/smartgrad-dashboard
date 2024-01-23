import clsx from "clsx";

const SlideWrapper = ({ index, hovering, children }) => {
  return (
    <div
      className={clsx(
        "absolute transition-all duration-300",
        hovering === index ? "opacity-100" : "opacity-0 pointer-events-none",
        hovering === index
          ? "transform-none"
          : hovering > index || hovering < index
          ? "-translate-x-24"
          : "translate-x-24"
      )}
    >
      {children}
    </div>
  );
};

export default SlideWrapper;
