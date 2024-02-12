const Tag = ({ value }: { value: string }) => (
  <div className="rounded-full border-2 px-2 md:px-4 py-0 md:py-2">
    <span className="text-sm md:text-base italic font-semibold mb-2">
      {value}
    </span>
  </div>
);

export default Tag;
