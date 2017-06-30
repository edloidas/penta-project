/* @flow */

import React from 'react';
import styled from 'styled-components';

const Name = styled.div`font-size: 2rem;`;

const MainMenuItem = (props: { name: string }) =>
  <Name>
    {props.name}
  </Name>;

export default MainMenuItem;
