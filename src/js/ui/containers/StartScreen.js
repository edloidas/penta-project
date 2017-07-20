// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoScreen from '../components/screens/LogoScreen';
import * as StartScreenActions from '../actions/startScreen';

class StartScreen extends Component {
  static defaultProps: { isReady: false };

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    setTimeout(this.props.actions.startReady(true), 2000);
  }

  props: {
    isReady: boolean,
    actions: {
      startReady: typeof StartScreenActions.startReady,
      closeStart: typeof StartScreenActions.closeStart
    }
  };

  // TODO: absence of `handleKeyPress` type leads to flow errors. Why?
  handleKeyPress: Function;

  handleKeyPress(e) {
    e.preventDefault();
    if (this.props.isReady) {
      this.props.actions.closeStart();
    }
  }

  render() {
    const { isReady } = this.props;
    return (
      <div tabIndex="0" role="button" onKeyPress={this.handleKeyPress}>
        <LogoScreen isLoading={!isReady} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { isReady: state.isReady };
}

// TODO: absence of `dispatch` type leads to flow errors. Why?
function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(StartScreenActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
