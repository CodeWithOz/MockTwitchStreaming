import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', async () => {
      await window.gapi.client.init({
        clientId:
          '144298741452-j6i1pjdfg0h7qd6nak2gdkl7k8o597jl.apps.googleusercontent.com',
        scope: 'email'
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.setState({ isSignedIn: this.auth.isSignedIn.get() });
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Unsure if signed in</div>;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return this.renderAuthButton();
  }
}

export default GoogleAuth;
