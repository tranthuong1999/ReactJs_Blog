
import { loginStart, loginSuccess , loginFail , registerStart , registerSuccess, registerFail } from './authSlice'

export const loginUser = async( user, dispatch , history) =>{

    dispatch(loginStart())     
    try{
        const res = await fetch('http://127.0.0.1:3001/api/auth/login',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(user)
                })
        const data = await res.json()


        console.log("data respone" ,data)

        dispatch(loginSuccess(data.data))
        history.push('/home')
    }
    catch(err){
        dispatch(loginFail())
    }
}

export const registerUser = async( user, dispatch , history) =>{

    dispatch(registerStart())
    try{
        const res = await fetch('http://127.0.0.1:3001/api/register',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })

        const data = await res.json()
        console.log("Data----" , data)

        dispatch(registerSuccess(res.data))
        history.push('/login')
    }
    catch(err){
        dispatch(registerFail())
    }
}
