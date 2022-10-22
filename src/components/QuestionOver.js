import React from "react";

function QuestionOver({ quesTitle, optionsArray, selected, correctAns }) {
  let options = optionsArray.map((option, optionId) => {
    return (
      <div
        className={`opt ${
          optionId === correctAns && selected === -1 ? "opt--correct--alt" : ""
        }
          ${optionId === correctAns && selected !== -1 ? "opt--correct" : ""}
          ${
            optionId === selected && selected !== correctAns
              ? "opt--incorrect"
              : ""
          }`}
        key={optionId}
      >
        {option}
      </div>
    );
  });

  return (
    <div>
      <div>{quesTitle}</div>
      <div>{options}</div>
    </div>
  );
}

export default QuestionOver;
