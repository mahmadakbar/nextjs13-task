import axios from "axios";

const SatelliteGit = axios.create({
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: "Bearer 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",
  },
});

SatelliteGit.interceptors.response.use(
  (response) => {
    console.log("SUCCESS SATELLITE", JSON.stringify(response, null, 2));
    return response;
  },
  (error) => {
    console.log("ERROR SATELLITE", JSON.stringify(error, null, 2));
  }
);

export default SatelliteGit;
