import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slices/ResumeSlice';
import ResumeFormDataSlice from './slices/ResumeFormDataSlice';
const store = configureStore({
  reducer: {
    resume: resumeReducer,
    resumeData : ResumeFormDataSlice ,
  },
});

export default store;
