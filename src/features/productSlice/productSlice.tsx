import { createSlice } from "@reduxjs/toolkit";


interface initialStateOptions {
  category: string[];

}

const initialState: initialStateOptions = {
  category: [],

};

export const productSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    addToChoiceList: (state, action) => {
      let isExist: boolean = state.category.includes(action.payload);
      if (isExist) {
        
        state.category = [...state.category.filter(
          (item) => item !== action.payload
        )]

      } else {
        state.category = [...state.category, action.payload];
        // state.category.push(action.payload)

      }
    },
  },
});


export const { addToChoiceList } = productSlice.actions
export default productSlice.reducer