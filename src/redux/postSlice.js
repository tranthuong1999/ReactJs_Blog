

import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name :'post',
    initialState:{
        content:[]
    },
    reducers: {
        listPost : ( state , action) =>{
            
            console.log("state----" , state)
            console.log("action----" , action)
            state.content.push(action.payload)
        }
    }
})


export const { listPost} = postSlice.actions;

export default postSlice.reducer;
