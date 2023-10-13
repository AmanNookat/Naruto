import React, { useEffect, useState } from "react";
import Level from "../Level/Level";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/usersSlice";
import BattleMenu from "../BattleMenu/BattleMenu";

const CompanyContent = () => {
  const { oneUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const oneLevel = [];

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  if (oneUser) {
    for (let i = 1; i <= oneUser.level; i++) {
      oneLevel.push(<Level key={i} i={i} />);
    }
  }

  return (
    <>
      <div
        onClick={() => {
          setModal(true);
        }}
        style={{ marginTop: "5%" }}
      >
        {oneLevel}
      </div>
      <div> {modal && <BattleMenu setModal={setModal} />}</div>
    </>
  );
};

export default CompanyContent;
