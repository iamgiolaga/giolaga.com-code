import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'store',
  initialState: {
    isFocusingOnProject: false,
  },
  reducers: {
    isFocusingOnProject: (state, action) => {
      state.isFocusingOnProject = action.payload
    }
  },
});

export default slice.reducer

const { isFocusingOnProject } = slice.actions
export const focusOnProject = (inView) => async dispatch => {
    try {
        dispatch(isFocusingOnProject(inView))
    }
    catch (e) {
        return console.error(e.message);
    }
}