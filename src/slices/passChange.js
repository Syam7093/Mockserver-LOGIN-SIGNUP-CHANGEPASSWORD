import { createSlice } from "@reduxjs/toolkit";


const initialState={
    data:{}
}

export const passChange=createSlice({
    name:"syam",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        }
    }
})

export const {setData}=passChange.actions