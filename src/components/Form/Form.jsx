const Form = ({ formManager, currentTab, id }) => {
  const formSettings = formManager?.form?.find(
    (item) => item?.form_id === parseInt(currentTab)
  );
  console.log("currentTab", currentTab);

  //   const { action, form_id, name, title, sub_title, inputs } = formSettings;
  const action = formSettings?.action;
  const form_id = formSettings?.form_id;
  const name = formSettings?.name;
  const title = formSettings?.title;
  const sub_title = formSettings?.sub_title;
  const inputs = formSettings?.inputs;
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
    <div id={`#${id}`} className="mt-10 ">
      <h1 className="text-[20px] font-bold uppercase">{formSettings?.title}</h1>
      <form
        onSubmit={handleFormSubmit}
        className="md:grid grid-cols-2 w-full grid-rows-3  items-center"
      >
        {/* IMPLEMENT THE PRIORITY PROPERTY */}
        {inputs?.map((input, index) => {
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
                <div className="flex items-center">
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  <input
                    id={input.name}
                    type={input.type}
                    name={input.name}
                    // value={input.value}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  />
                </div>
              )}
              {input.type === "radio" && (
                <div>
                  <label>{input.label}</label>
                  {input.options?.map((option, index) => (
                    <div key={index}>
                      <input
                        type="radio"
                        id={option.value}
                        name={input.name}
                        value={option.value}
                      />
                      <label htmlFor={option.value}>{option.name}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <div className=" flex justify-center md:block">
          <button
            type="submit"
            className="bg-[#D9D9D9] text-[#595959] font-bold px-9 py-3 rounded-md hover:bg-[#09D5D7] hover:text-white active:scale-95 transition-all"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
