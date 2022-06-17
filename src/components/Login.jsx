import axios from "axios";
function Login() {
  const sbmtHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regexEmail.test(email));
    if (email === "" || password === "") {
      alert("Los campos no pueden estar vacíos");
      return;
    }
    if (email != "" && !regexEmail.test(email)) {
      alert(
        "El email no parece ser una dirección de correo electrónico válida"
      );
      return;
    }
    if (email != "challenge@alkemy.org" || password != "react") {
      alert("El email o la contraseña no son correctos");
      return;
    }
    console.log("Información lista para enviar");
    axios
      .post("http://challenge.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
      });

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
  };
}
  export default Login;

