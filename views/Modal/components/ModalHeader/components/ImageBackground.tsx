import { ReactNode } from "react";

import { LogoMyCanal } from "~/components";

type ImageBackgroundProps = {
  bgImage?: string;
  children: ReactNode;
};

const ImageBackground = ({ bgImage, children }: ImageBackgroundProps) => (
  <header
    style={{
      backgroundImage: bgImage ? `url(${bgImage})` : "",
    }}
    className="bg-neutral-700 flex justify-center aspect-video relative px-5 md:px-10 md:pt-72 pb-4 bg-cover bg-center"
  >
    {!bgImage && (
      <div className="opacity-30">
        <LogoMyCanal size="large" />
      </div>
    )}
    {children}
  </header>
);

export default ImageBackground;
