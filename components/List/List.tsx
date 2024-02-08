import React from "react";
import Title from "@components/Title/Title";
import Item from "@components/Item/Item";
import {
  APITrendingMovie,
  APITrendingMovies,
  APITrendingSerie,
  APITrendingSeries,
} from "@_types/api";
import styles from "./List.module.css";

export interface ListProps {
  title: string;
  data: APITrendingMovies | APITrendingSeries;
  onClick: (id: number) => void;
}

const List = ({ title, data, onClick }: ListProps) => (
  <div>
    <Title>{title}</Title>
    <div className={`${styles.carousel_wrapper} mt-4 overflow-x-auto`}>
      <div className={`${styles.carousel} flex gap-5`}>
        {data?.map((item: APITrendingMovie | APITrendingSerie) => (
          <Item
            key={item.id}
            poster={item.poster_path}
            onClick={() => onClick(item.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

export default List;
