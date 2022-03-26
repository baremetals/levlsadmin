import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogposts: [],
    blogpost: {},
    loading: false
}

const blogpostSlice = createSlice({
    name: 'blogPost',
  initialState,
  reducers: {
    loadingData(state, action) {
        return {
          ...state,
          loading: true
        };
      },
      setBlogPosts(state, action) {
        return {
          ...state,
          blogposts: action.payload,
          loading: false
        };
      },
      setBlogPost(state, action) {
        return {
          ...state,
          blogpost: action.payload
        };
      },
      likeBlogPost(state, action) {
        let index = state.blogposts.findIndex(
          (blogpost) => blogpost.blogpostId === action.payload.blogpostId
        );
        state.blogposts[index] = action.payload;
        if (state.blogpost.blogpostId === action.payload.blogpostId) {
          state.blogpost = action.payload;
        }
        return {
          ...state
        };
      },
      unLikeBlogPost(state, action) {
        let index = state.blogposts.findIndex(
          (blogpost) => blogpost.blogpostId === action.payload.blogpostId
        );
        state.blogposts[index] = action.payload;
        if (state.blogpost.blogpostId === action.payload.blogpostId) {
          state.blogpost = action.payload;
        }
        return {
          ...state
        };
      },
      deleteBlogPost(state, action) {
        let index = state.blogposts.findIndex(
          (blogpost) => blogpost.blogpostId === action.payload
        );
        state.blogposts.splice(index, 1);
        return {
          ...state
        };
      },
      createBlogPost(state, action) {
        return {
          ...state,
          blogposts: [action.payload, ...state.blogposts]
        };
      },
      blogPostComment(state, action) {
        return {
          ...state,
          blogpost: {
            ...state.blogpost,
            comments: [action.payload, ...state.blogpost.blogPostComments]
          }
        };
      },
      editBlogPost() {},
  }
})

export const { 
    loadingData,
    editBlogPost,
    blogPostComment,
    createBlogPost,
    deleteBlogPost,
    unLikeBlogPost,
    likeBlogPost,
    setBlogPosts,
    setBlogPost,
    getBlogPosts,
    getBlogPost
} = blogpostSlice.actions;

export default blogpostSlice.reducer;