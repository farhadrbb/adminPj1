import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
    selectMenu: 0,
    selectShoab: {},
    selectAddress: {},
    wallet: 0,
    login:false,
    count:0,
    name:'',
    distance:false,
    sumPrice:'',
    toast:null


}

const buyBox = createSlice({
    name: "buyBox",
    initialState,
    reducers: {
        setBuy: (state, action) => {
            // let local = JSON.parse(localStorage.getItem('buy')) ? JSON.parse(localStorage.getItem('buy')) :[] 
            let arr = [...action.payload, ...state.value]
            var result = arr.reduce((unique, o) => {
                if (!unique.some(obj => obj.id === o.id && obj.goodsName === o.goodsName)) {
                    unique.push(o);
                }
                return unique;
            }, []);
            state.value = result
        },
        
        setIsLogin: (state, action) => {
            state.login = action.payload
        },
        setCount: (state, action) => {
            state.count = action.payload
        },

        setSelectGroupMenu: (state, action) => {
            state.selectMenu = action.payload
        },
        deleteBuy: (state, action) => {
            state.value = action.payload
        },
        setSelectShoabFn: (state, action) => {
            state.selectShoab = action.payload
        },
        setSelectAddress: (state, action) => {
            state.selectAddress = action.payload
        },
        setWallet: (state, action) => {
            state.wallet = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setDistance: (state, action) => {
            state.distance = action.payload
        },
        setSum: (state, action) => {
            state.sumPrice = action.payload
        },
        setToast: (state, action) => {
            state.toast = action.payload
        },
        

    }
})

export const { setBuy, setSelectGroupMenu, setSelectAddress, setSelectShoabFn, deleteBuy,setIsLogin,setCount,setWallet,setName,setDistance,setSum ,setToast} = buyBox.actions;
export default buyBox.reducer;