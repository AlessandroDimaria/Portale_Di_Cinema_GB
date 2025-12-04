import React from "react";

export default function Category({ title, items }) {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="items-row">
        {items.map((item) => (
          <div key={item.id} className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
