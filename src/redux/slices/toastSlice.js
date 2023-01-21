import {createSlice} from "@reduxjs/toolkit";


const initialState={
    value:{toastList:[],position:"top-right",autoDelete:true,autoDeleteTime:3000}
}

const toastSlice=createSlice({
    name:"toast",
    initialState,
    reducers:{
        showToast:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {showToast}=toastSlice.actions;
export default toastSlice.reducer;