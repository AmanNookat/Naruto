import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLevels } from "../../store/company/companyActions";

const BattleMenu = ({ setModal }) => {
  const { oneLevel } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getOneLeve);
  //   }, []);

  return (
    <>
      {oneLevel && (
        <>
          <p
            onClick={() => {
              setModal(false);
            }}
          >
            {oneLevel.enemy.name}
          </p>
        </>
      )}
    </>
  );
};

export default BattleMenu;
