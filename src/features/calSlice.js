import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  display: ""
}

export const calSlice = createSlice({
  name: 'cal',
  initialState,
  reducers: {
    handleClick: (state, action) => {
      state.display += action.payload
    },
    clear: (state) => {
      state.display = ""
    },
    result: (state) => {
      // eslint-disable-next-line
      state.display = eval(state.display)
    }
  } 
})

export const { handleClick, clear, result } = calSlice.actions;

export default calSlice.reducer;