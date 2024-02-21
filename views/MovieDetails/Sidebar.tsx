import { LiaImdb } from "react-icons/lia";
import Image from "next/image";

import { LinkButton } from "~/components";
import { APIMovieDetails, Network, ProductionCompany } from "~/types/api";
import { IMAGE_PREFIX_URL } from "~/utils/fetch";
import { formatDateToFrLocale, formatToUSD } from "~/utils/format";

import InfoLine from "../TVDetails/components/SideBar/components/InfoLine";
import SpokenLanguages from "../TVDetails/components/SideBar/components/SpokenLanguages";

const SideBar = ({ data }: { data: APIMovieDetails }) => (
  <div className="bg-neutral-900 flex col-span-1 flex-col gap-2 md:gap-4 pr-5 md:pr-8 pl-5 py-5">
    <h2 className="uppercase italic font-semibold text-xl">Autres infos</h2>
    {data.imdb_id && (
      <LinkButton
        color="yellow"
        linkTo={"https://imdb.com/title/" + data.imdb_id}
      >
        <div className="flex">
          <LiaImdb size={45} color="black" />
        </div>
      </LinkButton>
    )}
    {data.homepage && (
      <LinkButton linkTo={data.homepage}>
        <span className="text-sm uppercase italic font-semibold px-5 py-3">
          Site officiel
        </span>
      </LinkButton>
    )}
    <InfoLine
      label="Date de sortie"
      value={formatDateToFrLocale(data.release_date)}
    />
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
    <InfoLine label="Budget" value={formatToUSD(data.budget)} />
    <InfoLine label="Box Office" value={formatToUSD(data.revenue)} />
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
