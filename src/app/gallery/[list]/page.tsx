import { Container } from "@components";
import Satellite from "@services/satellite";
import Image from "next/image";

interface Params {
  params: { list: string };
}

async function getUserData(param: string) {
  let res;
  await Satellite.get("https://api.themoviedb.org/3/movie/" + param)
    .then((response) => {
      console.log("RESPONSE", response);
      res = response.data;
    })
    .catch((error) => {
      console.log("ERROR GET DATA", error);
    });
  return res;
}

export async function generateMetadata({ params: { list } }: Params) {
  const data = (await getUserData(list)) as any;
  return {
    title: data?.original_title,
  };
}

export default async function GaleryDetails({ params: { list } }: Params) {
  const data = (await getUserData(list)) as any;
  return (
    <Container>
      <div className="flex flex-col min-h-screen">
        <h1 className="text-4xl font-bold">{data?.original_title}</h1>

        <div className="mt-5  flex flex-row">
          <Image
            src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
            width={200}
            height={200}
            alt={"Avatar " + data?.original_title}
          />

          <div className="ml-5">
            <p className="">Overview : {data?.overview}</p>
            <p className="mt-5">League : {data?.original_language}</p>
            <p className="mt-5">
              Genres :{" "}
              {data?.genres.map(
                (item: any, index: number) =>
                  item.name + (index === data.genres.length - 1 ? "" : ", ")
              )}
            </p>
            <p className="mt-5">
              Production Companies :{" "}
              {data?.production_companies.map(
                (item: any, index: number) =>
                  item.name +
                  (index === data.production_companies.length - 1 ? "" : ", ")
              )}
            </p>
            <p className="mt-5">Score : {data?.vote_average}</p>
            <p className="mt-5">Site : {data?.homepage}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
