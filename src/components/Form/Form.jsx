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
    event.preventDefault(); // Prevent the form from refreshing the page

    const form = event.target;
    const inputs = form.elements; // This is an HTMLCollection of all fields in the form

    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i].name, inputs[i].value);
    }
  };
  return (
    <div id={`#${id}`} className="mt-10 ">
      <h1 className="text-[20px] font-bold uppercase">{formSettings?.title}</h1>
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-2 w-full grid-rows-3"
      >
        {inputs?.map((input, index) => {
          return (
            <div key={index}>
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
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
