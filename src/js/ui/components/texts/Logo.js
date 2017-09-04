// @flow
import React from 'react';
import styled from 'styled-components';
import { colors, texts } from '../base';

const LogoHolder = styled.div`
  position: relative;
  text-align: center;
  font-size: ${props => props.theme.fontSize};
`;

const Author = styled.div`
  position: absolute;
  width: 100%;
  top: -2em;
  font-size: 1.25em;
  font-weight: lighter;
  text-transform: uppercase;
  color: ${colors.fontInactive};
`;

const Title = styled.div`
  position: relative;
  padding: 0 0 0 0.25em;
  font-size: 4em;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: ${colors.font};
`;

const Description = styled.div`
  margin: -0.2em 0 0 0;
  font-size: 2em;
  text-transform: lowercase;
  color: ${colors.accent};
`;

type LogoProps = {
  renderAuthor?: boolean,
  fontSize?: string
};

const Logo = (props: LogoProps) => (
  <LogoHolder className="font__mono" theme={{ fontSize: props.fontSize }}>
    {props.renderAuthor ? <Author>{texts.author}</Author> : null}
    <Title>{texts.project}</Title>
    <Description>{texts.genre}</Description>
  </LogoHolder>
);

Logo.defaultProps = {
  renderAuthor: true,
  fontSize: '1rem'
};

export default Logo;
