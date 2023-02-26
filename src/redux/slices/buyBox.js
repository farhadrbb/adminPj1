import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [
        {
            key: 1,
            title: 'پیتزا مخلوط',
            price: '216.000',
            count:0
        },
        {
            key: 2,
            title: 'پیتزا گوشت ',
            price: '216.000',
            count:0
        },
        {
            key: 3,
            title: 'پیتزا پپرونی',
            price: '123.000',
            count:0
        },
        {
            key: 4,
            title: 'پاستا سبزیجات',
            price: '56.650',
            count:0
        },
        {
            key: 5,
            title: 'سیب زمینی',
            price: '96.450',
            count:0
        },
        {
            key: 6,
            title: 'نوشابه',
            price: '10.500',
            count:0
        },
        {
            key: 7,
            title: 'نون سیر',
            price: '6565.000',
            count:0
        },
        {
            key: 8,
            title: 'مارگاریتا',
            price: '64.000',
            count:0
        },
        {
            key: 9,
            title: 'پیتزا چیکن',
            price: '32.000',
            count:0
        },
    ]
}

const buyBox = createSlice({
    name: "buyBox",
    initialState,
    reducers: {
        setBuy: (state, action) => {
            state.value = [...action.payload]
        },
    }
})

export const { setBuy } = buyBox.actions;
export default buyBox.reducer;