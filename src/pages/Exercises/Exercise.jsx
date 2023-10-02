import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Exercise.css";
import Form from "../../components/Form/Form";
// import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

function Exercises() {
  const [ageGroup, setAgeGroup] = useState("");
  const [fitnessLevel, setFitnessLevel] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      console.log(data);
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
    </section>
  );
}

export default Exercises;
