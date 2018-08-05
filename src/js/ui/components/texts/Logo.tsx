import * as React from 'react';
import styled from 'styled-components';
import { merge } from 'lodash';
import { colors, texts } from '../base';

const LogoHolder = styled.div`
  position: relative;
  text-align: center;
  font-size: ${props => props.theme.fontSize}rem;
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

type Theme = { fontSize: number };

const theme: Theme = { fontSize: 1 };

type LogoProps = {
  renderAuthor?: boolean,
  theme?: Theme
};

const Logo: SFC<LogoProps> = (props: LogoProps) => (
  <LogoHolder className="font__mono" theme={merge({}, theme, props.theme)}>
    {props.renderAuthor ? <Author>{texts.author}</Author> : null}
    <Title>{texts.project}</Title>
    <Description>{texts.genre}</Description>
  </LogoHolder>
);

Logo.defaultProps = {
  renderAuthor: true,
  theme
};

export default Logo;
