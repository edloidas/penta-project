import { Component } from 'react';

class Focusable<Props> extends Component<Props> {
  props: Props;

  focusable: HTMLElement | Null;

  constructor(props: Props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.focusable = document.body;
  }

  componentDidMount() {
    this.focus();
  }

  focus() {
    if (this.focusable != null && document.activeElement !== this.focusable) {
      this.focusable.focus();
    }
  }
}

export default Focusable;
