import fetcher from "@services/fatcher";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

interface Props {
  search: string;
}

export default function ListUser({ search }: Props) {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/search/users?q=" + search,
    fetcher
  );
  return (
    <div className="mt-5">
      <p>Hasil Pencarian : {search}</p>

      <div>
        {isLoading ? (
          <p>Moon Tunggu ...</p>
        ) : error ? (
          <p>Terjadi kesalahan</p>
        ) : (
          <div>
            {data.items.map((item: any, index: number) => (
              <Link key={index} href={`/users/${item.login}`}>
                <div className="custom-shadow bg-sky-300 px-5 py-2 rounded-md text-black my-5">
                  <Image
                    src={item.avatar_url}
                    width={120}
                    height={120}
                    alt={"Avatar " + item.login}
                  />
                  <p>{item.login}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
