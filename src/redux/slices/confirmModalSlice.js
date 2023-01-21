import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:false
}

const confirmModalSlice=createSlice({
    name:"confirmModal",
    initialState,
    reducers:{
        showConfirmModal:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {showConfirmModal}=confirmModalSlice.actions;
export default confirmModalSlice.reducer;