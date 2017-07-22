// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LogoScreen from '../components/screens/LogoScreen';
import * as StartScreenActions from '../actions/startScreen';

class StartScreen extends Component {
  static defaultProps: { isReady: true };

  constructor(props) {
    super(props);
    this.handleAnyPress = this.handleAnyPress.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.actions.startReady(true), 2000);
  }

  props: {
    isReady: boolean,
    isClosed: boolean,
    actions: {
      startReady: typeof StartScreenActions.startReady,
      closeStart: typeof StartScreenActions.closeStart
    }
  };

  // Absence of `handleAnyPress` type leads to flow errors in constructor.
  handleAnyPress: () => void;

  handleAnyPress(e) {
    e.preventDefault();
    if (this.props.isReady) {
      this.props.actions.closeStart(true);
    }
  }

  render() {
    const { isReady } = this.props;
    return (
      <div
        tabIndex="0"
        role="button"
        onKeyPress={this.handleAnyPress}
        onClick={this.handleAnyPress}>
        {this.props.isClosed ? <Redirect to="/menu" /> : null}
        <LogoScreen isLoading={!isReady} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isReady: state.startScreen.isReady,
    isClosed: state.startScreen.isClosed
  };
}

// TODO: absence of `dispatch` type leads to flow errors. Why?
function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(StartScreenActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
