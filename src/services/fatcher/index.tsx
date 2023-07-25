import Satellite from "@services/satellite";
import SatelliteGit from "@services/satelliteGit";

const fetcher = (url: string) => Satellite.get(url).then((res) => res.data);
const fetcherGit = (url: string) =>
  SatelliteGit.get(url).then((res) => res.data);

export { fetcher, fetcherGit };
