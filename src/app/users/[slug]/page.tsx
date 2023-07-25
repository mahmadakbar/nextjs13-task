import { Container } from "@components";
import Satellite from "@services/satellite";
import React from "react";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: Params) {
  return {
    title: slug,
  };
}
async function getUserData(param: string) {
  let res;
  await Satellite.get("https://api.github.com/users/" + param)
    .then((response) => {
      console.log("RESPONSE", response);
      res = response.data;
    })
    .catch((error) => {
      console.log("ERROR GET DATA", error);
    });
  return res;
}

export default async function UserDetails({ params }: Params) {
  const data = (await getUserData(params.slug)) as any;
  return (
    <Container>
      <div className="flex flex-1 justify-center items-center min-h-screen flex-col ">
        <h1 className="text-4xl font-bold">DETAIL USER : {params.slug}</h1>
        <h1 className="text-4xl font-bold">ID : {data?.id}</h1>
        <h1 className="text-4xl font-bold">GIT URL : {data?.html_url}</h1>
        <h1 className="text-4xl font-bold">EMAIL : {data?.email || "-"}</h1>
        <h1 className="text-4xl font-bold">
          LOCATION : {data?.location || "-"}
        </h1>
      </div>
    </Container>
  );
}
