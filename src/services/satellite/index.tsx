import axios from "axios";

const Satellite = axios.create({
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMGRhYjY4Njg3OWIyZTEzMjQ0NzU4ODQyNTlkNDdhZiIsInN1YiI6IjY0ODk4OTA3ZTM3NWMwMDEzOWMyNjBmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DKNew-pTCj2rge7FM4JKa9dR5PI5_p4eKqocqnYHOsU",
  },
});

// Satellite.interceptors.response.use(
//   (response) => {
//     console.log("SUCCESS SATELLITE", JSON.stringify(response, null, 2));
//     return response;
//   },
//   (error) => {
//     console.log("ERROR SATELLITE", JSON.stringify(error, null, 2));
//   }
// );

export default Satellite;
