import FilmList from "@/components/FilmList/FilmList";
import NavBar from "@/components/NavBar/NavBar";
import SeriesList from "@components/SerieList/SerieList";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col py-20 px-5 gap-5">
        <FilmList />
        <SeriesList />
      </main>
    </>
  );
}
