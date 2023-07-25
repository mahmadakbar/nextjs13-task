import Satellite from "@services/satellite";

const fetcher = (url: string) => Satellite.get(url).then((res) => res.data);

export default fetcher;
