import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const user = (state = { username: null, role: null }, action) => {
  switch (action.type) {
    case 'user/login-set':
      return {
        ...state,
        username: action.value.username,
        role: action.value.role
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  user
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;