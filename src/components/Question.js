import React from "react";
import { useState } from "react";
import { BiMessageAltAdd } from "react-icons/bi";
import { GoDiffRemoved } from "react-icons/go";

// BiMessageAltAdd, GoDiffRemoved

const Question = (props) => {
  // useSTate for controlling the paragraph
  const [viewAnswer, setViewAnswer] = useState(false);

  //   getting data from questions component
  const dataItem = props.dataItem;

  return (
    <div>
      <h3>{dataItem.title}</h3>
      {viewAnswer ? <p>{dataItem.info}</p> : ""}
      <button
        type="button"
        onClick={() => {
          setViewAnswer(!viewAnswer);
        }}
      >
        {viewAnswer ? <GoDiffRemoved /> : <BiMessageAltAdd />}
      </button>
    </div>
  );
};

export default Question;
