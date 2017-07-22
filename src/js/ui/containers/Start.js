// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import LogoScreen from '../components/screens/LogoScreen';
import * as StartActions from '../actions/startScreen';

class Start extends Component {
  static defaultProps: { isReady: true };

  constructor(props) {
    super(props);
    this.handleAnyPress = this.handleAnyPress.bind(this);
  }

  componentDidMount() {
    // May be replaced by some async works in future
    const minimunAwait = 2000; // ms
    setTimeout(() => this.props.actions.startReady(true), minimunAwait);
  }

  props: {
    isReady: boolean,
    isClosed: boolean,
    actions: {
      startReady: typeof StartActions.startReady,
      closeStart: typeof StartActions.closeStart
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
    const { isReady, isClosed } = this.props;
    const hidingDuration = 500;
    return (
      <Transition in={isClosed} timeout={hidingDuration}>
        {state =>
          <div
            tabIndex="0"
            role="button"
            onKeyPress={this.handleAnyPress}
            onClick={this.handleAnyPress}>
            {state === 'entered' ? <Redirect to="/menu" push /> : null}
            <LogoScreen
              isLoading={!isReady}
              isHiding={isClosed}
              duration={hidingDuration}
            />
          </div>}
      </Transition>
    );
  }
}

function mapStateToProps(state) {
  return {
    isReady: state.startScreen.isReady,
    isClosed: state.startScreen.isClosed
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators(StartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
