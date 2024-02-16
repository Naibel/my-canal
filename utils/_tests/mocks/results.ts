import { ModalMovieDetails, ModalTVDetails } from "~/types/modal";

export const expectedMovieResult: ModalMovieDetails = {
  bgImage:
    "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
  boxOffice: "402 027 830,00 $US",
  budget: "165 000 000,00 $US",
  genres: [
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 12,
      name: "Adventure",
    },
  ],
  homepage: "https://www.dunemovie.com/",
  id: 438631,
  imdbUrl: "https://imdb.com/title/tt1160419",
  mediaType: "movie",
  nbOfVotes: 10020,
  overview:
    "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
  originalTitle: "Dune",
  productionCompanies: [
    {
      id: 923,
      logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
      name: "Legendary Pictures",
      origin_country: "US",
    },
  ],
  rating: 7.785,
  releaseDate: "15/09/2021",
  runtime: "155'",
  spokenLanguages: [
    {
      english_name: "Mandarin",
      iso_639_1: "zh",
      name: "普通话",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Déjà sorti",
  tagline: "It begins.",
  title: "Dune",
  yearOfRelease: 2021,
};

export const expectedTVSeriesResult: ModalTVDetails = {
  bgImage:
    "https://image.tmdb.org/t/p/original/rIe3PnM6S7IBUmvNwDkBMX0i9EZ.jpg",
  createdBy: [
    {
      id: 9813,
      credit_id: "5256c8c219c2956ff604858a",
      name: "David Benioff",
      gender: 2,
      profile_path: "/xvNN5huL0X8yJ7h3IZfGG4O2zBD.jpg",
    },
    {
      id: 228068,
      credit_id: "552e611e9251413fea000901",
      name: "D.B. Weiss",
      gender: 2,
      profile_path: "/2RMejaT793U9KRk2IEbFfteQntE.jpg",
    },
  ],
  firstAirDate: "17/04/2011",
  genres: [
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10759,
      name: "Action & Adventure",
    },
  ],
  homepage: "http://www.hbo.com/game-of-thrones",
  id: 1399,
  lastAirDate: "19/05/2019",
  lastEpisodeToAir: {
    id: 1551830,
    name: "The Iron Throne",
    overview:
      "In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors.",
    vote_average: 4.642,
    vote_count: 279,
    air_date: "2019-05-19",
    episode_number: 6,
    episode_type: "finale",
    production_code: "806",
    runtime: 80,
    season_number: 8,
    show_id: 1399,
    still_path: "/zBi2O5EJfgTS6Ae0HdAYLm9o2nf.jpg",
  },
  mediaType: "tv",
  nbOfEpisodes: 73,
  nbOfSeasons: 8,
  nbOfVotes: 22609,
  networks: [
    {
      id: 49,
      logo_path: "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      name: "HBO",
      origin_country: "US",
    },
  ],
  nextEpisodeToAir: null,
  overview:
    "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
  originalTitle: "Game of Thrones",
  productionCompanies: [
    {
      id: 76043,
      logo_path: "/9RO2vbQ67otPrBLXCaC8UMp3Qat.png",
      name: "Revolution Sun Studios",
      origin_country: "US",
    },
    {
      id: 12525,
      logo_path: null,
      name: "Television 360",
      origin_country: "",
    },
    {
      id: 5820,
      logo_path: null,
      name: "Generator Entertainment",
      origin_country: "GB",
    },
    {
      id: 12526,
      logo_path: null,
      name: "Bighead Littlehead",
      origin_country: "US",
    },
  ],
  rating: 8.444,
  seasons: [
    {
      air_date: "2010-12-05",
      episode_count: 270,
      id: 3627,
      name: "Specials",
      overview: "",
      poster_path: "/aos6lC1JGYt6ZRL85lgstNsfSeY.jpg",
      season_number: 0,
      vote_average: 0,
    },
    {
      air_date: "2011-04-18",
      episode_count: 10,
      id: 3624,
      name: "Season 1",
      overview:
        "Trouble is brewing in the Seven Kingdoms of Westeros. For the driven inhabitants of this visionary world, control of Westeros' Iron Throne holds the lure of great power. But in a land where the seasons can last a lifetime, winter is coming...and beyond the Great Wall that protects them, an ancient evil has returned. In Season One, the story centers on three primary areas: the Stark and the Lannister families, whose designs on controlling the throne threaten a tenuous peace; the dragon princess Daenerys, heir to the former dynasty, who waits just over the Narrow Sea with her malevolent brother Viserys; and the Great Wall--a massive barrier of ice where a forgotten danger is stirring.",
      poster_path: "/wgfKiqzuMrFIkU1M68DDDY8kGC1.jpg",
      season_number: 1,
      vote_average: 8.3,
    },
    {
      air_date: "2012-03-31",
      episode_count: 10,
      id: 3625,
      name: "Season 2",
      overview:
        "The cold winds of winter are rising in Westeros...war is coming...and five kings continue their savage quest for control of the all-powerful Iron Throne. With winter fast approaching, the coveted Iron Throne is occupied by the cruel Joffrey, counseled by his conniving mother Cersei and uncle Tyrion. But the Lannister hold on the Throne is under assault on many fronts. Meanwhile, a new leader is rising among the wildings outside the Great Wall, adding new perils for Jon Snow and the order of the Night's Watch.",
      poster_path: "/9xfNkPwDOqyeUvfNhs1XlWA0esP.jpg",
      season_number: 2,
      vote_average: 8.2,
    },
    {
      air_date: "2013-03-30",
      episode_count: 10,
      id: 3626,
      name: "Season 3",
      overview:
        "Duplicity and treachery...nobility and honor...conquest and triumph...and, of course, dragons. In Season 3, family and loyalty are the overarching themes as many critical storylines from the first two seasons come to a brutal head. Meanwhile, the Lannisters maintain their hold on King's Landing, though stirrings in the North threaten to alter the balance of power; Robb Stark, King of the North, faces a major calamity as he tries to build on his victories; a massive army of wildlings led by Mance Rayder march for the Wall; and Daenerys Targaryen--reunited with her dragons--attempts to raise an army in her quest for the Iron Throne.",
      poster_path: "/5MkZjRnCKiIGn3bkXrXfndEzqOU.jpg",
      season_number: 3,
      vote_average: 8.3,
    },
    {
      air_date: "2014-04-06",
      episode_count: 10,
      id: 3628,
      name: "Season 4",
      overview:
        "The War of the Five Kings is drawing to a close, but new intrigues and plots are in motion, and the surviving factions must contend with enemies not only outside their ranks, but within.",
      poster_path: "/jXIMScXE4J4EVHUba1JgxZnWbo4.jpg",
      season_number: 4,
      vote_average: 8.4,
    },
    {
      air_date: "2015-04-13",
      episode_count: 10,
      id: 62090,
      name: "Season 5",
      overview:
        "The War of the Five Kings, once thought to be drawing to a close, is instead entering a new and more chaotic phase. Westeros is on the brink of collapse, and many are seizing what they can while the realm implodes, like a corpse making a feast for crows.",
      poster_path: "/7Q1Hy1AHxAzA2lsmzEMBvuWTX0x.jpg",
      season_number: 5,
      vote_average: 8.2,
    },
    {
      air_date: "2016-04-23",
      episode_count: 10,
      id: 71881,
      name: "Season 6",
      overview:
        "Following the shocking developments at the conclusion of season five, survivors from all parts of Westeros and Essos regroup to press forward, inexorably, towards their uncertain individual fates. Familiar faces will forge new alliances to bolster their strategic chances at survival, while new characters will emerge to challenge the balance of power in the east, west, north and south.",
      poster_path: "/p1udLh0gfqyZFmXBGa393gk8go5.jpg",
      season_number: 6,
      vote_average: 8.3,
    },
    {
      air_date: "2017-07-17",
      episode_count: 7,
      id: 81266,
      name: "Season 7",
      overview:
        "The long winter is here. And with it comes a convergence of armies and attitudes that have been brewing for years.",
      poster_path: "/oX51n32QyHeFP5kErksemJsJljL.jpg",
      season_number: 7,
      vote_average: 8.2,
    },
    {
      air_date: "2019-04-15",
      episode_count: 6,
      id: 107971,
      name: "Season 8",
      overview:
        "The Great War has come, the Wall has fallen and the Night King's army of the dead marches towards Westeros. The end is here, but who will take the Iron Throne?",
      poster_path: "/259Q5FuaD3TNB7DGauTaJVRC8XV.jpg",
      season_number: 8,
      vote_average: 6.4,
    },
  ],
  spokenLanguages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Production terminée",
  tagline: "Winter Is Coming",
  title: "Game of Thrones",
  yearOfRelease: 2011,
  yearOfEnd: 2019,
};
