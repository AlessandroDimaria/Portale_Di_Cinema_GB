import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Featured from "./Featured";
import Category from "./Category";
import { apiService } from "../../api/apiService";

export default function Homepage() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await apiService.getPopular();
        setPopular(popularData.results);

        const topRatedData = await apiService.getTopRated();
        setTopRated(topRatedData.results);

        const trendingData = await apiService.getTrending();
        setTrending(trendingData.results);

        const upcomingData = await apiService.getUpcoming();
        setUpcoming(upcomingData.results);
      } catch (error) {
        console.error("Errore nel caricamento:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="homepage">
      <Sidebar />
      <div className="main-content">
        <Featured show={popular[0]} />
        <Category title="New this week" items={upcoming} />
        <Category title="Trending Now" items={trending} />
        <Category title="Top Rated" items={topRated} />
      </div>
    </div>
  );
}


