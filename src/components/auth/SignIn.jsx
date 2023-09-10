import {React,useState} from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
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
        <form onSubmit={signIn}>
            <h1>Log in</h1>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <button type='submit'>Log in</button>
        </form>
    </div>
  )
}

export default SignIn