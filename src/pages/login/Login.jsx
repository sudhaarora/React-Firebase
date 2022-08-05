import { useContext, useState, useEffect } from "react";
import "./login.scss";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../LanguageSelector";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const { t } = useTranslation();
  const navitage = useNavigate();

  const { dispatch } = useContext(AuthContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navitage("/");
      })
      .catch((error) => {
        const errCode = error.code;
        const errorMessage = error.message;
        // setError(true);
      });
  };
  const handleForgot =()=>{
    navitage("/forgot-password")
  }

  return (
    <>
    <LanguageSelector />
      <h1>{t("welcome_login")}</h1>
      <div className="login">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">Login</button> */}
          <button type="submit">{t("login")}</button>
          {error && <span>Wrong email or password!</span>}
        </form>
        <a href="#" onClick={handleForgot}>Forgot Password</a>
      </div>
    </>
  );
};

export default Login;
