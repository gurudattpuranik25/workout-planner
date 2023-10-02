import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Exercise.css";
import Form from "../../components/Form/Form";
// import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";

function Exercises() {
  const [ageGroup, setAgeGroup] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * 1;
  const endIndex = page * 1 - 1;
  const paginatedExercises = data.slice(startIndex, endIndex + 1);
  const totalExercises = data.length;
  const totalPages = Math.ceil(totalExercises / 1);

  const getExerciseData = async (selectedTargetMuscle) => {
    if (ageGroup === "" || fitnessLevel === "" || targetMuscles === "") {
      setErrorMessage("Please select the inputs");
      return;
    }
    try {
      const { data } = await axios.request({
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${selectedTargetMuscle}`,
        params: { limit: "3" },
        headers: {
          "X-RapidAPI-Key":
            "a191927d1cmsh9c738ea7d1c4375p152bf2jsn2882ce34fd96",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });
      setErrorMessage("");
      setData(data);
    } catch (e) {
      setErrorMessage(
        "Some arror occurred. Please check your connection and retry!"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getExerciseData(targetMuscles);
  };

  // const queryClient = new QueryClient();
  return (
    <section className="exercise__container">
      <Navbar />
      <section className="exercise__form">
        <h1 className="form__title">
          Your Blueprint to Fitness: Unlocking Potential, One Muscle at a Time!
        </h1>
        {/* <QueryClientProvider client={queryClient}> */}
        <Form
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          fitnessLevel={fitnessLevel}
          setFitnessLevel={setFitnessLevel}
          targetMuscles={targetMuscles}
          setTargetMuscles={setTargetMuscles}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          handleSubmit={handleSubmit}
        />
        {/* </QueryClientProvider> */}
      </section>
      <section className="exercise__data">
        {paginatedExercises.map((exercise) => (
          <div key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </section>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </section>
  );
}

export default Exercises;
