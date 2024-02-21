import axios from "@/api/axios";
import SelectInput from "../../core/SelectInput";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Authcontext } from "@/contexts/AuthContextProvider";
import { toast } from "sonner";

const Form = ({ currentForm, currentTab, setCurrentForm, cb }) => {
  const { user } = useContext(Authcontext);
  const action = currentForm?.action;
  const form_id = currentForm?.form_id;
  const name = currentForm?.name;
  const sub_title = currentForm?.sub_title;
  const title = currentForm?.title;
  const inputs = currentForm?.inputs;
  const sortedInputs = inputs?.sort((a, b) => a.priority - b.priority);

  // const [files, setFiles] = useState(
  //   sortedInputs?.map((input) => {
  //      if (input.type === "file") {

  //     }
  //   })
  // );
  // console.log(
  //   sortedInputs?.map((input) => input.type === "file" && input.name)
  // );

  const handleInputChange = (e) => {
    // handle file inputs

    // console.log(e.target);

    const currentInput = currentForm.inputs.find(
      (input) => input.name === e.target.name
    );
    // console.log(currentInput.type);
    if (currentInput.hasSelect2) {
      currentInput.value = e.obj;
    } else if (currentInput.type === "checkbox") {
      // store the checked state as a boolean
      currentInput.value = e.target.checked;
      // console.log(currentInput);
    } else if (currentInput.type === "file") {
      // handle file inputs
      if (e.target.files.length > 0) {
        // Store the file object separately
        currentInput.file = e.target.files[0];
      }
    } else if (currentInput.type === "radio") {
      if (currentInput.checked) {
        // only add radio buttons that are checked
        currentInput.value = e.target.value;
      }
    }
    currentInput.value = e.target.value;
    const newInputs = currentForm.inputs.filter(
      (input) => input.name !== e.target.name
    );
    setCurrentForm((form) => {
      return {
        ...form,
        inputs: [currentInput, ...newInputs],
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputs = form.elements;
    let formData = {};
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (!input.name) continue;
      if (input.type === "checkbox") {
        // store the checked state as a boolean
        formData[input.name] = input.checked;
        //  [input.name] = input.checked;
      } else if (input.type === "radio") {
        if (input.checked) {
          // only add radio buttons that are checked
          formData[input.name] = input.value;
          //  [input.name] = input.value;
        }
      } else if (input.type === "file") {
        // handle file inputs
        formData[input.name] = input.files[0];
        //  [input.name] = input.files[0];
      } else {
        formData[input.name] = input.value;
        //  [input.name] = input.value;
      }
    }
    let structuredData = {};
    structuredData[currentForm?.section_name] = formData;

    axios
      .post(
        `${currentForm?.action}?token=${localStorage.getItem("token")}`,
        structuredData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("Success:", response);
        cb?.success();
        // cb?.
        toast("Saved successfully", {
          action: {
            label: "Close",
            onClick: () => console.log(""),
          },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        cb?.error;
        toast.error(
          error?.response?.data?.message ||
            "Something went wrong, please try again",
          {
            action: {
              label: "Close",
              onClick: () => console.log(""),
            },
          }
        );
      });
  };

  return (
    <div className="mt-10 ">
      <h1 className="text-[20px] font-bold uppercase">{title}</h1>
      <form
        // action={currentForm?.action}
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 w-full  items-center justify-start"
      >
        {/* IMPLEMENT THE PRIORITY PROPERTY */}
        {sortedInputs?.map((input, index) => {
          return (
            <div key={input.name}>
              {(input.type === "text" ||
                input.type === "number" ||
                input.type === "email" ||
                input.type === "password") && (
                <>
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    defaultValue={input.value}
                    onChange={handleInputChange}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-full m-w-[450px] my-4"
                  />
                </>
              )}
              {input.type === "select" && !input.hasSelect2 && (
                <>
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <select
                    defaultValue={input.value}
                    onChange={handleInputChange}
                    name={input.name}
                    id={input.name}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-full m-w-[450px] my-4"
                  >
                    {input.options?.map((option, index) => {
                      return (
                        <option
                          placeholder={`Choose your desired ${input.label}`}
                          key={index}
                          value={option.value}
                          name={option.name}
                        >
                          {option.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
              {input.type === "select" && input.hasSelect2 && (
                <>
                  <label htmlFor={input.name} className="block text-base mb-3">
                    {input.label}
                  </label>
                  <SelectInput
                    required={input.required ?? false}
                    name={input.name}
                    dropLabel={"name"}
                    dropValue={"value"}
                    options={input.options}
                    changeMethod={(e) => {
                      handleInputChange({
                        target: { name: input.name },
                        obj: e,
                      });
                    }}
                    placeholder={input.label}
                    values={input.value}
                    borderColor={"#595959"}
                    className={"mb-3"}
                  />
                </>
              )}
              {input.type === "checkbox" && (
                <div className="flex items-center justify-between w-full ">
                  <label htmlFor={input.name} className="block text-base  ">
                    {input.label}
                  </label>
                  <input
                    onChange={handleInputChange}
                    id={input.name}
                    type={input.type}
                    name={input.name}
                    defaultChecked={input.value}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 mx-auto my-4"
                  />
                </div>
              )}
              {input.type === "radio" && (
                <div className="flex">
                  <label className="flex-1">{input.label}</label>
                  {input.options?.map((option, index) => (
                    <div key={index} className="flex-1">
                      {/* OPTIONS */}
                      <input
                        type="radio"
                        id={option.value}
                        name={input.name}
                        // value={input.value}
                        defaultChecked={input.value === option.value}
                      />
                      <label htmlFor={option.value}>{option.name}</label>
                    </div>
                  ))}
                </div>
              )}
              {input.type === "date" && (
                <>
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    defaultValue={input.value}
                    onChange={handleInputChange}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-full m-w-[450px] my-4"
                  />
                </>
              )}
              {input.type === "file" && (
                <>
                  <label htmlFor={input.name} className="block text-base">
                    {input.label} <span>({input.value})</span>
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    onChange={handleInputChange}
                    accept="image/*"
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-full m-w-[450px] my-4"
                  />
                </>
              )}
            </div>
          );
        })}
        <div className=" flex justify-center md:block col-span-full">
          <button
            type="submit"
            className="bg-[#D9D9D9] text-[#595959] font-bold px-9 py-3 rounded-md hover:bg-primary hover:text-white active:scale-95 transition-all "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  currentForm: PropTypes.shape({
    action: PropTypes.string,
    form_id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    sub_title: PropTypes.string,
    inputs: PropTypes.arrayOf(PropTypes.object),
  }),
  currentTab: PropTypes.number,
  id: PropTypes.string,
  setCurrentForm: PropTypes.func,
};
