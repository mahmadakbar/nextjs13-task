"use client";

import { Container } from "@components";
import React, { useState } from "react";
import ListUser from "./listUser";

export const metadata = {
  title: "Users",
};

export default function Users() {
  const [search, setSearch] = useState("");
  const onSubmited = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputResult = event.currentTarget[0] as HTMLInputElement;

    console.log("MENCARIII", inputResult.value);
    setSearch(inputResult.value);
  };

  return (
    <Container>
      <div className="flex flex-1 min-h-screen flex-col">
        <h1 className="text-4xl font-bold">Cari User</h1>
        <form
          className="flex mt-5 rounded-xl custom-shadow "
          onSubmit={onSubmited}
        >
          <input
            placeholder="Cari Users"
            className="flex-1 p-2 rounded-l-xl text-black bg-slate-200"
          />
          <button className="bg-lime-600 px-5 py-2 rounded-r-xl">
            Cari User
          </button>
        </form>

        {search && <ListUser search={search} />}
      </div>
    </Container>
  );
}
