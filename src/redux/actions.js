import { createAction } from '@reduxjs/toolkit';
import { v4 as uid } from 'uuid';

const addContact = createAction('phoneBook/addContact', (name, number) => ({
  payload: {
    name,
    number,
    id: uid(),
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const filterContacts = createAction('phonebook/filterContacts');

const actions = {
  addContact,
  deleteContact,
  filterContacts,
};

export default actions;
