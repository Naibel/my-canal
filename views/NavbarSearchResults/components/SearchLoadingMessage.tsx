import Image from "next/image";

import ellipse from "../../../public/assets/ellipse.png";

export const SearchLoadingMessage = () => (
  <div className="flex flex-1 flex-col justify-center items-center">
    <Image
      className="animate-spin"
      src={ellipse}
      alt="loader"
      width={80}
      height={80}
    />
    <h2 className={`text-3xl mt-5 text-left uppercase font-semibold italic`}>
      Recherche en cours
    </h2>
    <h2 className={`text-xl text-left uppercase italic`}>
      On patiente un peu...
    </h2>
  </div>
);
