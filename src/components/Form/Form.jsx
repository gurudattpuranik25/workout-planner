import React, { useState } from "react";
// import { exercises } from "../../data/data";
import "./Form.css";
// import { getExerciseData } from "../../api/api";
// import { useQuery } from "react-query";

function Form({
  ageGroup,
  setAgeGroup,
  fitnessLevel,
  setFitnessLevel,
  targetMuscles,
  setTargetMuscles,
  errorMessage,
  handleSubmit,
}) {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["exercise-data"],
  //   queryFn: getExerciseData,
  // });

  return (
    <section className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <select
          name="age__group"
          id="age__group"
          onChange={(e) => setAgeGroup(e.target.value)}
          value={ageGroup}
        >
          <option value="" disabled>
            Age Group
          </option>
          <option value="Below 15">Below 15</option>
          <option value="15 - 24">15 - 24</option>
          <option value="25 - 34">25 - 34</option>
          <option value="35 - 44">35 - 44</option>
          <option value="Above 45">Above 45</option>
        </select>
        <select
          name="fitness__level"
          id="fitness__level"
          onChange={(e) => setFitnessLevel(e.target.value)}
          value={fitnessLevel}
        >
          <option value="" disabled>
            Fitness Level
          </option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <select
          name="target__muscles"
          id="target__muscles"
          onChange={(e) => setTargetMuscles(e.target.value)}
          value={targetMuscles}
        >
          <option value="" disabled>
            Target Muscles
          </option>
          <option value="abs">Abs</option>
          <option value="biceps">Biceps</option>
          <option value="triceps">Triceps</option>
          <option value="quads">Quads</option>
          <option value="delts">Delts</option>
          <option value="forearms">Forearms</option>
          <option value="lats">Lats</option>
          <option value="levator scapulae">Levator Scapulae</option>
          <option value="pectorals">Pectorals</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="glutes">Glutes</option>
          <option value="serratus anterior">Serratus Anterior</option>
          <option value="Obliques">Obliques</option>
          <option value="spine">Spine</option>
          <option value="traps">Traps</option>
          <option value="upper back">Upper Back</option>
          <option value="cardiovascular system">Cardiovascular System</option>
        </select>
        <button type="submit">Get my exercises</button>
      </form>
      <p className="error__message">{errorMessage}</p>
    </section>
  );
}

export default Form;
