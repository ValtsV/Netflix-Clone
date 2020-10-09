import React from "react";
import { OptForm } from "../components/OptForm";
import { FaqContainer } from "../containers/FaqContainer";
import { FooterContainer } from "../containers/FooterContainer";
import HeaderContainer from "../containers/HeaderContainer";
import { JumbotronContainer } from "../containers/JumbotronContainer";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Todas las películas y series que desees, y mucho más.
          </Feature.Title>
          <Feature.Subtitle>
            Disfruta donde quieras. Cancela cuando quieras.
          </Feature.Subtitle>

          <OptForm>
            <OptForm.Text>
              ¿Quieres ver algo ya? Escribe tu correo para crear una suscripción
              a Netflix o reactivarla.
            </OptForm.Text>
            <OptForm.Frame
              placeholder="Correo electrónico"
              btnText="PROBAR 30 DÍAS GRATIS"
            ></OptForm.Frame>
          </OptForm>
          <Feature.Text>
            Solo nuevos suscriptores podrán optar a esta oferta.
          </Feature.Text>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
