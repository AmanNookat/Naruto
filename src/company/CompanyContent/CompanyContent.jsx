import React, { useEffect } from "react";
import Level from "../Level/Level";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/usersSlice";

const CompanyContent = () => {
  const { oneUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const oneLevel = [];

  useEffect(() => {
    dispatch(getOneUser());
  }, []);

  if (oneUser) {
    for (let i = 1; i <= oneUser.level; i++) {
      oneLevel.push(<Level key={i} i={i} />);
    }
  }

  return <div style={{ marginTop: "5%" }}>{oneLevel}</div>;
};

export default CompanyContent;
