import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';

type initialStateProps = {
  loading: boolean;
  posts: Posts[];
  post: Posts;
  error: string;
  fulfilled: boolean;
}

export interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const initialState: initialStateProps = {
  loading: false,
  posts: [],
  post: {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  },
  error: '',
  fulfilled: false,
}

// generate pending, fulfilled, and rejected action types
export const fetchPosts = createAsyncThunk('user/fetchPosts', async () => { // reducer name will be fetchPost
  return axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(resp => resp.data)
})

export const fetchPost = createAsyncThunk('user/fetchPost', async (postId: string) => { // reducer name will be fetchPost
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(resp => resp.data)
})

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => { // manage pending, fulfilled and rejected
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action:PayloadAction<Posts[]>) => {
      state.loading = false
      state.posts = action.payload
      state.error = ''
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false
      state.posts = []
      state.error = action.error.message || "Something went wrong!"
    })
    builder.addCase(fetchPost.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPost.fulfilled, (state, action:PayloadAction<Posts>) => {
      state.loading = false
      state.post = action.payload
      state.error = ''
    })
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false
      state.post = {
        id: 0,
        title: '',
        body: '',
        userId: 0,
      }
      state.error = action.error.message || "Something went wrong!"
    })
  }
})

export default postSlice.reducer