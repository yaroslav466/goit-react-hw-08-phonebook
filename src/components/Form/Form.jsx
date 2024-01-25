
import { Title } from '../../pages/FormPages/FormPage.styled';
import { FormGroup } from '../../pages/FormPages/FormPage.styled';
import { Label } from '../../pages/FormPages/FormPage.styled';
import { Input } from '../../pages/FormPages/FormPage.styled';
import { Button } from '../../pages/FormPages/FormPage.styled';
import { FormContainer } from '../../pages/FormPages/FormPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts.reducer';
import { FormStyle } from './Form.styled';
import { selectContacts } from '../../redux/contacts/contacts.selectors';
import Notiflix from 'notiflix';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const createContact = evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.contactName.value;
    const number = evt.currentTarget.elements.contactNumber.value;

    const formData = {
      name,
      number,
    };

    if (contacts.some(contact => contact.name === formData.name)) {
      Notiflix.Notify.failure(`${formData.name} is already in contacts`);
      return;
    }
    dispatch(addContact(formData))
      .unwrap()
      .then(() => evt.target.reset());
    Notiflix.Notify.success(`You add new contact`);
  };

  return (
    <FormContainer>
      <FormStyle onSubmit={createContact}>
        <Title className="title">Add new contact</Title>
        <FormGroup>
          <Label className="text">Name</Label>
          <Input className="input" type="text" name="contactName" required />
        </FormGroup>
        <FormGroup>
          <Label className="text">Phone</Label>
          <Input
            className="input"
            type="text"
            name="contactNumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="XXX-XX-XX"
            required
          />
        </FormGroup>
        <Button type="submit">Add contact</Button>
      </FormStyle>
    </FormContainer>
  );
};