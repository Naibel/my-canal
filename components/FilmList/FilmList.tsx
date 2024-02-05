"use client";
import React, { useState } from "react";
import Title from "@components/Title/Title";
import Icon from "@components/Icon/Icon";

export interface Film {
  title: string;
}

const FilmList = () => {
  const [films, setFilms] = useState<Film[]>([
    {
      title: "Autant en emporte le vent",
    },
    {
      title: "Casablanca",
    },
    {
      title: "Citizen Kane",
    },
    {
      title: "Le fabuleaux destin d'Amélie Poulain",
    },
    {
      title: "Oppenheimer",
    },
    {
      title: "Godzilla Minus One",
    },
    {
      title: "Les Trois Mousquetaires : Milady",
    },
    {
      title: "Astérix & Obélix Mission Cléopatre",
    },
  ]);

  return (
    <div>
      <Title>Les derniers films</Title>
      <div className="flex bg-scroll gap-5 overflow-auto">
        {films.map((film: Film) => (
          <Icon title={film.title} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
