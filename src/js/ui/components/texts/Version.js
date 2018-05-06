// @flow
import React from 'react';
import styled from 'styled-components';
import merge from 'lodash.merge';
import { colors, texts } from '../base';

const VersionHolder = styled.span`
  font-size: ${props => props.theme.fontSize}rem;
  color: ${colors.fontInactive};
`;

const VersionNote = styled.span`
  font-size: 0.9em;
  color: ${colors.hp};
  text-transform: uppercase;
`;

type Theme = { fontSize: number };

const theme: Theme = { fontSize: 1 };

type VersionProps = { theme?: Theme };

const Version = (props: VersionProps) => (
  <VersionHolder theme={merge(theme, props.theme)}>
    <VersionNote>alpha version</VersionNote>&nbsp;
    {texts.version}
  </VersionHolder>
);

Version.defaultProps = { theme };

export default Version;
