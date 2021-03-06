import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/Firebase";
import Form from "../components/Form";
import FooterContainer from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import * as ROUTES from "../routes/Routes";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [moreInfo, setMoreInfo] = useState(false);

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password);
      console.log(res);
      history.push(ROUTES.BROWSE);
    } catch (err) {
      setEmailAddress("");
      setPassword("");
      setError(err.message);
    }
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Iniciar sesión</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Correo electrónico"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            placeholder="Contraseña"
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Iniciar sesión
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          ¿Todavía sin Netflix?{" "}
          <Form.Link to="/signup">Suscríbete ya.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          Esta página utiliza Google reCAPTCHA para garantizar que no eres un
          robot.{" "}
          {!moreInfo && (
            <Form.TextSmall
              color="#0071eb"
              onClick={() => setMoreInfo(true)}
              style={{ cursor: "pointer" }}
            >
              Más información
            </Form.TextSmall>
          )}
        </Form.TextSmall>
        {moreInfo && (
          <Form.TextSmall>
            La información recopilada por Google reCAPTCHA está sujeta a la
            Política de Privacidad y las Condiciones de servicio de Google, y se
            utiliza para proporcionar, mantener y mejorar el servicio de
            reCAPTCHA, así como para fines generales de seguridad (Google no la
            utiliza para publicidad personalizada).
          </Form.TextSmall>
        )}
      </Form>
      <FooterContainer />
    </HeaderContainer>
  );
}
