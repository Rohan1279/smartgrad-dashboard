import axios from "@/api/axios";
import DocumentsUploadField from "@/components/Dashboard/DocumentsUploadField/DocumentsUploadField";
import { useState } from "react";

const Documents = ({ documents, applicationId }) => {
  const [data, setData] = useState({});
  const isAllCompleted = documents.every(
    (document) =>
      document.type === "link" ||
      (document.type === "file" && document.completed)
  );

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let allFilesWithinLimit = true;

    const formData = new FormData();
    const maxFileSize = 2 * 1024 * 1024;

    documents.forEach((document) => {
      const fileInput = data[document.name];

      if (fileInput instanceof File) {
        if (fileInput.size > maxFileSize) {
          alert(`${fileInput.name} size is too large. Max size is 2MB`);
          allFilesWithinLimit = false;
        } else {
          formData.append(document.name, fileInput);
        }
      }
    });

    if (allFilesWithinLimit) {
      try {
        const response = await axios.post(
          `/university/applications/${applicationId}/requirement`,
          formData,
          {
            params: {
              token: localStorage.getItem("token"),
            },
          }
        );
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  return (
    <div className="pt-10">
      <div className="mb-14">
        <h2 className="text-3xl font-bold">Required Documents</h2>
        <form className="flex flex-col items-center" onSubmit={handleOnSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4 w-full">
            {documents.map(({ ...document }, idx) => {
              return (
                <DocumentsUploadField
                  document={document}
                  key={idx}
                  setData={setData}
                />
              );
            })}
          </div>
          {!isAllCompleted && (
            <button
              type="submit"
              className="w-fit h-10 bg-primary rounded-lg px-12 text-white"
            >
              Update
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Documents;
