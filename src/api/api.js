import axios from "axios";

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/target/abs",
  params: { limit: "5" },
  headers: {
    "X-RapidAPI-Key": "a191927d1cmsh9c738ea7d1c4375p152bf2jsn2882ce34fd96",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const getExerciseData = async () => {
  const { data } = await axios.request(options);
  return data;
};
