import Image from "next/image";

import { LinkButton } from "~/components";
import { APITVSeriesDetails, Network, ProductionCompany } from "~/types/api";
import { IMAGE_PREFIX_URL } from "~/utils/fetch";
import { formatDateToFrLocale } from "~/utils/format";

import InfoLine from "./components/InfoLine";
import SpokenLanguages from "./components/SpokenLanguages";

const SideBar = ({ data }: { data: APITVSeriesDetails }) => (
  <div className="bg-neutral-900 flex col-span-1 flex-col gap-2 md:gap-4 pr-5 md:pr-8 pl-5 py-5">
    <h2 className="uppercase italic font-semibold text-xl">Autres infos</h2>
    {data.homepage && (
      <LinkButton linkTo={data.homepage}>
        <span className="text-sm uppercase italic font-semibold px-5 py-3">
          Site officiel
        </span>
      </LinkButton>
    )}
    <InfoLine label="Type" value={data.type} />
    <InfoLine
      label="Première diffusion"
      value={formatDateToFrLocale(data.first_air_date)}
    />
    <InfoLine
      label="Dernière diffusion"
      value={formatDateToFrLocale(data.last_air_date)}
    />
    {data.networks && (
      <div className="flex flex-col gap-3">
        <h3 className="text-md uppercase italic font-semibold">
          Diffuseur{data.networks.length > 1 ? "s" : ""}
          {data.networks.length > 1 ? "s" : ""}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {data.networks.map((network: Network) => (
            <div
              key={"logo" + network.id}
              className="rounded-sm p-2 bg-neutral-200"
            >
              <div
                style={{
                  backgroundImage: network.logo_path
                    ? `url(${IMAGE_PREFIX_URL}${network.logo_path})`
                    : "",
                }}
                className=" bg-contain  bg-center bg-no-repeat aspect-video	flex items-center justify-center text-center"
              ></div>
            </div>
          ))}
        </div>
      </div>
    )}
    {data.production_companies && (
      <div className="flex flex-col gap-3">
        <h3 className="text-md uppercase italic font-semibold">
          Société{data.production_companies.length > 1 ? "s" : ""} de production
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {data.production_companies.map((company: ProductionCompany) => (
            <div
              key={"logo" + company.id}
              className="rounded-sm p-2 bg-neutral-200"
            >
              <Image
                width={50}
                height={50}
                alt="logo company"
                src={`${IMAGE_PREFIX_URL}${company.logo_path}`}
                placeholder="empty"
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    )}

    <SpokenLanguages label="Langues" values={data.spoken_languages} />
    <InfoLine label="Statut" value={data.status} />
    {/* {modalDetails.mediaType === "movie" && (
      <>
        {modalDetails.sidebar.imdbUrl && (
          <LinkButton color="yellow" linkTo={modalDetails.sidebar.imdbUrl}>
            <div className="flex">
              <LiaImdb size={45} color="black" />
            </div>
          </LinkButton>
        )}
        <InfoLine
          label="Date de sortie"
          value={modalDetails.sidebar.releaseDate}
        />
        <SpokenLanguages
          label="Langues"
          values={modalDetails.sidebar.spokenLanguages}
        />
        <InfoLine label="Budget" value={modalDetails.sidebar.budget} />
        <InfoLine label="Box Office" value={modalDetails.sidebar.boxOffice} />
      </>
    )} */}
  </div>
);

export default SideBar;
