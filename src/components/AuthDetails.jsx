import {React,useEffect, useState} from 'react'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { auth } from '../firebase'
const AuthDetails = () => {
    const [user, setUser] = useState(null);
    useEffect(() => { 
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser(null)
            }
        });
        return () => listen();

    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });
    }
  return (
    <div>{user ? <><p>{`Signed in`}</p><button onClick={userSignOut}>Sign out</button> </>: <p>Signed out</p>}</div>
  )
}

export default AuthDetails