import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu/MainMenu';
import { MainMenuItemProps } from '../components/MainMenu/MainMenuItem';
import * as GameActions from '../actions/game';
import Focusable from './Focusable';

type Props = {
  actions: {
    resumeGame: typeof GameActions.resumeGame,
    startNewGame: typeof GameActions.startNewGame,
    saveGame: typeof GameActions.saveGame,
    loadGame: typeof GameActions.loadGame
  }
};

// eslint-disable-next-line react/prefer-stateless-function
class Menu extends Focusable<Props> {
  constructor(props) {
    super(props);
    this.handleResume = this.handleResume.bind(this);

    this.menuItems = [
      { name: 'Resume', clickHandler: this.handleResume },
      { name: 'New Game', to: '/new' },
      { name: 'Save Game', to: '/save' },
      { name: 'Load Game', to: '/load' },
      { name: 'Hero', to: '/hero' },
      { name: 'Settings', to: '/settings' },
      { name: 'Exit', to: '/exit' }
    ];
  }

  props: Props;

  menuItems: Array<MainMenuItemProps>;

  handleResume(e: MouseKeyboardEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.props.actions.resumeGame(true);
  }

  render() {
    return (
      <div
        tabIndex={0}
        role="button"
        ref={div => {
          this.focusable = div;
        }}>
        <MainMenu menuItems={this.menuItems} />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch<GameActions.ActionsTypes>) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
