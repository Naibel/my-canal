import React from "react";
import Title from "@components/Title/Title";
import Item from "@components/Item/Item";
import {
  APITrendingMovie,
  APITrendingMovies,
  APITrendingSerie,
  APITrendingSeries,
} from "@_types/api";

export interface ListProps {
  title: string;
  data: APITrendingMovies | APITrendingSeries;
  onClick: (id: number) => void;
}

const List = ({ title, data, onClick }: ListProps) => (
  <div>
    <Title>{title}</Title>
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {data.map((item: APITrendingMovie | APITrendingSerie) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.media_type === "movie" ? item.title : item.name}
          poster={item.poster_path}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  </div>
);

export default List;
