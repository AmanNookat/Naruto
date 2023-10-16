import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { attackAnimation } from "../../assets/attackAnimation";

const AttackModal = ({ setAttack, attack }) => {
  const { whoAttack } = useSelector((state) => state.company);
  console.log(whoAttack);
  useEffect(() => {
    if (attack) {
      const timer = setTimeout(() => {
        setAttack(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [attack]);

  return (
    <div style={{ width: "100px", height: "100px" }}>
      {whoAttack && (
        <img src={attackAnimation(whoAttack)} alt="" width="100" height="100" />
      )}
    </div>
  );
};

export default AttackModal;
