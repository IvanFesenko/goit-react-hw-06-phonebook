import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import sortContactList from '../services/sortContactList';
import {
  setToLocalStorage,
  getFromLocalStorage,
} from '../services/localStorage';

const initState = getFromLocalStorage();

const contactsReducer = createReducer(initState, {
  [actions.addContact]: (state, action) => {
    const result = sortContactList([...state, action.payload]);
    setToLocalStorage(result);
    return result;
  },
  [actions.deleteContact]: (state, action) => {
    const result = state.filter(contact => contact.id !== action.payload);
    setToLocalStorage(result);
    return result;
  },
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (state, action) => {
    return action.payload;
  },
});

const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducer;
