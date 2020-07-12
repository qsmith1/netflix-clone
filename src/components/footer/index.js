import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Column, Link, Title, Break,
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
Footer.Link = function FooterLink({ url, text }) {
  return <Link href={url}>{text}</Link>;
};
Footer.Title = function FooterTitle({ text }) {
  return <Title>{text}</Title>;
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
  text: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired,
};
Footer.Title.propTypes = {
  text: PropTypes.string.isRequired,
};
