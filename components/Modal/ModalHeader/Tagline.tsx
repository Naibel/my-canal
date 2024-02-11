const Tagline = ({ tagline }: { tagline: string }) => (
  <div className="bg-black/70 rounded-md absolute top-5 left-5 px-5 py-2">
    <span className="italic">&quot;{tagline}&quot;</span>
  </div>
);

export default Tagline;
