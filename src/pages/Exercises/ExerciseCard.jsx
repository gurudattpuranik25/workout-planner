import React from "react";
import "./ExerciseCard.css";

function IndividualExercise({ exercise }) {
  return (
    <section className="erercise__card">
      <img className="exercise__image" src={exercise.gifUrl} />
      <section className="exercise__info">
        <p>Name - {exercise.name}</p>
        <p>Body Part - {exercise.bodyPart}</p>
        <p>
          Secondary Muscles -{" "}
          {exercise.secondaryMuscles.map((muscle, index) => (
            <span key={index}>{muscle}</span>
          ))}
        </p>
        <p>
          Instructions -
          {exercise.instructions.map((instruction, index) => (
            <p key={index}>{instruction}</p>
          ))}
        </p>
      </section>
    </section>
  );
}

export default IndividualExercise;
