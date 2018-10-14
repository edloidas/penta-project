import { Component } from 'react';

class Focusable<Props> extends Component<Props> {
  props: Props;

  focusable: HTMLDivElement | Null;

  constructor(props: Props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.focus();
  }

  focus() {
    if (this.focusable != null && document.activeElement !== this.focusable) {
      (this.focusable as HTMLDivElement).focus();
    }
  }
}

export default Focusable;
