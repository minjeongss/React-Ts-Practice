import { useParams } from "react-router-dom";
import useAPI from "../hooks/useAPI";

const UserPage = () => {
  const { id } = useParams() as { id: string };
  const user = useAPI({ id });

  return (
    <main>
      <h2>유저 페이지</h2>
      <p>{user}입니다</p>
      <p>{id}입니다</p>
    </main>
  );
};

export default UserPage;
