import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './App.module.css';

import { getVisibleContacts } from './redux/selectors.js';

import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  const contacts = useSelector(getVisibleContacts);
  const [filter, setFilter] = useState('');

  // const isUniqueContact = newName => {
  //   const index = contacts.findIndex(
  //     ({ name }) => name.toLowerCase() === newName.toLowerCase().trim(),
  //   );
  //   return index === -1 ? true : false;
  // };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <Contacts>
          <Filter filter={filter} onChangeFilter={setFilter} />
          <ContactList contacts={contacts} />
        </Contacts>
      ) : (
        <p>Your phonebook is empty at this moment</p>
      )}
    </div>
  );
}

export default App;
