import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';
import LogoScreen from '../components/screens/LogoScreen';
import * as StartActions from '../actions/start';
import { State } from '../store';
import Focusable from './Focusable';

type Props = {
  isReady: boolean,
  isClosed: boolean,
  actions: {
    finalizeStart: typeof StartActions.finalizeStart,
    closeStart: typeof StartActions.closeStart
  }
};

class Start extends Focusable<Props> {
  static defaultProps: {
    isReady: true
  };

  constructor(props) {
    super(props);
    this.handleAnyPress = this.handleAnyPress.bind(this);
  }

  componentDidMount() {
    // May be replaced by some async works in future
    const minimunAwait = 2000; // ms
    setTimeout(() => {
      this.props.actions.finalizeStart(true);
      this.focus();
    }, minimunAwait);
  }

  props: Props;

  // Absence of `handleAnyPress` type leads to flow errors in constructor.
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
        {state => (
          <div
            tabIndex={0}
            role="button"
            ref={div => {
              this.focusable = div;
            }}
            onKeyPress={this.handleAnyPress}
            onClick={this.handleAnyPress}>
            {state === 'entered' ? <Redirect to="/menu" push /> : null}
            <LogoScreen
              isLoading={!isReady}
              isHiding={isClosed}
              duration={hidingDuration}
            />
          </div>
        )}
      </Transition>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    isReady: state.start.isReady,
    isClosed: state.start.isClosed
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    actions: bindActionCreators(StartActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
