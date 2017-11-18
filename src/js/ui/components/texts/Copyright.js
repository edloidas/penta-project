// @flow
import React from 'react';
import styled from 'styled-components';
import { colors, texts } from '../base';

const CopyrightHolder = styled.span`
  font-size: ${props => props.theme.fontSize};
  color: ${colors.fontInactive};
`;

const CopyrightNote = styled.span`
  text-transform: capitalize;
`;

type CopyrightProps = { fontSize?: string };

const Copyright = (props: CopyrightProps) => (
  <CopyrightHolder theme={{ fontSize: props.fontSize }}>
    2017–current ©&nbsp;
    {texts.author}.&nbsp;
    <CopyrightNote>All Rights Reserved.</CopyrightNote>
  </CopyrightHolder>
);

Copyright.defaultProps = { fontSize: '1rem' };

export default Copyright;
