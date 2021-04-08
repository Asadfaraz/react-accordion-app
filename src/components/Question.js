import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import classes from "./question.module.css";

// BiMessageAltAdd, GoDiffRemoved

const Question = (props) => {
  // useSTate for controlling the paragraph
  const [viewAnswer, setViewAnswer] = useState(false);

  //   getting data from questions component
  const dataItem = props.dataItem;

  return (
    <article>
      <div className={classes.question}>
        <h3>{dataItem.title}</h3>

        {viewAnswer ? <p>{dataItem.info}</p> : ""}
      </div>

      <div className={classes.btn}>
        <button
          type="button"
          onClick={() => {
            setViewAnswer(!viewAnswer);
          }}
        >
          {viewAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
    </article>
  );
};

export default Question;
