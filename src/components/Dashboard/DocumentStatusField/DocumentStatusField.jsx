import CheckSuccess from "/assets/images/dashboard/check-success.svg";
import CheckWarning from "/assets/images/dashboard/check-warning.svg";
const DocumentStatusField = ({ status, name }) => {
  return (
    <div className="border border-[#595959] outline-none rounded-md px-4 py-2  my-4 relative md:w-80">
      <p>{name}</p>
      {status ? (
        <img src={CheckSuccess} className="absolute -top-2 -right-2 " />
      ) : (
        <img src={CheckWarning} className="absolute -top-2 -right-2 " />
      )}
    </div>
  );
};

export default DocumentStatusField;
