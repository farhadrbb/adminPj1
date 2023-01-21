import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:false
}

const giftModalSlice=createSlice({
    name:"giftModal",
    initialState,
    reducers:{
        showGiftModal:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {showGiftModal}=giftModalSlice.actions;
export default giftModalSlice.reducer;