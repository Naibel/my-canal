import { BsLink } from "react-icons/bs";
import { LiaImdb } from "react-icons/lia";
import Image from "next/image";
import Link from "next/link";

import {
  MovieDetails,
  Network,
  ProductionCompany,
  TVSeriesDetails,
} from "~/types/api";
import { IMAGE_PREFIX_URL } from "~/utils/fetch";
import { formatDateToFrLocale, formatToUSD } from "~/utils/format";

import InfoLine from "./components/InfoLine";
import Keywords from "./components/Keywords";
import SpokenLanguages from "./components/SpokenLanguages";

const SideBar = ({ data }: { data: TVSeriesDetails | MovieDetails }) => (
  <div className="flex flex-col w-full md:w-72">
    <h2 className="uppercase italic font-semibold text-lg bg-neutral-800 px-5 py-3">
      Autres infos
    </h2>
    <div className="bg-neutral-900 flex flex-1  flex-col gap-2 md:gap-4 p-3 md:p-5">
      <div className="flex align-items gap-5">
        {data.homepage && (
          <Link href={data.homepage} target="_blank">
            <BsLink
              size={50}
              className="duration-300 fill-neutral-400 hover:fill-white"
            />
          </Link>
        )}
        {data.media_type === "movie" && data.imdb_id && (
          <Link href={"https://imdb.com/title/" + data.imdb_id} target="_blank">
            <LiaImdb
              size={50}
              className="duration-300 fill-neutral-400 hover:fill-yellow-500 active:fill-yellow-600"
            />
          </Link>
        )}
      </div>

      {data.media_type === "movie" && (
        <InfoLine
          label="Date de sortie"
          value={formatDateToFrLocale(data.release_date)}
        />
      )}
      {data.media_type === "tv" && (
        <>
          <InfoLine label="Type" value={data.type} />{" "}
          <InfoLine
            label="Première diffusion"
            value={formatDateToFrLocale(data.first_air_date)}
          />
          <InfoLine
            label="Dernière diffusion"
            value={formatDateToFrLocale(data.last_air_date)}
          />
        </>
      )}
      {data.media_type === "tv" && data.networks && (
        <div className="flex flex-col">
          <h3 className="text-md uppercase italic font-semibold">
            Diffuseur{data.networks.length > 1 ? "s" : ""}
            {data.networks.length > 1 ? "s" : ""}
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.networks.map((network: Network) => (
              <div
                key={"logo" + network.id}
                className="rounded-sm p-2 bg-neutral-200 flex items-center"
              >
                <Image
                  width={50}
                  height={0}
                  alt="logo network"
                  src={`${IMAGE_PREFIX_URL}${network.logo_path}`}
                  placeholder="empty"
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {data.production_companies && (
        <div className="flex flex-col">
          <h3 className="text-md uppercase italic font-semibold">
            Société{data.production_companies.length > 1 ? "s" : ""} de
            production
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.production_companies.map((company: ProductionCompany) => (
              <div
                key={"logo" + company.id}
                className="rounded-sm p-2 bg-neutral-200 flex items-center"
              >
                {company.logo_path ? (
                  <Image
                    width={50}
                    height={0}
                    alt="logo company"
                    src={`${IMAGE_PREFIX_URL}${company.logo_path}`}
                    placeholder="empty"
                    className=""
                  />
                ) : (
                  <span className="text-sm text-neutral-600">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <SpokenLanguages label="Langues" values={data.spoken_languages} />
      <InfoLine label="Statut" value={data.status} />
      {data.media_type === "movie" && (
        <>
          <InfoLine label="Budget" value={formatToUSD(data.budget)} />
          <InfoLine label="Box Office" value={formatToUSD(data.revenue)} />
        </>
      )}
      {data.media_type === "movie" && (
        <Keywords keywords={data.keywords.keywords} />
      )}
      {data.media_type === "tv" && (
        <Keywords keywords={data.keywords.results} />
      )}
    </div>
  </div>
);

export default SideBar;
