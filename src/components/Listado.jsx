import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const history = useHistory();

  useEffect(() => {
    const tokenApi = localStorage.getItem("item");
    console.log(tokenApi);

    if (tokenApi === null) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <h2>Listado</h2>
    </>
  );
}
export default Listado;
