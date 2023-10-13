import React, { useState } from "react";
import BattleMenu from "../BattleMenu/BattleMenu";
import { useDispatch } from "react-redux";
import { getOneLevel } from "../../store/company/companyActions";

const Level = ({ i }) => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{ border: "1px solid black", padding: "20px", width: "100px" }}
        onClick={() => {
          setModal(true);
          dispatch(getOneLevel(i));
        }}
      >
        Level {i}
      </div>
      <div> {modal && <BattleMenu setModal={setModal} />}</div>
    </>
  );
};

export default Level;
