import DocumentStatusField from "@/components/Dashboard/DocumentStatusField/DocumentStatusField";

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
      <h2 className="text-3xl font-bold">Required Documents</h2>
    </div>
  );
};

export default Documents;
