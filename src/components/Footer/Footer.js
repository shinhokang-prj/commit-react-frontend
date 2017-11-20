import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><a href="/">Commit</a> &copy; 2017 <a href="https://www.honestly.com" target="blank">Honestly MT GmbH</a></span>
        <span className="ml-auto">Powered by <a href="http://coreui.io">CoreUI</a></span>
      </footer>
    )
  }
}

export default Footer;
