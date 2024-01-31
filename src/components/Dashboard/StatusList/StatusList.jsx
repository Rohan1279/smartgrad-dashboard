import CheckSuccess from "/assets/images/dashboard/check-success.svg";
import CheckWarning from "/assets/images/dashboard/check-warning.svg";
const StatusList = ({ status, name, status_detail }) => {
  return (
    <div className="flex md:grid grid-cols-3  justify-items-start gap-x-4 py-4 md:px-5 border-dashed border-b">
      {status ? (
        <img src={CheckSuccess} className="w-6 h-6" />
      ) : (
        <img src={CheckWarning} className="w-6 h-6" />
      )}
      <p className="text-[16px] font-medium">{name}</p>
      <p className="text-[12px] font-light">{status_detail}</p>
    </div>
  );
};

export default StatusList;
