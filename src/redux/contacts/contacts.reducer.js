import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../auth/auth.reducer';


export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/contacts');
      console.log('data:fetchContacts ', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/contacts', formData);
      console.log('data:addContact ', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      console.log('data:deleteContact', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactsFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(addContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(deleteContact.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      }),
});

export const { addContactsFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;