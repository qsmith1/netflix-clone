/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from './styles/jumbotron';

export default function Jumbotron({ children, direction, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronImage({ src, alt }) {
  return <Image src={src} alt={alt} />;
};

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
};

Jumbotron.Container.propTypes = { children: PropTypes.node.isRequired };
Jumbotron.Title.propTypes = { children: PropTypes.string.isRequired };
Jumbotron.SubTitle.propTypes = { children: PropTypes.string.isRequired };
Jumbotron.Pane.propTypes = { children: PropTypes.node.isRequired };
Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Jumbotron.defaultProps = { direction: 'row' };
Jumbotron.Image.defaultProps = { alt: '' };
