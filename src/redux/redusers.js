import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import sortContactList from '../services/sortContactList';

const initState = [];

const setToLocalStorage = () => {};
const getFromLocalStorage = () => {};

const contactsReducer = createReducer(initState, {
  [actions.addContact]: (state, action) => {
    const result = [...state, action.payload];
    setToLocalStorage(result);
    return result;
  },
  [actions.deleteContact]: (state, action) => {
    const result = state.filter(contact => contact.id !== action.payload);
    setToLocalStorage(result);
    return result;
  },
});

// const filterReducer = createReducer('', {
//   [actions.filterContacts]: (state, action) => {
//     return state.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase()),
//     );
//   },
// });
