import { ModalMovieDetails, ModalTVDetails } from "~/types";

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
  const {
    bgImage,
    tagline,
    mediaType,
    originalTitle,
    yearOfRelease,
    title,
    rating,
    nbOfVotes,
  } = modalDetails;

  return (
    <ImageBackground bgImage={bgImage}>
      {tagline && <Tagline tagline={tagline} />}
      <CloseButton onClose={onClose} />
      <GradientOverlay />
      <div className="absolute md:px-10 bottom-0 md:bottom-5 left-0 right-0 flex z-10 flex-col md:flex-row items-center md:items-end">
        <MainInformation
          endYear={mediaType === "tv" ? modalDetails.yearOfEnd : undefined}
          mediaType={mediaType}
          originalTitle={originalTitle}
          releaseYear={yearOfRelease}
          runtime={mediaType === "movie" ? modalDetails.runtime : undefined}
          title={title}
        />
        {nbOfVotes > 0 && <Rating rating={rating} nbOfVotes={nbOfVotes} />}
      </div>
    </ImageBackground>
  );
};

export default ModalHeader;
