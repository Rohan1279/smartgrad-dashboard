import axios from "@/api/axios";
import DocumentsUploadField from "@/components/Dashboard/DocumentsUploadField/DocumentsUploadField";
import { useState } from "react";

const Documents = ({ documents, applicationId }) => {
  const [data, setData] = useState({});
  const isAllCompleted = documents.every((document) => document.completed);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    documents.forEach((document) => {
      const fileInput = data[document.name];

      if (fileInput instanceof File) {
        formData.append(`file-${document.id}`, fileInput);
      }
    });

    try {
      const response = await axios.post(
        `/application/${applicationId}`,
        formData,
        {
          params: {
            token: localStorage.getItem("token"),
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error("Error", error);
    }

  }

  return (
    <div className="pt-10">
      <div className="mb-14">
        <h2 className="text-3xl font-bold">Required Documents</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4" onSubmit={handleOnSubmit}>
          {documents.map(({...document}, idx) => {
            
            return (
              <DocumentsUploadField
              document={document}  
              key={idx}
               setData={setData}
              />
            );
          })}

      { !isAllCompleted && <button type="submit" className="w-fit h-10 bg-primary rounded-[5px] px-4 text-white">
        Upload Button
      </button>}
        </form>
      </div>
    </div>
  );
};

export default Documents;
