const UniversityIcon = ({ fill, stroke, className }) => {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M48.6667 18L12 38L25.3333 45.2667V65.2667L48.6667 78L72 65.2667V45.2667L80 40.5V64.6667H84.5V38L48.6667 18ZM76.5 38L48.6667 53L19.5 38L48.6667 22.5L76.5 38ZM68.5 61.9333L57 68.4667L48.6667 73L30 63.4333V49L48.6667 58.6L68.5 47.5V61.9333Z"
        stroke={stroke}
        fill={fill}
      />
    </svg>
  );
};

export default UniversityIcon;
