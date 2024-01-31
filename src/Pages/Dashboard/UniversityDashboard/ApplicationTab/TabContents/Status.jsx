import StatusList from "@/components/Dashboard/StatusList/StatusList";

const Status = () => {
  const status = [
    {
      name: "Application Fee",
      status_detail: "Not Provided Yet",
      status: false,
    },
    {
      name: "Form Fill-Up",
      status_detail: "Filled up!",
      status: true,
    },
    {
      name: "Passport",
      status_detail: "Done!",
      status: false,
    },
    {
      name: "Personal Information",
      status_detail: "Not Provided Yet",
      status: true,
    },
    {
      name: "Documents",
      status_detail: "Not Provided Yet",
      status: true,
    },
    {
      name: "CV",
      status_detail: "Filled up!",
      status: false,
    },
    {
      name: "SOP",
      status_detail: "Done!",
      status: true,
    },
    {
      name: "Portfolio",
      status_detail: "Not Provided Yet",
      status: true,
    },
  ];
  return (
    <div className="py-10 md:px-8">
      <h2 className="text-3xl font-bold mb-5">Checklist</h2>
      {status.map((item, index) => (
        <StatusList
          key={index}
          name={item.name}
          status_detail={item.status_detail}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default Status;
