import { createSlice } from '@reduxjs/toolkit';

const photoSlice = createSlice({
   name: 'photo',
   initialState: [],
   reducers: {
      addPhoto: (state, action) => {
         state.push(action.payload);
      },
      removePhoto: (state, action) => {
         const id = action.payload;
         return state.filter((photo) => photo.id !== id);
      },
      updatePhoto: (state, action) => {
         const newPhoto = action.payload;
         const index = state.findIndex((photo) => photo.id === newPhoto.id);
         if (index >= 0) {
            state[index] = newPhoto;
         }
         // return [...state, (state[index] = newPhoto)];
      },
   },
});

export const { addPhoto, removePhoto, updatePhoto } = photoSlice.actions;
export default photoSlice.reducer;
