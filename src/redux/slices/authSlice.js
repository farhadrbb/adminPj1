import {createSlice} from "@reduxjs/toolkit";


const initialState={
    validateCustomer:{}
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setValidateCustomer:(state,action)=>{
            state.validateCustomer=action.payload
        }
    }
})

export const {setValidateCustomer}=authSlice.actions;
export default authSlice.reducer;