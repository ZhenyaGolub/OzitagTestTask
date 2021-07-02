import React, { useContext, useState } from 'react'
import { AuthContext } from '../context';

export const User = ({ user, logout }) => {
        
    const isAuth = useContext(AuthContext);

    if(!isAuth){
        return null;
    }

    if(user !== null){
        return (
            <div className="user">
                <button className="exit" onClick={logout}>Exit</button>
                <h1>User information</h1>
                <div className="user__information">
                    <h2>Username: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                </div>
            </div>
        )
    }
}
