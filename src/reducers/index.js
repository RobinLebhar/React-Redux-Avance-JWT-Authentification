import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification"
import ActionInfoReducer from "./action-info"
import RessourcesReducer from "./ressources"
import { reducer as form } from "redux-form"
const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressources: RessourcesReducer
});
export default rootReducer;

