import { ReactNode } from "react";

import { LogoMyCanal } from "~/components";

type ImageBackgroundProps = {
  bgImage?: string;
  children: ReactNode;
  small?: boolean;
};

const ImageBackground = ({
  bgImage,
  children,
  small = false,
}: ImageBackgroundProps) => (
  <header
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : "",
    }}
    className="bg-neutral-700 flex justify-center relative bg-cover bg-top"
  >
    <div
      className={`flex flex-1 px-5 ${
        small ? "py-8" : "py-20"
      } bg-black/20 backdrop-saturate-125 backdrop-blur-md`}
    >
      {children}
    </div>
    {!bgImage && (
      <div className="opacity-30">
        <LogoMyCanal size="large" />
      </div>
    )}
  </header>
);

export default ImageBackground;
