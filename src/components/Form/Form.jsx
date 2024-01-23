const Form = ({ formManager, currentTab, id }) => {
  const formSettings = formManager?.form?.find((item) => item?.form_id === id);
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

    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i].name, inputs[i].value);
    }
  };
  return (
    <div id={`#${id}`} className="mt-10 ">
      <h1 className="text-[20px] font-bold uppercase">{formSettings?.title}</h1>
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-2 w-full grid-rows-3 items-center"
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
                    defaultChecked={input.value}
                    className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                  />
                </div>
              )}
              {input.type === "radio" && (
                <div className="">
                  <label htmlFor={input.name} className="block text-base">
                    {input.label}
                  </label>
                  {input.options?.map((option, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <label htmlFor={`${input.name}-${index}`}>
                          {option.name}
                        </label>
                        <input
                          id={`${input.name}-${index}`}
                          type={input.type}
                          name={input.name}
                          value={option.value}
                          className="outline-none border border-[#595959] rounded-md px-4 py-2 w-[450px] my-4"
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
