import React, { Component } from "react";
import * as actions from "../actions"
import { connect } from "react-redux";
import { getRessourceMessage } from "../selectors/ressouces"

class Ressources extends Component {
    componentWillMount = () => {
        this.props.getSpecialRessource();
    }

    renderRessouces = (ressourceList) => {
        return ressourceList.map((r, index) => <li key={index}>{r}</li>)
    }

    render() {

        return (

            <div>
                Ressources spéciales  : {this.props.message}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    message: getRessourceMessage(state)
});


export default connect(mapStateToProps, actions)(Ressources);