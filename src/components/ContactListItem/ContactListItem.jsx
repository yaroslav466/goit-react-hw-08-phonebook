import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts.reducer';
import { ContactItem, ButtonDelete } from './ContactListItem.styled';
import Notiflix from 'notiflix';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
     Notiflix.Notify.failure(`Your contact was deleted`);
  };

  return (
     <ContactItem>
      <span>{contact.name}: </span>{' '}
      <div className="wrapper">
        <span>{contact.number}</span>

        <ButtonDelete
          type="button"
          onClick={() => handleDeleteContact(contact.id)}
        >
          Delete
        </ButtonDelete>
      </div>
    </ContactItem>
  );
};