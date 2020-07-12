import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Break,
  Text,
} from './styles/footer';

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}

Footer.Row = function FooterRow({ children }) {
  return <Row>{children}</Row>;
};
Footer.Column = function FooterColumn({ children }) {
  return <Column>{children}</Column>;
};
Footer.Link = function FooterLink({ url, children }) {
  return <Link href={url}>{children}</Link>;
};
Footer.Title = function FooterTitle({ children }) {
  return <Title>{children}</Title>;
};
Footer.Text = function FooterText({ children }) {
  return <Text>{children}</Text>;
};
Footer.Break = function FooterBreak() {
  return <Break />;
};

Footer.propTypes = {
  children: PropTypes.element.isRequired,
};
Footer.Row.propTypes = {
  children: PropTypes.element.isRequired,
};
Footer.Column.propTypes = {
  children: PropTypes.element.isRequired,
};
Footer.Link.propTypes = {
  children: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired,
};
Footer.Title.propTypes = {
  children: PropTypes.string.isRequired,
};
Footer.Text.propTypes = {
  children: PropTypes.string.isRequired,
};
