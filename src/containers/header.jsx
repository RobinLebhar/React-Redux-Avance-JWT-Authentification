import React, { Component } from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import * as actions from "../actions"

class Header extends Component {
  signOut = () => {
    this.props.signinOutUser();
  }

  renderAuthentificationLink = () => {
    if (this.props.isLoggedIn)
      return (
        <li className="nav-item">
          <Link className="nav-link" to={"/signout"} >Déconnexion</Link>
        </li>
      );
    else {
      return (
        [
          <li key={1} className="nav-item">
            <Link className="nav-link" to={"/signin"}>Connexion</Link>
          </li>
          ,
          <li key={2} className="nav-item">
            <Link className="nav-link" to={"/signup"}>Inscription</Link>
          </li>

        ]

      );
    }

  }
  render() {
    return (
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link className="nav-link" to={"/"} >Accueil</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/ressources"} >Ressources</Link>
        </li>
        {this.renderAuthentificationLink()}
      </ul>

    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

export default connect(mapStateToProps, actions)(Header);