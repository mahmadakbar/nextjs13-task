// Store Data
const SetStorage = (key: string, value: any) => {
  const selectedCategoryName =
    typeof window !== "undefined"
      ? localStorage.setItem(key, JSON.stringify(value))
      : undefined;
  console.log(selectedCategoryName);
  return selectedCategoryName;
};

// Retrive Data
const GetStorage = (key: string) => {
  const data =
    typeof window !== "undefined" ? localStorage.getItem(key) : undefined;
  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log("ERROR GET DATA", e);
  }
};

export { SetStorage, GetStorage };
