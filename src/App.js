import './App.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Title } from 'components/Title/Title';
import Wrapper from 'components/Wrapper/Wrapper';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { selectError, selectIsLoading } from './redux/selectors';
import Loader from 'components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="App">
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        {error &&
          toast.error('Something went wrong! Please, try again in few minutes')}
        {isLoading && !error && <Loader />}
        <ContactList />
      </Wrapper>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
