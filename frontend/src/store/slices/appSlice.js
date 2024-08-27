/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  username: localStorage.getItem('nickname') || '',
  modalChannelId: '',
  modalChannelName: '',
  showModal: '',
  currentChannelId: '',
  currentChannelName: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.nickname;
    },
    clearUserData(state) {
      state.token = null;
      state.username = '';
      localStorage.removeItem('token');
      localStorage.removeItem('nickname');
    },
    setChannelModal(state, action) {
      state.modalChannelId = action.payload.id;
      state.modalChannelName = action.payload.name;
      state.showModal = action.payload.modalName;
    },
    changeChannel(state, action) {
      const { name, id } = action.payload;
      state.currentChannelId = id;
      state.currentChannelName = name;
    },
  },
});

export const {
  setUserData, clearUserData, setChannelModal, changeChannel,
} = appSlice.actions;
export default appSlice.reducer;
