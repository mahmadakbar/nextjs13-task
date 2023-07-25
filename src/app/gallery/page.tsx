import { Container } from "@components";
import GetMovie from "./getMovie";

export const metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <Container>
      <GetMovie key={"now_playing"} title="Now Playing" movie="now_playing" />
      <GetMovie key={"popular"} title="Popular" movie="popular" />
      <GetMovie key={"top_rated"} title="Top Rated" movie="top_rated" />
      <GetMovie key={"upcoming"} title="Upcoming" movie="upcoming" />
    </Container>
  );
}
