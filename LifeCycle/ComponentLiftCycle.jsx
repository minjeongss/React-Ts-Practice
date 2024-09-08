import React from "react";
import { useParams } from "react-router-dom";
import useAPI from "./useAPI";
const ComponentLiftCycle = () => {
  const { id } = useParams();
  const user = useAPI({ id });
  return (
    <main>
      <p>{user}입니다</p>
    </main>
  );
};

export default ComponentLiftCycle;
