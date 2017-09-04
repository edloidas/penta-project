// @flow
import React from 'react';
import styled from 'styled-components';
import { colors, texts } from '../base';

const VersionHolder = styled.span`
  font-size: ${props => props.theme.fontSize};
  color: ${colors.fontInactive};
`;

const VersionNote = styled.span`
  font-size: 0.9em;
  color: ${colors.hp};
  text-transform: uppercase;
`;

type VersionProps = { fontSize?: string };

const Version = (props: VersionProps) => (
  <VersionHolder theme={{ fontSize: props.fontSize }}>
    <VersionNote>alpha version</VersionNote>&nbsp;
    {texts.version}
  </VersionHolder>
);

Version.defaultProps = { fontSize: '1rem' };

export default Version;
