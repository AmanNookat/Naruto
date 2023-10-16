import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOneLevel } from "../../store/company/companyActions";
import style from "./Level.module.css";

const Level = ({ i }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={style.level}
        onClick={() => {
          dispatch(getOneLevel(i));
        }}
      >
        <p>{i}</p>
        <p>lvl</p>
      </div>
      <span
        style={{
          fontSize: "30px",
          marginRight: "10px",
          color: "white",
          opacity: "90%",
        }}
      >
        ------{">"}
      </span>
    </>
  );
};

export default Level;
