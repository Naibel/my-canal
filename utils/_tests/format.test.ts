import { ModalMovieDetails, ModalTVDetails } from "~/types";
import { APIMovieDetails, APITVSeriesDetails } from "~/types/api";

import {
  checkStatus,
  formatDateToFrLocale,
  formatMovieData,
  formatToUSD,
  formatTVData,
} from "../format";

import { mockMovieDetails, mockTVSeriesDetails } from "./mocks/api";
import { expectedMovieResult, expectedTVSeriesResult } from "./mocks/results";

describe("formatToUSD", () => {
  it("converts sum number to USD currency when sum is higher than zero", () => {
    expect(formatToUSD(15000)).toBe("15 000,00 $US");
  });
  it("returns empty string when sum is zero", () => {
    expect(formatToUSD(0)).toBe("");
  });
  it("returns empty string when sum is less than 0", () => {
    expect(formatToUSD(-6780)).toBe("");
  });
});

describe("formatDateToFrLocale", () => {
  it("converts EN-formatted date string to FR-formatted string", () => {
    expect(formatDateToFrLocale("2023-11-08")).toBe("08/11/2023");
  });
  it("returns time string when parameter is empty", () => {
    expect(formatDateToFrLocale("")).toBe("");
  });
});

describe("formatTVData", () => {
  it("formats api data from a tv series into a ModalTVDetails formatted object", () => {
    expect(formatTVData(mockTVSeriesDetails)).toStrictEqual(
      expectedTVSeriesResult
    );
  });

  it("returns undefined bgImage link when no backdrop_path is sent to API", () => {
    const apiMock: APITVSeriesDetails = {
      ...mockTVSeriesDetails,
      backdrop_path: null,
    };
    const expectedResult: ModalTVDetails = {
      ...expectedTVSeriesResult,
      bgImage: undefined,
    };

    expect(formatTVData(apiMock)).toStrictEqual(expectedResult);
  });

  it("returns undefined yearOfEnd value and change status when show still is in production", () => {
    const apiMock: APITVSeriesDetails = {
      ...mockTVSeriesDetails,
      status: "In Production",
      in_production: true,
    };
    const expectedResult: ModalTVDetails = {
      ...expectedTVSeriesResult,
      status: "En cours de production",
      yearOfEnd: undefined,
    };

    expect(formatTVData(apiMock)).toStrictEqual(expectedResult);
  });

  it("returns empty lastAirDate string when last_air_date value not sent by API", () => {
    const apiMock: APITVSeriesDetails = {
      ...mockTVSeriesDetails,
      last_air_date: "",
    };
    const expectedResult: ModalTVDetails = {
      ...expectedTVSeriesResult,
      lastAirDate: "",
      yearOfEnd: NaN, //TEST A CORRIGER
    };

    expect(formatTVData(apiMock)).toStrictEqual(expectedResult);
  });
});

describe("formatMovieData", () => {
  it("formats api data from a movie into a ModalMovieDetails formatted object", () => {
    expect(formatMovieData(mockMovieDetails)).toStrictEqual(
      expectedMovieResult
    );
  });

  it("returns undefined bgImage link when no backdrop_path is sent to API", () => {
    const apiMock: APIMovieDetails = {
      ...mockMovieDetails,
      backdrop_path: null,
    };
    const expectedResult: ModalMovieDetails = {
      ...expectedMovieResult,
      bgImage: undefined,
    };

    expect(formatMovieData(apiMock)).toStrictEqual(expectedResult);
  });

  it("returns undefined imdbUrl link when no imdb_id is sent to API", () => {
    const apiMock: APIMovieDetails = {
      ...mockMovieDetails,
      imdb_id: null,
    };
    const expectedResult: ModalMovieDetails = {
      ...expectedMovieResult,
      imdbUrl: undefined,
    };

    expect(formatMovieData(apiMock)).toStrictEqual(expectedResult);
  });

  it('returns "Déjà sorti" as status in modal details when movie has been released', () => {
    const apiMock: APIMovieDetails = {
      ...mockMovieDetails,
      status: "Released",
    };
    const expectedResult: ModalMovieDetails = {
      ...expectedMovieResult,
      status: "Déjà sorti",
    };

    expect(formatMovieData(apiMock)).toStrictEqual(expectedResult);
  });

  it('returns "Pas encore sorti" as status in modal details when movie has not yet been released', () => {
    const apiMock: APIMovieDetails = {
      ...mockMovieDetails,
      status: "In Production",
    };
    const expectedResult: ModalMovieDetails = {
      ...expectedMovieResult,
      status: "Pas encore sorti",
    };

    expect(formatMovieData(apiMock)).toStrictEqual(expectedResult);
  });
});

describe("checkStatus", () => {
  it('returns "En cours de production" when show is in production', () => {
    expect(checkStatus(true, "In Production")).toBe("En cours de production");
  });
  it('returns "En cours de diffusion" when show is still on air', () => {
    expect(checkStatus(true, "Returning Series")).toBe("En cours de diffusion");
  });
  it('returns "Production terminée" when show is no longer in production', () => {
    expect(checkStatus(false, "Ended")).toBe("Production terminée");
  });
  it('returns "Inconnu" when informations sent by the API are contradictory', () => {
    expect(checkStatus(true, "Ended")).toBe("Inconnu");
  });
});
