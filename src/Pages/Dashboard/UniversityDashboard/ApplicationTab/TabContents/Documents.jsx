import DocumentStatusField from "@/components/Dashboard/DocumentStatusField/DocumentStatusField";
import DocumentsUploadField from "@/components/Dashboard/DocumentsUploadField/DocumentsUploadField";

const Documents = () => {
  return (
    <div className="pt-10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">School</h2>
        <div className="flex flex-wrap gap-x-8">
          <DocumentStatusField name="Certificate" status={true} />
          <DocumentStatusField name="Marksheet" status={false} />
          <DocumentStatusField name="Testimonial" status={true} />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">High School</h2>
        <div className="flex flex-wrap gap-x-8">
          <DocumentStatusField name="Certificate" status={true} />
          <DocumentStatusField name="Marksheet" status={false} />
          <DocumentStatusField name="Testimonial" status={true} />
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold">University</h2>
        <div className="flex flex-wrap gap-x-8">
          <DocumentStatusField name="Certificate" status={true} />
          <DocumentStatusField name="Marksheet" status={false} />
          <DocumentStatusField name="Testimonial" status={true} />
          <DocumentStatusField name="Recommendation Letter" status={true} />
        </div>
      </div>
      <div className="mb-14">
        <h2 className="text-3xl font-bold">Required Documents</h2>
        <DocumentsUploadField
          label={"Upload SOP"}
          name={"sop"}
          tooltip={"Let Smartgrad help you writing an SOP Letter"}
          link={"https://smartgrad.in"}
        />
        <DocumentsUploadField
          label={"Upload Your CV"}
          name={"cv"}
          tooltip={"Let Smartgrad help you writing an CV"}
          link={"https://smartgrad.in"}
        />
        <DocumentsUploadField
          label={"Upload your MOI"}
          name={"moi"}
          tooltip={"Let Smartgrad help you writing an MOI Letter"}
          link={"https://smartgrad.in"}
        />
      </div>
      <button className="w-[98.46px] h-[38.61px] bg-zinc-600 rounded-[5px] text-white">
        Next
      </button>
    </div>
  );
};

export default Documents;
