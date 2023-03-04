import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
    selectMenu: 0
}

const buyBox = createSlice({
    name: "buyBox",
    initialState,
    reducers: {
        setBuy: (state, action) => {
            // let local = JSON.parse(sessionStorage.getItem('buy')) ? JSON.parse(sessionStorage.getItem('buy')) :[] 
            let arr = [...action.payload, ...state.value]
            var result = arr.reduce((unique, o) => {
                if (!unique.some(obj => obj.id === o.id && obj.goodsName === o.goodsName)) {
                    unique.push(o);
                }
                return unique;
            }, []);
            state.value = result
        },
        setSelectGroupMenu: (state, action) => {
            state.selectMenu = action.payload
        },

    }
})

export const { setBuy, setSelectGroupMenu } = buyBox.actions;
export default buyBox.reducer;