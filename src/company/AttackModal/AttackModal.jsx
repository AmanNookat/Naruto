import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { attackAnimation } from "../../assets/attackAnimation";
import "./AttackModal.css";


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
    <div className="attack--container">
      {whoAttack && <img src={attackAnimation(whoAttack)} alt="" />}

    </div>
  );
};

export default AttackModal;
