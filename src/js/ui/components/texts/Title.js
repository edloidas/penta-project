// @flow
import React from 'react';
import styled from 'styled-components';
import merge from 'lodash.merge';
import { colors } from '../base';

const TitleHolder = styled.h1`
  margin: 0 0 2rem ${props => props.theme.marginLeft}rem;
  font-size: ${props => props.theme.fontSize}rem;
  color: ${colors.fontDesc};
  text-transform: capitalize;
`;

type Theme = {
  fontSize?: number,
  marginLeft?: number
};

const theme: Theme = {
  fontSize: 3,
  marginLeft: 0
};

type TitleProps = {
  text: string,
  theme?: Theme
};

const Title = (props: TitleProps) => (
  <TitleHolder className="font__accent" theme={merge({}, theme, props.theme)}>
    {props.text}
  </TitleHolder>
);

Title.defaultProps = { theme };

export default Title;
