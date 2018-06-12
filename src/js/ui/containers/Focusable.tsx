import { Component } from 'react';

class Focusable<Props> extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.focus();
  }

  props: Props;

  focusable: HTMLDivElement | Null;

  focus() {
    if (this.focusable != null && document.activeElement !== this.focusable) {
      (this.focusable as HTMLDivElement).focus();
    }
  }
}

export default Focusable;
