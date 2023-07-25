import { Container } from "@components";
import React, { useState } from "react";
import ListUser from "./listUser";
import FormsSearch from "./forms";

export const metadata = {
  title: "Users",
};

export default function Users() {
  return (
    <Container>
      <div className="flex flex-1 min-h-screen flex-col">
        <h1 className="text-4xl font-bold">Cari User</h1>

        <FormsSearch />
      </div>
    </Container>
  );
}
