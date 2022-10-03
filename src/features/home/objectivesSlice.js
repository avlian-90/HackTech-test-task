import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  objectives: []
};

export const objectivesAsync = createAsyncThunk(
  'objectives/getObjectives',
  async () => {
    const token = localStorage.getItem("access-token");
    const response = await axios.get("https://alignee.appspot.com/api/v1/okr/objectives", { 
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    });
    return response.data.results;
  }
);

export const objectivesSlice = createSlice({
  name: 'objectives',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(objectivesAsync.fulfilled, (state, action) => {
        state.objectives = action.payload;
      });
  },
});

export default objectivesSlice.reducer;