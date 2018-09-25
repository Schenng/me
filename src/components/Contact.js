import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="pl-5 pt-5">
        <h4> Send me an <a href="mailto:scheng365@gmail.com">Email</a></h4>
        <h4> Connect with me on  <a href="https://www.linkedin.com/in/schenng/">Linkedin</a></h4>
        <h4> Follow me on <a href="https://www.github.com/schenng">Github</a></h4>
      </div>
    );
  }
}