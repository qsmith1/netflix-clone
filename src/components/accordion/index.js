import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Inner, Title, Header, Body,
} from './styles/accordion';

export default function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children }) {
  return <Title>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ children }) {
  return <Header>{children}</Header>;
};

Accordion.Body = function AccordionBody({ children }) {
  return <Body>{children}</Body>;
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};
Accordion.Title.propTypes = {
  children: PropTypes.string.isRequired,
};
Accordion.Body.propTypes = {
  children: PropTypes.node.isRequired,
};
Accordion.Header.propTypes = {
  children: PropTypes.node.isRequired,
};
