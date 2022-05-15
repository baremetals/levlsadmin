import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [],
  user: {},
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
    loadingData(state, _action) {
      return {
        ...state,
        loading: true,
      };
    },
    setUsers(state, action) {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    },
    setUser(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },

    vote(state, action) {
      return {
        ...state,
        votes: [
          ...state.votes,
          {
            username: state.credentials.username,
            entryId: action.payload.entryId,
          },
        ],
      };
    },
    likeAnEntry(state, action) {
      return {
        ...state,
        entryLikes: [
          ...state.entryLikes,
          {
            username: state.credentials.username,
            entryId: action.payload.entryId,
          },
        ],
      };
    },
    unLikeAnEntry(state, action) {
      return {
        ...state,
        entryLikes: state.entryLikes.filter(entryLike => entryLike.entryId !== action.payload.entryId),
      };
    },
    likeABlogPost(state, action) {
      return {
        ...state,
        blogpostLikes: [
          ...state.blogpostLikes,
          {
            username: state.credentials.username,
            blogpostId: action.payload.blogpostId,
          },
        ],
      };
    },
    unLikeABlogPost(state, action) {
      return {
        ...state,
        blogpostLikes: state.blogpostLikes.filter(
          blogpostLike => blogpostLike.blogpostId !== action.payload.blogpostId,
        ),
      };
    },
    likeAnEvent(state, action) {
      return {
        ...state,
        eventLikes: [
          ...state.eventLikes,
          {
            username: state.credentials.username,
            eventId: action.payload.eventId,
          },
        ],
      };
    },
    unLikeAnEvent(state, action) {
      return {
        ...state,
        eventLikes: state.eventLikes.filter(eventLike => eventLike.eventId !== action.payload.eventId),
      };
    },
    likeAContest(state, action) {
      return {
        ...state,
        contestLikes: [
          ...state.contestLikes,
          {
            username: state.credentials.username,
            contestId: action.payload.contestId,
          },
        ],
      };
    },
    unLikeAContest(state, action) {
      return {
        ...state,
        contestLikes: state.contestLikes.filter(contestLike => contestLike.contestId !== action.payload.contestId),
      };
    },
    followUser(state, action) {
      return {
        ...state,
        following: [
          ...state.following,
          {
            username: state.credentials.username,
            userId: action.payload.userId,
          },
        ],
      };
    },
    unfollowUser(state, action) {
      return {
        ...state,
        following: state.following.filter(follow => follow.userId !== action.payload.userId),
      };
    },
    notificationsRead(state, _action) {
      state.notifications.forEach(not => (not.read = true));
      return {
        ...state,
      };
    },
    setUsernames(state, action) {
      // How to print state in this function; for future use.
      // console.log(JSON.stringify(state, undefined, 2))
      return {
        ...state,
        usernames: action.payload,
      };
    },
    removeUser(state, action) {
      let index = state.users.findIndex(usr => usr.userId === action.payload);
      state.users.splice(index, 1);
    },

    addUser(state, action) {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    },

    getUsers(_call) {},
    getOrganisations(_call) {},
    createUserEntity(_data) {},
    deleteUser(_id) {},
    resetPassword(_email) {},
    updateEmailAddress(_newEmail) {},
    updatePassword(_newPassword) {},
    updateUsername(_NewUsername) {},
    editUserDetails(_userDetails) {},
    editOrgDetails(_userDetails) {},
    markNotificationsRead() {},
    getUsernames() {},
    getUserEntriesData(_userId) {},
    getUserContestsData(_userId) {},
  },
});

export const {
  setUser,
  setUsers,
  editUserDetails,
  editOrgDetails,
  resetPassword,
  updateEmailAddress,
  updatePassword,
  updateUsername,
  getUsernames,
  setUsernames,
  loadingData,
  getUsers,
  getOrganisations,
  deleteUser,
  addUser,
  removeUser,
  createUserEntity,
} = userSlice.actions;

export default userSlice.reducer;
