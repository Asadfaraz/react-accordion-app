import React from "react";
import Question from "./Question";
import classes from "./questions.module.css";

const Questions = ({ data, answerBtn }) => {
  //   console.log(data);

  return (
    <div className={classes.main}>
      <section className={classes.heading}>
        <h3>Questions and Answers about Login</h3>
      </section>

      <section className={classes.data}>
        {data.map((dataItem) => {
          return (
            <div key={dataItem.id}>
              <Question dataItem={dataItem} answerBtn={answerBtn} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Questions;
