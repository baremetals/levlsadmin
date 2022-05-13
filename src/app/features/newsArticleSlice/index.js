import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsArticles: [],
  newsArticle: {},
  loading: false,
};

const newsArticleSlice = createSlice({
  name: 'newsArticle',
  initialState,
  reducers: {
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setNewsArticles(state, action) {
      return {
        ...state,
        newsArticles: action.payload,
        loading: false,
      };
    },
    setNewsArticle(state, action) {
      return {
        ...state,
        newsArticle: action.payload,
      };
    },

    // getNewsArticle(state, action) {
    //   // let article = state.newsArticles.filter(art => art.newsId === action.payload);
    //   return {
    //     ...state,
    //     newsArticle: state.newsArticles.,
    //   };
    // },

    removeNewsArticle(state, action) {
      let index = state.newsArticles.findIndex(newsArticle => newsArticle.newsId === action.payload);
      state.newsArticles.splice(index, 1);
    },
    createNewsArticle(state, action) {
      return {
        ...state,
        newsArticles: [action.payload, ...state.newsArticles],
      };
    },
    getNewsArticles() {},
    getNewsArticle() {},
    deleteNewsArticle(_id) {},
    editNewsArticle(_articleData) {},
    createNewsArticleEntity(
      _formData,
      _header = {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ) {},
  },
});

export const {
  loadingData,
  editNewsArticle,
  createNewsArticle,
  createNewsArticleEntity,
  deleteNewsArticle,
  removeNewsArticle,
  setNewsArticles,
  setNewsArticle,
  getNewsArticles,
  getNewsArticle,
} = newsArticleSlice.actions;

export default newsArticleSlice.reducer;
