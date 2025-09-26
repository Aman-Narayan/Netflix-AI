import {createSlice} from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name:"gemini",
    initialState:{
        showGemini:false,
    },
    reducers:{
        toggleGeminiSearchView :(state,action)=>{
            state.showGemini = !state.showGemini;
        },
    },
});

export const {toggleGeminiSearchView} = geminiSlice.actions;
export default geminiSlice.reducer;