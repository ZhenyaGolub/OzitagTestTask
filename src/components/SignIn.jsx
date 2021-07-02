import React, { useRef, useState } from 'react';

import { useFormik } from 'formik';
import { validate } from '../validate';
import { getUserInformation } from '../utils';


export const SignIn = ({ authentication }) => {

    const submitBtnRef = useRef();

    const [wrong, setWrong] = useState(false);

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validate,
        onSubmit: async values => {
          try{
            loader(true);
            const response = await fetch('https://tager.dev.ozitag.com/api/auth/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    ...values,
                    clientId: 1
                })
            });
            loader(false);
            const res = await response.json();
            const user = await getUserInformation(res.data);
            authentication(user, res.data.tokenType, res.data.accessToken);
            setWrong(false);
        } catch(e){
            loader(false);
            setWrong(true);
        }
        },
    });

    const loader = (loaderState) => {
        if(loaderState){
            submitBtnRef.current.classList.add('animate__animated', 'animate__shakeX', 'animate__infinite', 'infinite');
        } else if(!loaderState){
            submitBtnRef.current.classList.remove('animate__animated', 'animate__shakeX', 'animate__infinite', 'infinite');
        }
    }

    return (
        <form action="post" className="sign-in" onSubmit={formik.handleSubmit}>
            <div className="data">
            <div className="row">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onInput={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            </div>
            <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onInput={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            </div>
            </div>
            <button type="submit" ref={submitBtnRef}>Sign in</button>
                {wrong ? <p className="wrong">Wrong email or password entered</p> : null}
        </form>
    )
}
