import { useContext } from "react";
import { AuthContext } from "../../contexts/Authenticate";

export const Home = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <>
      <p>{String(authenticated)}</p>;<h1>home</h1>;
    </>
  );
};
