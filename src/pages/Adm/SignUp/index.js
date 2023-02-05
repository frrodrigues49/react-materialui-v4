import React, { Component } from "react";
import { Link } from "react-router-dom";


class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <div>Cadastrar</div>
    );
  }
}

export default SignUp;