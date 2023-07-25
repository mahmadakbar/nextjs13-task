const generateRandomImg = (query = "technology") => {
  return `https://source.unsplash.com/random/900×700/?${query}?${new Date()}`;
};

export default generateRandomImg;
