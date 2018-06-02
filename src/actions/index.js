import {
    SET_AUTHENTIFICATION, INCREMENT_ACTIONS_COUNT, ADD_RESSOURCE
} from './action-types';
import axios from "axios"
const BASE_URL = "http://localhost:3090";

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    };
}

export function incrementActionCount() {
    return {
        type: INCREMENT_ACTIONS_COUNT,
    };
}

export function addRessource() {

    return {
        type: ADD_RESSOURCE,
    };
}


export function signinUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin/`, { email, password })
            .then((response) => {
                dispatch({ type: SET_AUTHENTIFICATION, payload: true })
                localStorage.setItem("token", response.data.token)
                history.push("/ressources");
            })
            .catch((err) => {
                console.log("erreur", err)
            })
    }
}

export function signinOutUser() {
    return function (dispatch) {
        dispatch({ type: SET_AUTHENTIFICATION, payload: false })
        localStorage.removeItem("token")
    }
}

export function signupUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signup/`, { email, password })
            .then((response) => {
                dispatch({ type: SET_AUTHENTIFICATION, payload: true })
                localStorage.setItem("token", response.data.token)
                history.push("/ressources");
            })
            .catch((err) => {
                console.log("erreur", err)
            })
    }
}