import StarRating from "@components/StarRating/StarRating";
import { ModalMovieDetails, ModalTVDetails } from "@_types";
import { IoClose } from "react-icons/io5";
import OtherInfo from "./OtherInfo";

type ModalProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
  handleClose: () => void;
};

const Modal = ({ modalDetails, handleClose }: ModalProps) => {
  return (
    <div className="bg-black/70 fixed overflow-auto left-0 right-0 h-screen z-10">
      <div className="bg-black max-w-4xl overflow-hidden mx-auto md:mt-6 md:rounded-md shadow-lg">
        <div
          style={{
            backgroundImage: `url(${modalDetails.bgImage})`,
          }}
          className="relative px-10 pt-72 pb-4 bg-cover bg-center"
        >
          <div
            className="rounded-full p-1 bg-black/70 hover:bg-black cursor-pointer absolute z-10 top-3 right-3 "
            onClick={handleClose}
          >
            <IoClose size={30} />
          </div>
          <div className="absolute z-0 left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-transparent from-50%  to-black to-100%"></div>
          <div className="absolute px-10 bottom-5 left-0 right-0 flex z-20 flex-col md:flex-row items-center md:items-end">
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h2
                className={`text-3xl text-left uppercase font-semibold italic`}
              >
                {modalDetails.title}
              </h2>
              {modalDetails.title !== modalDetails.originalTitle && (
                <h2
                  className={`text-lg text-left uppercase font-semibold italic`}
                >
                  {modalDetails.originalTitle}
                </h2>
              )}
              <h3 className={`text-md text-left uppercase italic`}>
                {modalDetails.mediaType === "movie"
                  ? "Film"
                  : "Série télévisée"}{" "}
                - {modalDetails.yearOfRelease}
              </h3>
            </div>
            <div className="flex flex-col items-center md:items-end py-5 md:py-0">
              <StarRating note={modalDetails.rating} />
              <div>
                <span className="uppercase italic">Note moyenne </span>:{" "}
                <span className="uppercase italic font-semibold">
                  {modalDetails.rating}/10{" "}
                </span>
                <span className="italic">
                  sur{" "}
                  <span className="font-semibold">
                    {modalDetails.nbOfVotes}
                  </span>{" "}
                  votes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 px-10 py-5">
          <div className="flex-1">
            <h3 className="uppercase italic font-semibold">Résumé</h3>
            <p>{modalDetails.overview}</p>
          </div>
          {modalDetails.mediaType === "tv" && (
            <OtherInfo modalDetails={modalDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
