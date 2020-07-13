import React from 'react';
import { Accordion } from '../components';
import faqsDatat from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsDatat.map((question) => (
          <Accordion.Item key={question.id}>
            <Accordion.Header>{question.header}</Accordion.Header>
            <Accordion.Body>{question.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
    </Accordion>
  );
}
