import { Person, ProductionCompany } from "~/types/api";
import { ModalMovieDetails, ModalTVDetails } from "~/types/modal";

import ModalContentSection from "../../components/ModalContentSection";

import CompanyPanel from "./CompanyPanel";
import PersonPanel from "./PersonPanel";

type MoreInfoProps = {
  modalDetails: ModalMovieDetails | ModalTVDetails;
};

const MoreInfo = ({ modalDetails }: MoreInfoProps) => (
  <div className="grid grid-cols-1 gap-5">
    <div className="flex flex-col gap-5">
      {modalDetails.mediaType === "tv" && modalDetails.createdBy.length > 0 && (
        <ModalContentSection title="Une série créée par">
          <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
            {modalDetails.createdBy.map((person: Person) => (
              <PersonPanel
                key={person.id}
                bgProfile={person.profile_path}
                name={person.name}
                gender={person.gender}
              />
            ))}
          </div>
        </ModalContentSection>
      )}
      {modalDetails.mediaType === "tv" && modalDetails.networks.length > 0 && (
        <ModalContentSection title="Série diffusée sur">
          <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
            {modalDetails.networks.map((company: ProductionCompany) => (
              <CompanyPanel
                key={company.id}
                logo={company.logo_path}
                name={company.name}
              />
            ))}
          </div>
        </ModalContentSection>
      )}
      {modalDetails.productionCompanies?.length > 0 && (
        <ModalContentSection title="Produit par">
          <div className="grid grid-rows-1 grid-cols-3 md:grid-cols-5 gap-2 md:gap-5">
            {modalDetails.productionCompanies.map(
              (company: ProductionCompany) => (
                <CompanyPanel
                  key={company.id}
                  logo={company.logo_path}
                  name={company.name}
                />
              )
            )}
          </div>
        </ModalContentSection>
      )}
    </div>
  </div>
);

export default MoreInfo;
