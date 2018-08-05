import * as React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* stylelint-disable declaration-colon-newline-after */
const Name = styled.button`
  display: block;
  width: ${props => (props.theme.width ? `${props.theme.width}rem` : 'auto')};
  margin: ${props =>
    props.theme.direction.startsWith('column') ? '0 0 0.5rem' : '0 0.5rem 0 0'};
  padding: 0.25rem 1rem;
  border: none;
  background-color: #1a1a1a;
  text-align: ${props => props.theme.textAlign};
  font-family: 'Play', monospace;
  font-size: 2rem;
  text-transform: uppercase;
  color: #aaa;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  user-select: none;

  &:last-child {
    margin: 0;
  }

  &::after,
  &::before {
    padding: 0.25rem 1rem;
    background-color: #1a1a1a;
  }

  a {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-decoration: none;
    opacity: 0;
  }
`;
/* stylelint-enable declaration-colon-newline-after */

type Theme = {
  width?: number,
  textAlign?: CSSTextAlign,
  direction?: CSSFlexDirection
};

const theme: Theme = {
  width: 0,
  textAlign: 'center',
  direction: 'row'
};

export type ButtonProps = {
  name: string,
  to?: string | Null,
  clickHandler?: (e?: MouseKeyboardEvent) => void,
  theme?: Theme
};

const Button: SFC<ButtonProps> = (props: ButtonProps) => (
  <Name
    className="effect__glitch"
    data-text={props.name}
    tabIndex={props.to ? -1 : 0}
    onClick={props.clickHandler}
    theme={merge({}, theme, props.theme)}>
    {props.name}
    {props.to ? <Link to={props.to} tabIndex={0} /> : null}
  </Name>
);

Button.defaultProps = {
  // to: null,
  // clickHandler: null,
  theme
};

export default Button;
