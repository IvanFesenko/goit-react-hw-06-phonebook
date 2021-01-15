import { createSelector } from 'reselect';

export const getContacts = ({ phoneBook }) => phoneBook.contacts;
export const getFilter = ({ phoneBook }) => phoneBook.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return contacts;
  },
);
