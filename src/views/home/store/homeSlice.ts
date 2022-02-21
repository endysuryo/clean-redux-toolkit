import { createSlice } from '@reduxjs/toolkit'
import { getPokemons } from '../../../common/apis/pokemon'

// actions
export const resetHome = () => async (dispatch: any) => {
  dispatch(resetHomeData())
}

export const fetchHome = () => async (dispatch: any) => {
  const result = await getPokemons()
  dispatch(setHomeData(result))
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