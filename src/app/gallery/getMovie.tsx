"use client";

import fetcher from "@services/fatcher";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

interface Props {
  movie: string;
  title: string;
}

export default function GetMovie({ movie, title }: Props) {
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/" + movie,
    fetcher
  );
  return (
    <div className="mt-5 flex flex-col">
      <h1 className="text-4xl font-bold">{title}</h1>

      <div>
        {isLoading ? (
          <p>Mohon Tunggu ...</p>
        ) : error ? (
          <p>Terjadi kesalahan</p>
        ) : (
          <div className="flex flex-row overflow-x-auto">
            {data.results.map((item: any, index: number) => (
              <Link key={index} href={`/gallery/${item.id}`}>
                <div className="custom-shadow px-3 py-3 bg-slate-700 rounded-md text-white my-5 w-[150px] mx-5 items-center flex flex-col text-center h-[300px]">
                  <Image
                    src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                    width={120}
                    height={120}
                    alt={"Avatar " + item.original_title}
                  />
                  <div className="w-full h-full mt-5 overflow-hidden text-center">
                    <p>{item.original_title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
