import React from "react";
import Question from "./Question";
// import classes from "./questions.module.css";

const Questions = ({ data, answerBtn }) => {
  //   console.log(data);

  return (
    <div className={classes.main}>
      <h3>Questions and Answers about Login</h3>

      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <Question dataItem={dataItem} answerBtn={answerBtn} />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
