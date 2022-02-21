import { createSlice } from '@reduxjs/toolkit'

// actions
export const resetHome = () => async (dispatch: any) => {
  dispatch(resetHomeData())
}

export const fetchHome = () => async (dispatch: any) => {
  setTimeout(() => {
    dispatch(setHomeData([
      {
        id: 1,
        title: 'title 1',
        content: 'content 1',
      },
      {
        id: 2,
        title: 'title 2',
        content: 'content 2',
      },
    ]))
  }, 5000)
}

//reducer
const initialState = {
  homeList: [],
  homeDetail: {},
  homeLoading: false,
  homeError: null,
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    resetHomeData: (state) => {
      state.homeList = []
      state.homeDetail = {}
      state.homeLoading = false
      state.homeError = null
    },
    setHomeData: (state, action) => {
      state.homeList = action.payload
      state.homeLoading = true
    }
  }
})

export const { resetHomeData, setHomeData } = homeSlice.actions

export default homeSlice.reducer