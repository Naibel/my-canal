import { ModalMovieDetails, ModalTVDetails } from "~/types";

import CloseButton from "./CloseButton";
import HeaderGradientOverlay from "./GradientOverlay";
import ImageBackground from "./ImageBackground";
import MainInformation from "./MainInformation";
import Rating from "./Rating";
import Tagline from "./Tagline";

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
      <HeaderGradientOverlay />
      <div className="absolute px-10 bottom-5 left-0 right-0 flex z-20 flex-col md:flex-row items-center md:items-end">
        <MainInformation
          endYear={mediaType === "tv" ? modalDetails.yearOfEnd : undefined}
          mediaType={mediaType}
          originalTitle={originalTitle}
          releaseYear={yearOfRelease}
          runtime={mediaType === "movie" ? modalDetails.runtime : undefined}
          title={title}
        />
        {nbOfVotes > 0 && <Rating note={rating} nbOfVotes={nbOfVotes} />}
      </div>
    </ImageBackground>
  );
};

export default ModalHeader;
