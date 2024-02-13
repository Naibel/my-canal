import Image from "next/image";

import ellipse from "../../public/assets/ellipse.png";

const LoadingOverlay = () => (
  <div
    className="absolute bg-black/70 left-0 right-0 top-0 bottom-0 overflow-hidden z-10
    flex items-center justify-center"
  >
    <Image
      className="animate-spin"
      src={ellipse}
      alt="loader"
      width={100}
      height={100}
    />
  </div>
);

export default LoadingOverlay;
