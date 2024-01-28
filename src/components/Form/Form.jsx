import PropTypes from "prop-types";

const Form = ({ currentForm, currentTab, setCurrentForm }) => {
  const action = currentForm?.action;
  const form_id = currentForm?.form_id;
  const name = currentForm?.name;
  const sub_title = currentForm?.sub_title;
  const title = currentForm?.title;
  const inputs = currentForm?.inputs;
  const sortedInputs = inputs?.sort((a, b) => a.priority - b.priority);
  const handleInputChange = (e) => {
    const currentInput = currentForm.inputs.find(
      (input) => input.name === e.target.name
    );
    if (currentInput.type === "checkbox") {
      // store the checked state as a boolean
      currentInput.value = e.target.checked;
      console.log(currentInput);
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
      } else if (input.type === "radio") {
        if (input.checked) {
          // only add radio buttons that are checked
          formData[input.name] = input.value;
        }
      } else {
        formData[input.name] = input.value;
      }
    }
    console.log(formData);
  };

  return (
    <div className="mt-10 ">
      <h1 className="text-[20px] font-bold uppercase">{title}</h1>
      <form
        onSubmit={handleFormSubmit}
        className="md:grid grid-cols-2 w-full grid-rows-3  items-center justify-items-start"
      >
        {/* IMPLEMENT THE PRIORITY PROPERTY */}
        {sortedInputs?.map((input, index) => {
          return (
            <div key={index}>
              {(input.type === "string" ||
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
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  />
                </>
              )}
              {input.type === "select" && (
                <>
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <select
                    defaultValue={input.value}
                    onChange={handleInputChange}
                    name={input.name}
                    id={input.name}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  >
                    {input.options?.map((option, index) => {
                      return (
                        <option
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
              {input.type === "checkbox" && (
                <div className="flex items-center w-full">
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <input
                    onChange={handleInputChange}
                    id={input.name}
                    type={input.type}
                    name={input.name}
                    defaultChecked={input.value}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  />
                </div>
              )}
              {input.type === "radio" && (
                <div className="flex">
                  <label className="flex-1">{input.label}</label>
                  {input.options?.map((option, index) => (
                    <div key={index} className="flex-1">
                      <input
                        type="radio"
                        id={option.value}
                        name={input.name}
                        defaultValue={option.value}
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
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  />
                </>
              )}
            </div>
          );
        })}
        <div className=" flex justify-center md:block col-span-full">
          <button
            type="submit"
            className="bg-[#D9D9D9] text-[#595959] font-bold px-9 py-3 rounded-md hover:bg-[#09D5D7] hover:text-white active:scale-95 transition-all "
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
