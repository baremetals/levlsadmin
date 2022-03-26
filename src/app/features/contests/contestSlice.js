import { createSlice } from '@reduxjs/toolkit';

const initialState = {    
  contests: [],
  contest: {},
  loading: false,
};

const contestSlice = createSlice({
  name: 'contest',
  initialState,
  reducers: {
    loadingData(state, action) {
      return {
        ...state,
        loading: true
      };
    },
    
    setContests(state, action) {
      return {
        ...state,
        contests: action.payload,
        loading: false
      };
    },
    setContest(state, action) {
      return {
        ...state,
        contest: action.payload
      };
    },
    
    likeContest(state, action) {
      let index = state.contests.findIndex(
        (contest) => contest.contestId === action.payload.contestId
      );
      state.contests[index] = action.payload;
      if (state.contest.contestId === action.payload.contestId) {
        state.contest = action.payload;
      }
      return {
        ...state
      };
    },
    unLikeContest(state, action) {
      let index = state.contests.findIndex(
        (contest) => contest.contestId === action.payload.contestId
      );
      state.contests[index] = action.payload;
      if (state.contest.contestId === action.payload.contestId) {
        state.contest = action.payload;
      }
      return {
        ...state
      };
    },
    followUser(state, action) {
      let index = state.users.findIndex(
        (user) => user.userId === action.payload.userId
      );
      state.users[index] = action.payload;
      if (state.user.userId === action.payload.userId) {
        state.user = action.payload;
      }
      return {
        ...state
      };
    },
    unfollowUser(state, action) {
      let index = state.users.findIndex(
        (user) => user.userId === action.payload.userId
      );
      state.users[index] = action.payload;
      if (state.user.userId === action.payload.userId) {
        state.user = action.payload;
      }
      return {
        ...state
      };
    },
    deleteContest(state, action) {
      let index = state.allHostedContests.findIndex(
        (contest) => contest.contestId === action.payload
      );
      state.allHostedContests.splice(index, 1);
      return {
        ...state
      };
    },
       
    hostAContest(state, action) {
      return {
        ...state,
        contests: [action.payload, ...state.contests]
      };
    },
  
    contestComment(state, action) {
      return {
        ...state,
        contest: {
          ...state.contest,
          comments: [action.payload, ...state.contest.contestComments]
        }
      };
    },
    editContest(contestData) {},  
  },
});

export const { 
  loadingData,
  editContest,
  contestComment,
  hostAContest,
  deleteContest,
  unLikeContest,
  likeContest,
  setContests,
  setContest,
  getContests,
  getContest
} = contestSlice.actions;

export default contestSlice.reducer;