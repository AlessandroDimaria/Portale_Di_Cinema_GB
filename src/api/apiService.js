const BASE_URL = "https://api.themoviedb.org/3";

const request = async (endpoint, params = "") => {
  try {
    const url = `${BASE_URL}${endpoint}?api_key=${
      import.meta.env.API_KEY
    }${params}`;

    const response = await fetch(url);

    if (!res.ok) throw new Error("Errore nella richiesta TMDB");

    const result = await res.json();
  } catch (error) {
    console.error("TMDB Error:", error);
  }
};

const predefinedCollections = [
  { id: 119, name: "The Lord of the Rings" },
  { id: 121938, name: "The Hobbit" },
  { id: 10, name: "Star Wars" },
  { id: 1241, name: "Harry Potter" },
  { id: 9485, name: "Fast & Furious" },
  { id: 86311, name: "James Bond" },
  { id: 87359, name: "Batman Collection" },
];

const getCollections = async () => {
  try {
    const allCollections = await Promise.all(
      predefinedCollections.map(async (col) => {
        const data = await request(`/collection/${col.id}`);
        return {
          ...data,
          label: col.name,
        };
      })
    );

    return allCollections;
  } catch (error) {
    console.error("Errore fetching collections:", error);
    throw error;
  }
};

export const apiService = {
  getPopular: async () => {
    const data = await request("/movie/popular");
    return data;
  },

  getTopRated: async () => {
    const data = await request("/movie/top_rated");
    return data;
  },

  getTrending: async () => {
    const data = await request("/trending/movie/week");
    return data;
  },

  getUpcoming: async () => {
    const data = await request("/movie/upcoming");
    return data;
  },

  searchMovies: async (query) => {
    const data = await request(
      "/search/movie",
      `&query=${encodeURIComponent(query)}`
    );
    return data;
  },

  getMovieDetails: async (id) => {
    const data = await request(`/movie/${id}`);
    return data;
  },

  getMovieCredits: async (id) => {
    const data = await request(`/movie/${id}/credits`);
    return data;
  },

  getCollections,
};
