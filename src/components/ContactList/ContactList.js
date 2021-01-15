import { useDispatch } from 'react-redux';

import ContactListItem from './ContactListItem';
import s from './ContactList.module.scss';
import actions from '../../redux/actions';

function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    contacts.length > 0 && (
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              info={{ name, number }}
              key={id}
              onDeleteHandler={() => dispatch(actions.deleteContact(id))}
            />
          );
        })}
      </ul>
    )
  );
}

export default ContactList;
