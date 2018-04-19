// @flow
import React from 'react';
import styled from 'styled-components';
import { colors } from '../base';

const TitleHolder = styled.h1`
  font-size: ${props => props.theme.fontSize};
  color: ${colors.fontDesc};
`;

type TitleProps = {
  fontSize?: string,
  text: string
};

const Title = (props: TitleProps) => (
  <TitleHolder theme={{ fontSize: props.fontSize }}>{props.text}</TitleHolder>
);

Title.defaultProps = { fontSize: '3rem' };

export default Title;
