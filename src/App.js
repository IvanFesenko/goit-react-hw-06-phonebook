import { useSelector } from 'react-redux';

import styles from './App.module.css';

import { getContacts } from './redux/selectors.js';

import Contacts from './components/Contacts/Contacts';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <Contacts>
          <Filter />
          <ContactList contacts={contacts} />
        </Contacts>
      ) : (
        <p>Your phonebook is empty at this moment</p>
      )}
    </div>
  );
}

export default App;
