import { combineReducers } from "redux";
import AuthentificationReducer from "./authentification";
import ActionInfoReducer from "./action-info";
import RessourceReducer from "./ressources";
import { reducer as form } from "redux-form";
import ErrorsReducer from "./errors";
const rootReducer = combineReducers({
  form,
  authentification: AuthentificationReducer,
  actionInfo: ActionInfoReducer,
  ressource: RessourceReducer,
  errors: ErrorsReducer
});

export default rootReducer;
