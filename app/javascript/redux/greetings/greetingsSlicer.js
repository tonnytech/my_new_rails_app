import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greetings: [],
  status: 'idle',
  error: null,
};

const GREETINGS_URL = 'http://127.0.0.1:3000/random_greeting';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const res = await axios.get(GREETINGS_URL);
  return res.data;
});

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => ({ ...state, status: 'loading' }));
    builder.addCase(fetchGreetings.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      greetings: action.payload,
    }));
  },
});

export default greetingsSlice.reducer;