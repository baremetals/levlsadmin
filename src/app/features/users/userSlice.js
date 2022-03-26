import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  notifications: [],
  followers: [],
  following: [],
  entryLikes: [],
  blogpostLikes: [],
  contestLikes: [],
  eventLikes: [],
  votesReceived: [],
  votes: [],
  usernames: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingData(state, action) {
      return {
        ...state,
        loading: true
      };
    },
    setAuthenticated(state, action) {
      return {
        ...state,
        authenticated: true
      }
    },
    setUnAuthenticated(state, action) {
      return initialState;
    },
    setUser(state, action) {
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    },
    loadingUser(state, action) {
      return {
        ...state,
        loading: true
      };
    },
    vote(state, action) {
      return {
        ...state,
        votes: [
          ...state.votes,
          {
            username: state.credentials.username,
            entryId: action.payload.entryId
          }
        ]
      };
    },
    likeAnEntry(state, action) {
      return {
        ...state,
        entryLikes: [
          ...state.entryLikes,
          {
            username: state.credentials.username,
            entryId: action.payload.entryId
          }
        ]
      };
    },
    unLikeAnEntry(state, action) {
      return {
        ...state,
        entryLikes: state.entryLikes.filter(
          (entryLike) => entryLike.entryId !== action.payload.entryId
        )
      }
    },
    likeABlogPost(state, action) {
      return {
        ...state,
        blogpostLikes: [
          ...state.blogpostLikes,
          {
            username: state.credentials.username,
            blogpostId: action.payload.blogpostId
          }
        ]
      };
    },
    unLikeABlogPost(state, action) {
      return {
        ...state,
        blogpostLikes: state.blogpostLikes.filter(
          (blogpostLike) => blogpostLike.blogpostId !== action.payload.blogpostId
        )
      }
    },
    likeAnEvent(state, action) {
      return {
        ...state,
        eventLikes: [
          ...state.eventLikes,
          {
            username: state.credentials.username,
            eventId: action.payload.eventId
          }
        ]
      };
    },
    unLikeAnEvent(state, action) {
      return {
        ...state,
        eventLikes: state.eventLikes.filter(
          (eventLike) => eventLike.eventId !== action.payload.eventId
        )
      }
    },
    likeAContest(state, action) {
      return {
        ...state,
        contestLikes: [
          ...state.contestLikes,
          {
            username: state.credentials.username,
            contestId: action.payload.contestId
          }
        ]
      };
    },
    unLikeAContest(state, action) {
      return {
        ...state,
        contestLikes: state.contestLikes.filter(
          (contestLike) => contestLike.contestId !== action.payload.contestId
        )
      }
    },
    followUser(state, action) {
      return {
        ...state,
        following: [
          ...state.following,
          {
            username: state.credentials.username,
            userId: action.payload.userId
          }
        ]
      };
    },
    unfollowUser(state, action) {
      return {
        ...state,
        following: state.following.filter(
          (follow) => follow.userId !== action.payload.userId
        )
      }
    },
    notificationsRead(state, action) {
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state
      };
    },
    setUsernames(state, action) {
      // How to print state in this function; for future use.
      // console.log(JSON.stringify(state, undefined, 2))
      return {
        ...state,
        usernames: action.payload
      }
    },
    signUpUser(newUserData) {},
    signInUser(userData) {},
    resetPassword(email) {},
    updateEmailAddress(newEmail) {},
    updatePassword(newPassword) {},
    updateUsername(NewUsername) {},
    signOutUser() {},
    getUserData() {},
    uploadImage(formData) {},
    editUserDetails(userDetails) {},
    markNotificationsRead() {},
    setAuthorizationHeader(){},
    getUsernames() {},
    getUserEntriesData(userId) {},
    getUserContestsData(userId) {},
    getUserBlogPostsData(userId) {},
    getUserEventsData(userId) {},
  },
});


export const {
  vote,
  notificationsRead,
  unfollowUser,
  followUser,
  likeAnEntry,
  unLikeAnEntry,
  likeABlogPost,
  unLikeABlogPost,
  likeAnEvent,
  unLikeAnEvent,
  likeAContest,
  unLikeAContest,
  loadingUser,
  setUser,
  setUnAuthenticated,
  setAuthenticated,
  signUpUser,
  signInUser,
  signOutUser,
  getUserData,
  uploadImage,
  editUserDetails,
  markNotificationsRead,
  setAuthorizationHeader,
  resetPassword,
  updateEmailAddress,
  updatePassword,
  updateUsername,
  getUser,
  getUsernames, 
  setUsernames,
  loadingData,
  getUserBlogPostsData,
  getUserContestsData,
  getUserEntriesData,
  getUserEventsData
} = userSlice.actions;

export default userSlice.reducer;