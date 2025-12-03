import { useState, useEffect } from "react";
import { apiService } from "../api/apiService";

export const useMovies = (type, queryOrId = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
};
