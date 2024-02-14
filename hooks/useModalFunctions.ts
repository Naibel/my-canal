import { getMovieDetails, getTVDetails } from "~/utils/fetch";

import useAlertStore from "./useAlertStore";
import useModalStore from "./useModalStore";

export default function useModalFunctions() {
  const { setModalDetails } = useModalStore();
  const { setAlertMessage } = useAlertStore();

  // TODO: N'utiliser qu'une fonction avec un type générique qui dispatchera le bon endpoint et la bonne fonction de formattage
  const displayMovieModal = (id: number) => {
    getMovieDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

  const displayTVModal = (id: number) => {
    getTVDetails(id, setModalDetails, (error: any) =>
      setAlertMessage({
        type: "error",
        message: error.message,
      })
    );
  };

  return { displayMovieModal, displayTVModal };
}
