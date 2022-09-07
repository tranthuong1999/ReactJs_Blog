

import { createSlice ,createAsyncThunk  } from "@reduxjs/toolkit";


const authSLice = createSlice({
    name :'auth',
    initialState:{
        login:{
            currentUser : null,
            isFetching : false,
            error : false
        },
        register:{
            isFetching : false,
            error : false,
            success : false
        }
    },
    reducers: {
        
        loginStart : (state) =>{
            state.login.isFetching = true;
        },
        loginSuccess : (state , action) =>{

            console.log("state sucess---", action)
            console.log("action sucess---", action)


            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFail : (state , action) =>{
            state.login.isFetching = false;
            state.login.error = true;
        },

        registerStart : (state) =>{
            state.register.isFetching = true;
        },
        registerSuccess : (state , action) =>{

            console.log("state register sucess---", action)
            console.log("action regitster sucess---", action)

            state.register.isFetching = false;
            state.register.success = true;
            state.register.error = false;
        },
        registerFail : (state , action) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;

        }
    }
})


export const { loginStart , loginSuccess , loginFail , registerStart , registerSuccess , registerFail } = authSLice.actions


export default authSLice.reducer