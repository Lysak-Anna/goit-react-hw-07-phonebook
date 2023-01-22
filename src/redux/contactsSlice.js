import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
  message: false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
      state.message = true;
    });
    builder.addCase(addContact.rejected, handleRejected);
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.message = true;
    });
    builder.addCase(deleteContact.rejected, handleRejected);
    // [fetchContacts.pending]: handlePending,
    // [fetchContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = action.payload;
    // },
    // [fetchContacts.rejected]: handleRejected,
    // [addContact.pending]: handlePending,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts.push(action.payload);
    //   state.message = true;
    // },
    // [addContact.rejected]: handleRejected,
    // [deleteContact.pending]: handlePending,
    // [deleteContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload.id
    //   );
    //   state.message = true;
    // },
    // [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
