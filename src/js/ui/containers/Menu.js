// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu/MainMenu';
import * as MenuActions from '../actions/mainMenu';

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Component {
  props: {
    actions: {
      resumeGame: typeof MenuActions.resumeGame,
      startNewGame: typeof MenuActions.startNewGame,
      showHero: typeof MenuActions.showHero,
      showSettings: typeof MenuActions.showSettings,
      exitGame: typeof MenuActions.exitGame
    }
  };

  render() {
    return <MainMenu />;
  }
}

function mapStateToProps(/* state */) {
  return {};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(MenuActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
