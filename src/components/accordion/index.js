import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Inner,
  Item,
  Title,
  Header,
  Body,
  Frame,
} from './styles/accordion';

export default function Accordion({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children }) {
  return <Frame>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children }) {
  return <Item>{children}</Item>;
};

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
Accordion.Item.propTypes = {
  children: PropTypes.node.isRequired,
};
Accordion.Frame.propTypes = {
  children: PropTypes.node.isRequired,
};
Accordion.Title.propTypes = {
  children: PropTypes.string.isRequired,
};
Accordion.Body.propTypes = {
  children: PropTypes.string.isRequired,
};
Accordion.Header.propTypes = {
  children: PropTypes.string.isRequired,
};
