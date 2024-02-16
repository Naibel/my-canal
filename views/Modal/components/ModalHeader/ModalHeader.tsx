import { ModalMovieDetails, ModalTVDetails } from "~/types/modal";

import {
  CloseButton,
  GradientOverlay,
  ImageBackground,
  MainInformation,
  Rating,
  Tagline,
} from "./components";

type ModalHeaderProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
  onClose: () => void;
};

const ModalHeader = ({ modalDetails, onClose }: ModalHeaderProps) => {
  const { header } = modalDetails;

  return (
    <ImageBackground bgImage={header.bgImage}>
      {header.tagline && <Tagline tagline={header.tagline} />}
      <CloseButton onClose={onClose} />
      <GradientOverlay />
      <div className="absolute md:px-10 bottom-0 md:bottom-5 left-0 right-0 flex z-10 flex-col md:flex-row items-center md:items-end">
        <MainInformation
          endYear={
            modalDetails.mediaType === "tv"
              ? modalDetails.header.yearOfEnd
              : undefined
          }
          mediaType={modalDetails.mediaType}
          originalTitle={header.originalTitle}
          releaseYear={header.yearOfRelease}
          runtime={
            modalDetails.mediaType === "movie"
              ? modalDetails.header.runtime
              : undefined
          }
          title={header.title}
        />
        {header.nbOfVotes > 0 && (
          <Rating rating={header.rating} nbOfVotes={header.nbOfVotes} />
        )}
      </div>
    </ImageBackground>
  );
};

export default ModalHeader;
