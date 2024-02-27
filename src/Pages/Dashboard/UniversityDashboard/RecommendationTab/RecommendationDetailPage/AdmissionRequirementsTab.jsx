import member1 from "../../../../../../public/assets/images/TeamImages/member1.png";
import member2 from "../../../../../../public/assets/images/TeamImages/member2.png";
import member3 from "../../../../../../public/assets/images/TeamImages/member3.png";
const AdmissionRequirementsTab = ({ reuirementsData }) => {
  console.log(reuirementsData);
  return (
    <div className="text-primary py-[25px]">
      <h1 className="text-3xl font-bold mb-[29px]">Academic Requirements</h1>
      <ul className="list-disc list-outside ml-5">
      {reuirementsData?.academic?.map((item, index) => {
        return (
          <li key={index} className="mt-[30px] text-[20px] ">
          <p className="font-bold">{item.name}</p>
          <span className="">{item.min}</span>
          <span className="text-base text-[#6B6A80] ml-1">
            ({item?.additional_info})
          </span>
        </li>
        );
      })}
    </ul>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <h1 className="text-3xl font-bold mb-[29px]">Language Requirements</h1>
      <ul className="list-disc list-outside ml-5">
      {reuirementsData?.language?.map((item, index) => {
        return (
          <li key={index} className="mt-[30px] text-[20px] ">
          <p className="font-bold">{item.name}</p>
          <span className="">{item.min}</span>
          <span className="text-base text-[#6B6A80] ml-1">
            ({item?.additional_info})
          </span>
        </li>
        );
      })}
      </ul>
      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>
      <h1 className="text-3xl font-bold mb-[29px]">Other Requirements</h1>
      <ul className="list-disc list-outside ml-5">
        {reuirementsData?.others?.map((item, index) => {
          return (
            <li key={index} className="mt-[30px] text-[20px] ">
              <p className="font-bold">{item.name}</p>
              <span className="">{item.min}</span>
              <span className="text-base text-[#6B6A80] ml-1">
                ({item?.additional_info})
              </span>
            </li>
          );
        })}
      </ul>

      <hr className="border border-t-[#f5f5f5]  w-11/12 mx-auto my-12"></hr>

      <div className="w-full grid grid-cols-3 ">
        <p className="font-bold">
          How well do you fit this programme? Find out with our BestFit{" "}
        </p>
        <div className="relative mx-auto ">
          <img
            src={member1} // Replace with your image path
            alt="Profile"
            className="rounded-full w-32 h-3w-32 object-cover"
            style={{ zIndex: 1 }}
          />
          <img
            src={member2} // Replace with your image path
            alt="Profile"
            className="rounded-full w-32 h-3w-32 object-cover"
            style={{ zIndex: 0, position: "absolute", left: "2rem", top: 0 }}
          />
          <img
            src={member3} // Replace with your image path
            alt="Profile"
            className="rounded-full w-32 h-3w-32 object-cover"
            style={{ zIndex: 0, position: "absolute", left: "5rem", top: 0 }}
          />
        </div>
        <button className="px-6 h-12 bg-primary rounded-xl text-white text-[12px] mt-1 mx-auto">
          Connect with our experts
        </button>
      </div>
    </div>
  );
};

export default AdmissionRequirementsTab;
