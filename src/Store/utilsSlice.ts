/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface IUtilsState {
  inSearch: boolean
  isLoading: boolean
  serviceUnavailable: string
  isSilentLoading: boolean
  isSettingsOpen: boolean
  isAvatarVisible: boolean
  emailFetchSize: number
}

const initialState: IUtilsState = Object.freeze({
  inSearch: false,
  isLoading: false,
  serviceUnavailable: '',
  isSilentLoading: false,
  isSettingsOpen: false,
  isAvatarVisible: localStorage.getItem('showAvatar') === 'true',
  emailFetchSize: parseInt(localStorage.getItem('fetchSize') ?? '20', 10),
})

export const utilsSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setInSearch: (state, action: PayloadAction<boolean>) => {
      state.inSearch = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setServiceUnavailable: (state, action: PayloadAction<string>) => {
      state.serviceUnavailable = action.payload
    },
    setIsSilentLoading: (state, action: PayloadAction<boolean>) => {
      state.isSilentLoading = action.payload
    },
    setIsSettingsOpen: (state, action: PayloadAction<boolean>) => {
      state.isSettingsOpen = action.payload
    },
    setShowAvatar: (state, action: PayloadAction<boolean>) => {
      state.isAvatarVisible = action.payload
    },
    setEmailFetchSize(state, action: PayloadAction<number>) {
      state.emailFetchSize = action.payload
    },
  },
})

export const {
  setInSearch,
  setIsLoading,
  setServiceUnavailable,
  setIsSilentLoading,
  setIsSettingsOpen,
  setShowAvatar,
  setEmailFetchSize,
} = utilsSlice.actions

export const selectIsSettingsOpen = (state: RootState) =>
  state.utils.isSettingsOpen
export const setAvatarVisibility = (state: RootState) =>
  state.utils.isAvatarVisible
export const selectInSearch = (state: RootState) => state.utils.inSearch
export const selectIsLoading = (state: RootState) => state.utils.isLoading
export const selectServiceUnavailable = (state: RootState) =>
  state.utils.serviceUnavailable
export const selectIsSilentLoading = (state: RootState) =>
  state.utils.isSilentLoading
export const selectEmailListSize = (state: RootState) =>
  state.utils.emailFetchSize

export default utilsSlice.reducer
