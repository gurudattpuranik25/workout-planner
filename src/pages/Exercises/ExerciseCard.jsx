import React from "react";
import "./ExerciseCard.css";

function IndividualExercise({ exercise }) {
  const { gifUrl, name, bodyPart, secondaryMuscles, instructions } = exercise;
  return (
    <section className="exercise__card">
      <img className="exercise__image" src={gifUrl} />
      <section className="exercise__info">
        <section className="labels">
          <p>Name</p>
          <p>Body Part</p>
          <p>Secondary Muscles</p>
          <p>Instructions</p>
        </section>
        <section className="exercise__details">
          <p> : {name[0].toUpperCase() + name.slice(1)}</p>
          <p>: {bodyPart[0].toUpperCase() + bodyPart.slice(1)}</p>
          <p>
            {" "}
            :{" "}
            {secondaryMuscles.map((muscle, index) => (
              <span key={index}>
                {" "}
                {muscle[0].toUpperCase() +
                  muscle.slice(1) +
                  `${index !== secondaryMuscles.length - 1 ? ", " : " "}`}
              </span>
            ))}
          </p>
          <p>
            {" "}
            {instructions.map((instruction, index) => (
              <p key={index}> &#8226; {instruction}</p>
            ))}
          </p>
        </section>
      </section>
    </section>
  );
}

export default IndividualExercise;
