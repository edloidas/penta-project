// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenu, {
  type MenuItemProperties
} from '../components/MainMenu/MainMenu';
import * as MenuActions from '../actions/mainMenu';

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleExit = this.handleExit.bind(this);
  }

  props: {
    actions: {
      // resumeGame: typeof MenuActions.resumeGame,
      // startNewGame: typeof MenuActions.startNewGame,
      // showHero: typeof MenuActions.showHero,
      // showSettings: typeof MenuActions.showSettings,
      exitGame: typeof MenuActions.exitGame
    }
  };

  handleExit: () => void;

  handleExit() {
    this.props.actions.exitGame();
  }

  render() {
    const menuItems: Array<MenuItemProperties> = [
      { name: 'Resume', to: '/resume' },
      { name: 'New Game', to: '/new' },
      { name: 'Load Game', to: '/load' },
      { name: 'Settings', to: '/settings' },
      { name: 'Exit', to: '/exit', clickHandler: this.handleExit }
    ];
    return <MainMenu menuItems={menuItems} />;
  }
}

function mapStateToProps(state) {
  return { isExited: state.mainMenu.isExited };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(MenuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
