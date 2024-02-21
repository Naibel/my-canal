const Tagline = ({ tagline }: { tagline: string }) => (
  <div className="bg-black/30 rounded-md px-2 md:px-5 py-1 md:py-2">
    <span className="italic text-sm md:text-base">&quot;{tagline}&quot;</span>
  </div>
);

export default Tagline;
