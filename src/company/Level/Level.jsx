import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOneLevel } from "../../store/company/companyActions";

const Level = ({ i }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          // width: "100px",
          // color: "white",
        }}
        onClick={() => {
          dispatch(getOneLevel(i));
        }}
      >
        Level {i}
      </div>
    </>
  );
};

export default Level;
