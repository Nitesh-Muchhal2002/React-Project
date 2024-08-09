import React ,{useContext}from 'react'
import User from '../context/User'
function Profile() {
    const {user}=useContext(User)
     if(!user) return <div>please Login</div>
     return <div>Welcome {user.username}</div>
}

export default Profile