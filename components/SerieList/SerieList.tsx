"use client";
import React, { useState } from "react";
import Title from "@components/Title/Title";
import Icon from "@components/Icon/Icon";
import { Film } from "@components/FilmList/FilmList";

const SerieList = () => {
  const [series, setSeries] = useState<Film[]>([
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
      <Title>Les dernières séries</Title>
      <div className="flex bg-scroll gap-5 overflow-auto">
        {series.map((serie: Film) => (
          <Icon title={serie.title} />
        ))}
      </div>
    </div>
  );
};

export default SerieList;
