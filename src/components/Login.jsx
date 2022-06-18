import axios from "axios";
import swal from "@sweetalert/with-react";
function Login() {
  const sbmtHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regexEmail.test(email));
    if (email === "" || password === "") {
      swal({
        title: "Oops...",
        text: "Rellena todos los campos",
        icon: "error",
        button: "Ok",
      });

      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swal({
        title: "Oops...",
        text: "Email no valido",
        icon: "error",
        button: "Ok",
      });
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal({
        title: "Oops...",
        text: "Email o contraseña incorrectos",
        icon: "error",
        button: "Ok",
      });
      return;
    } else {
      swal({
        title: "Bienvenido",
        text: "Has iniciado sesión correctamente",
        icon: "success",
        button: "Ok",
      });
    }
    console.log("Información lista para enviar");
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <form onSubmit={sbmtHandler}>
        <label>
          <span>Email:</span>
          <br />
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}
export default Login;
