// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu/MainMenu';
import { type MainMenuItemProps } from '../components/MainMenu/MainMenuItem';
import * as GameActions from '../actions/game';
import Focusable from './Focusable';

type Props = {
  actions: {
    resumeGame: typeof GameActions.resumeGame
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Focusable<Props> {
  constructor(props) {
    super(props);
    this.handleResume = this.handleResume.bind(this);
  }

  props: Props;

  handleResume: (e?: MouseEvent) => void;

  handleResume(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.props.actions.resumeGame(true);
  }

  render() {
    const menuItems: Array<MainMenuItemProps> = [
      { name: 'Resume', clickHandler: this.handleResume },
      { name: 'New Game', to: '/new' },
      { name: 'Save Game', to: '/save' },
      { name: 'Load Game', to: '/load' },
      { name: 'Hero', to: '/hero' },
      { name: 'Settings', to: '/settings' },
      { name: 'Exit', to: '/exit' }
    ];
    return (
      <div
        tabIndex="0"
        role="button"
        ref={div => {
          this.focusable = div;
        }}>
        <MainMenu menuItems={menuItems} />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
