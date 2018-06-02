import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';


export default function (Component) {
    class RequireAuthentication extends Component {
        state = {
            shouldComponentBeRender: true
        }
        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.setState({
                    shouldComponentBeRender: false
                })
            }
        }

        componentWillUpdate(nextProps) {
            // Si on est déja sur le lien et que l'utilisateur se déconnecte.
            if (!nextProps.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        render() {
            return this.state.shouldComponentBeRender && <Component {...this.props} />
        }
    }

    const mapStateToProps = state => ({
        isLoggedIn: state.authentification.isLoggedIn
    });


    return connect(mapStateToProps)(RequireAuthentication);
}