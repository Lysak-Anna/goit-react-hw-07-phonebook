import { Input, Div, SearchIcon } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/filtersSlice';
export default function Filter() {
  const dispatch = useDispatch();

  function onChangeHandler(event) {
    dispatch(setValueFilter(event.target.value));
  }
  return (
    <Div>
      <SearchIcon />
      <Input
        placeholder="Search by name"
        type="text"
        onChange={onChangeHandler}
      ></Input>
    </Div>
  );
}
