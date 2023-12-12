import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {thunk} from 'redux-thunk';

const initialState = {
  isAuthenticated: false,
  token: null
  // other relevant state properties
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isAuthenticated: true, token: action.payload.token };
      case 'LOGOUT':
        return { ...state, isAuthenticated: false, token: null };
      // handle other actions
      default:
        return state;
    }
}; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk) // Apply redux-thunk middleware
  );
export const persistor = persistStore(store);
 