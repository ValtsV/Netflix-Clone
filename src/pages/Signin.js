import React, { useState, useContext } from "react";
import Form from "../components/Form";
import { FooterContainer } from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [moreInfo, setMoreInfo] = useState(false);

  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (e) => {
    e.preventDefault();
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
            onChange={({ target }) => setEmailAddress(target.value)}
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
      <FooterContainer></FooterContainer>
    </HeaderContainer>
  );
}
