// App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MovieApp from "./components/MovieApp/MovieApp";
import "./App.css";
import "./components/Sidebar/Sidebar.css";

const App = () => {
  return (
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          <MovieApp />
        </div>
      </div>
  );
};

export default App;
