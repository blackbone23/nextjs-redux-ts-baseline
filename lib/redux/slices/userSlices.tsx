import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type initialStateProps = {
  loading: boolean;
  users: any[];
  error: string;
  fulfilled: boolean;
}

const initialState: initialStateProps = {
  loading: false,
  users: [],
  error: '',
  fulfilled: false,
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state: initialStateProps, action:PayloadAction<any[]>) => {
      state.users = action.payload
    },
  },
})

export default userSlice.reducer
export const { fetchUser } = userSlice.actions