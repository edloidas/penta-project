import * as React from 'react';
import styled from 'styled-components';
import { merge } from 'lodash';
import { colors, texts } from '../base';

const CopyrightHolder = styled.span`
  font-size: ${props => props.theme.fontSize}rem;
  color: ${colors.fontInactive};
`;

const CopyrightNote = styled.span`
  text-transform: capitalize;
`;

type Theme = { fontSize: number };

const theme: Theme = { fontSize: 1 };

type CopyrightProps = { theme?: Theme };

const Copyright: SFC<CopyrightProps> = (props: CopyrightProps) => (
  <CopyrightHolder theme={merge({}, theme, props.theme)}>
    2017&#8211;current ©&nbsp;
    {texts.author}.&nbsp;
    <CopyrightNote>All Rights Reserved.</CopyrightNote>
  </CopyrightHolder>
);

Copyright.defaultProps = { theme };

export default Copyright;
