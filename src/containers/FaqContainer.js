import React from "react";
import { Accordion } from "../components/Accordion";
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
    </Accordion>
  );
};
