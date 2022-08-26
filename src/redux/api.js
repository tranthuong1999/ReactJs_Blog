
import { loginStart, loginSuccess , loginFail , registerStart , registerSuccess, registerFail } from './authSlice'
import { listPost } from './postSlice'


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
                sessionStorage.setItem('user', data.data.accessToken)
                dispatch(loginSuccess(data.data))
                history.push('/home')
                alert("Login success")
    }
    catch(err){
        dispatch(loginFail())
        alert("Login failed")
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
        dispatch(registerSuccess(data.data))
        history.push('/login')
        alert("Register success")
    }
    catch(err){
        dispatch(registerFail())
        alert("Register failed")

    }
}


export const getBlog = async(dispatch) =>{
    try{
        const res = await fetch('http://127.0.0.1:3001/api/posts')
        const data = await res.json()
        dispatch(listPost(data.data))
    }
    catch(err){
        
        console.log("Error ---" , err )
    }
}
