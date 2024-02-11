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

const ModalHeader = ({ modalDetails, onClose }: ModalHeaderProps) => (
  <ImageBackground bgImage={modalDetails.bgImage}>
    {modalDetails.tagline && <Tagline tagline={modalDetails.tagline} />}
    <CloseButton onClose={onClose} />
    <HeaderGradientOverlay />
    <div className="absolute px-10 bottom-5 left-0 right-0 flex z-20 flex-col md:flex-row items-center md:items-end">
      <MainInformation
        endYear={modalDetails.yearOfEnd}
        mediaType={modalDetails.mediaType}
        originalTitle={modalDetails.originalTitle}
        releaseYear={modalDetails.yearOfRelease}
        runtime={modalDetails.runtime}
        title={modalDetails.title}
      />
      {modalDetails.nbOfVotes > 0 && (
        <Rating note={modalDetails.rating} nbOfVotes={modalDetails.nbOfVotes} />
      )}
    </div>
  </ImageBackground>
);

export default ModalHeader;
