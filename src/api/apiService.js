const request = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Errore nella richiesta TMDB");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("TMDB Error:", error);
    throw error;
  }
};

export const apiService = {
  getPopular: async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const data = await request(url);
    return data;
  },

  getTopRated: async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const data = await request(url);
    return data;
  },

  getTrending: async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/trending/movie/week?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const data = await request(url);
    return data;
  },

  getUpcoming: async () => {
    const url = `${import.meta.env.VITE_BASE_URL}/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    const data = await request(url);
    return data;
  },

  searchMovies: async (query) => {
    const encoded = encodeURIComponent(query);
    const url = `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${encoded}`;
    const data = await request(url);
    return data;
  },

  getMovieDetails: async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }&append_to_response=credits,videos`;
    const data = await request(url);
    return data;
  },
};
