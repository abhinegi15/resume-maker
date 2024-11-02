import { createSlice } from "@reduxjs/toolkit";
import user from '../../assets/images/user.jpg';


const initialState = {
  bgColorResumeLeft: '#2b98b1',
  profile: user ,
  leftHeadingColor : '#FFF',
  leftTextColor : '#FFF',
};

const ResumeSlice = createSlice({
  name: 'resumeConfig',
  initialState,
  reducers: {
    // Define the reducer function to update bgColorResumeLeft
    setBgColor(state, action) {
      state.bgColorResumeLeft = action.payload;
    },

    setProfile(state , action) {
      state.profile = action.payload
    },

    setLeftHeadingsColor (state , action){
      state.leftHeadingColor = action.payload;
    },

    setLeftTextColor (state , action){
      state.leftTextColor = action.payload;
    }

  }
});

// Export the action to be used in components
export const { setBgColor , setProfile , setLeftHeadingsColor , setLeftTextColor } = ResumeSlice.actions;

// Export the reducer to be added to the store
export default ResumeSlice.reducer;
