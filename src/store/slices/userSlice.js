import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL, STATIC_USERS } from '../../utils/constants';

export const fetchUsers = createAsyncThunk('users/fetch', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (err) {
    return rejectWithValue('API failed');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.list.unshift(action.payload);
      },
      prepare({ name, email, phone, company }) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
            phone,
            company: { name: company || '—' },
          },
        };
      },
    },
    deleteUser(state, action) {
      state.list = state.list.filter(u => u.id !== action.payload);
    },
    hydrateStatic(state) {
      state.list = STATIC_USERS;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Failed to fetch users';
      });
  },
});

export const { addUser, deleteUser, hydrateStatic } = usersSlice.actions;
export default usersSlice.reducer;
