import PropTypes from 'prop-types';
import { Element, Image, Name, Number, Button, Icon } from './Item.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectMessage } from 'redux/selectors';
export default function Item({ name, phone, id }) {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const deleteItemHandler = () => {
    dispatch(deleteContact(id));
    message && toast.success('This contact was successfully deleted');
  };
  return (
    <Element>
      <Image>{name.slice(0, 1)}</Image>
      <div>
        <Name>{name}</Name>
        <Number> {phone}</Number>
      </div>
      <Button type="button" onClick={deleteItemHandler} id={id}>
        <Icon />
      </Button>
    </Element>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
