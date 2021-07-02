import React from 'react'
import { SignIn } from '../components/SignIn'

export const Authorization = ({ showUser }) => {
    return (
        <div className="authorization">
            <SignIn authentication={showUser}/>
        </div>
    )
}
