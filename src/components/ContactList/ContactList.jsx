import Item from 'components/Item/Item';
import { sort } from './../../helper';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {sort(filteredContacts).map(({ id, name, phone }) => (
        <Item key={id} name={name} phone={phone} id={id} />
      ))}
    </ul>
  );
}
