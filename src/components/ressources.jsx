import React, { Component } from "react";
import { addRessource, getSpecialRessource } from "../actions";
import { connect } from "react-redux";
import {
  getIntegerList,
  getContainsOneList,
  getPrimeNumberList,
  getSpecialNumbersList
} from "../selectors";
class Ressources extends Component {
  componentWillMount() {
    this.props.getSpecialRessource();
  }
  renderRessource = ressources => {
    return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <button
            type="button"
            onClick={() => this.props.addRessource()}
            className="btn btn-raised btn-primary"
          >
            Ajouter un nombre
          </button>
        </div>
        <div className="col">
          Entiers
          <ul>{this.renderRessource(this.props.integerRessources)}</ul>
        </div>
        <div className="col">
          Contiennent "1"
          <ul>{this.renderRessource(this.props.containsOneRessources)}</ul>
        </div>
        <div className="col">
          Entiers premiers
          <ul>{this.renderRessource(this.props.primeRessouces)}</ul>
        </div>
        <div className="col">
          Entiers premiers contenants "1"
          <ul>{this.renderRessource(this.props.specialRessources)}</ul>
        </div>
        {this.props.message}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    integerRessources: getIntegerList(state),
    containsOneRessources: getContainsOneList(state),
    primeRessouces: getPrimeNumberList(state),
    specialRessources: getSpecialNumbersList(state),
    message: state.ressource.message
  };
};

const mapDispatchToProps = {
  addRessource,
  getSpecialRessource
};

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);
