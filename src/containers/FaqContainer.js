import React from "react";
import { Accordion } from "../components/Accordion";
import { OptForm } from "../components/OptForm";
import faqData from "../fixtures/faqs.json";

export const FaqContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Preguntas frecuentes</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>
      <OptForm>
        <OptForm.Text>
          ¿Quieres ver algo ya? Escribe tu correo para crear una suscripción a
          Netflix o reactivarla.
        </OptForm.Text>
        <OptForm.Frame>
          <OptForm.Input placeholder="Correo electrónico" />
          <OptForm.Button>PROBAR 30 DÍAS GRATIS</OptForm.Button>
        </OptForm.Frame>
      </OptForm>
    </Accordion>
  );
};
