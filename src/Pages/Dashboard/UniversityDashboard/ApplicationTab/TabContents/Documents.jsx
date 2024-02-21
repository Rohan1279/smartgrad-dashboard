import DocumentsUploadField from "@/components/Dashboard/DocumentsUploadField/DocumentsUploadField";

const Documents = ({ documents }) => {
  return (
    <div className="pt-10">
      <div className="mb-14">
        <h2 className="text-3xl font-bold">Required Documents</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {documents.map(({ name, type, id, text, completed }, idx) => {
            return (
              <DocumentsUploadField
                key={idx}
                name={name}
                tooltip={text}
                type={type}
                id={id}
                completed={completed}
              />
            );
          })}

      <button type="submit" className="w-20 h-10 bg-primary rounded-[5px] text-white">
        Next
      </button>
        </form>
      </div>
    </div>
  );
};

export default Documents;
