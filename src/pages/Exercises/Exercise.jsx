import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Exercise.css";
import Form from "../../components/Form/Form";
// import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import ExerciseCard from "./ExerciseCard";
import { Pagination } from "@mui/material";
import weightlifting from "../../assets/weightlifting.gif";

function Exercises() {
  // const [ageGroup, setAgeGroup] = useState("");
  // const [fitnessLevel, setFitnessLevel] = useState("");
  const [targetMuscles, setTargetMuscles] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isData, setIsData] = useState(false);

  const startIndex = (page - 1) * 1;
  const endIndex = page * 1 - 1;
  const paginatedExercises = data.slice(startIndex, endIndex + 1);
  const totalExercises = data.length;
  const totalPages = Math.ceil(totalExercises / 1);

  const getExerciseData = async (selectedTargetMuscle) => {
    if (targetMuscles === "") {
      setIsData(true);
      setErrorMessage(<p>&#10060; Please select the target muscle</p>);
      return;
    }
    try {
      const { data } = await axios.request({
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${selectedTargetMuscle}`,
        params: { limit: "3" },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });
      setErrorMessage("");
      setIsData(true);
      setData(data);
    } catch (e) {
      setIsData(true);
      setData([]);
      setErrorMessage(
        <p>
          &#10060; Some error occurred. Please check your connection and retry /
          try changing the input!
        </p>
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
          // ageGroup={ageGroup}
          // setAgeGroup={setAgeGroup}
          // fitnessLevel={fitnessLevel}
          // setFitnessLevel={setFitnessLevel}
          targetMuscles={targetMuscles}
          setTargetMuscles={setTargetMuscles}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          isData={isData}
          handleSubmit={handleSubmit}
        />
        {/* </QueryClientProvider> */}
      </section>
      {!isData ? (
        <img
          src={weightlifting}
          alt="weightlifting gif"
          className="wieghtlifting__gif"
        />
      ) : (
        <section className="exercise__data">
          {paginatedExercises.map((exercise) => (
            <div key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </div>
          ))}
        </section>
      )}
      {data.length !== 0 ? (
        <Pagination
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
          count={totalPages}
          page={page}
          onChange={(e, value) => setPage(value)}
          className="pagination"
          color="primary"
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Exercises;
