import { Container, Slider } from "@components";
import { generateRandomImg } from "@utils";
import Image from "next/image";

export default function Home() {
  const ramdom = [
    generateRandomImg("Indonesia"),
    generateRandomImg("USA"),
    generateRandomImg("Japan"),
    generateRandomImg("China"),
    generateRandomImg("Turkey"),
    generateRandomImg("Australia"),
  ];
  return (
    <Container>
      <div className="flex flex-1 min-h-screen ">
        <Slider data={ramdom} />
      </div>
    </Container>
  );
}
