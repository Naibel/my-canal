import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { getDetails, IMAGE_PREFIX_URL } from "~/utils/fetch";

import ellipse from "../../public/assets/ellipse.png";
import ModalContentSection from "../Modal/components/ModalContent/components/ModalContentSection";
import {
  GradientOverlay,
  MainInformation,
  Rating,
  Tagline,
} from "../Modal/components/ModalHeader/components";

import ImageBackground from "./components/ImageBackground";

const Details = () => {
  const pathname = usePathname();

  const { data, isPending } = useQuery({
    queryKey: ["details"],
    queryFn: () => getDetails(pathname),
  });

  return (
    <div>
      {isPending && (
        <Image
          className="animate-spin"
          src={ellipse}
          alt="loader"
          width={100}
          height={100}
        />
      )}
      {data && (
        <>
          <ImageBackground bgImage={`${IMAGE_PREFIX_URL}${data.backdrop_path}`}>
            <div className="p-5">
              <ModalContentSection title="Résumé">
                <div className="max-w-7xl m-auto">{data.overview}</div>
              </ModalContentSection>
              <ModalContentSection title="Crée par">
                <div className="max-w-7xl m-auto"></div>
              </ModalContentSection>
            </div>
            {/* <GradientOverlay /> */}
          </ImageBackground>
          <div className="bg-black p-5">
            <div className="max-w-7xl m-auto">{data.overview}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
