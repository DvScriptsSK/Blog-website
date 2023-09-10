import {React,useState} from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const SignUP = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }
  return (
    <div className='signin-container'>
        <form onSubmit={signUp}>
            <h1>Sign Up</h1>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUP