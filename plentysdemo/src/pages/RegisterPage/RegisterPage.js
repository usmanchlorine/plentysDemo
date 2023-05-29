import React, { useState } from 'react'
import { Link, useRevalidator } from 'react-router-dom'
import styles from './RegisterPage.module.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import 'animate.css';
import { userServiceCall } from '../../state/Actions/UserApi';
var validator = require('validator');


export default function RegisterPage() {

    const seepassword = () => {
        console.log('hello field')
        let passwordfield = document.getElementById('form3Example4')
        console.log(passwordfield)
        if (passwordfield.type === 'password') {
            passwordfield.type = "text"
            passwordfield.setAttribute('type', 'text')
        } else {
            passwordfield.type = 'password'
        }

    }

    const form = useForm({

    })
    const { register, control, handleSubmit, formState, setError } = form;
    const { errors } = formState

    const onSubmit = async (userdata) => {

        if (userdata.password !== userdata.confirmpassword) {
            return setError('confirmpassword', {
                message: "paswords do not match"
            })
        }



        const data = {
            fullname: userdata.fullname,
            password: userdata.password,
            email: userdata.email,
            number: userdata.phoneNumber,
        }
        console.log(JSON.stringify(data))

        const response = await userServiceCall('post', 'createuser', data);

        if (response.status == 400) {
            switch (response.field) {
                case 'email':
                    setError("email", { /// setting error custom in this case its server error 
                        message: response.message
                    })
                    break

            }


        } else {
            alert(response.message);
        }

    }
    const [value, setValue] = useState()
    const [password, setPassword] = useState('')

    return (

        <section className={"mainsection " + styles.mainsection}>
            <div className="container-fluid h-custom">
                <div className="row d-flex gap-5 justify-content-center align-items-center h-100">

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className={'mb-5 ' + styles.heading}>
                            <h1 className='mb-2' align='center'>Welcome to Plentys</h1>
                            <h5 className='mb-2' align='center'>Create an account</h5>
                        </div>
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-outline mb-2">
                                <label className={' ' + styles.labelinputs}>Full Name</label>
                                <input type="text" id="form3Example3" name='fullname' {...register('fullname', {
                                    required: "fullname should not be empty",
                                    minLength: {
                                        value: '10',
                                        message: "please enter the full name greater than 10 characters"
                                    },
                                    validate: {
                                        nonumber: (fieldvalue) => {
                                            if (/\d/.test(fieldvalue)) {
                                                return "no numbers in the field"

                                            }

                                        }

                                    }
                                })} className="form-control form-control-lg"
                                    placeholder="Enter the full name" style={{ border: `${errors.fullname ? "2px solid red" : ''}` }} />
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.fullname?.message}</label>
                            </div>

                            <div className={'form-outline mb-2 ' + styles.phonenumber}>

                                <PhoneInput
                                    className="form-control form-control-lg"
                                    international
                                    placeholder="Enter phone number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    defaultCountry="PK"
                                    {...register("phoneNumber", {
                                        maxLength: {
                                            value: '16',
                                            message: "phone number must be in range"
                                        },
                                        minLength: {
                                            value: '10',
                                            message: "phone number must be in range"
                                        }
                                    })}
                                    style={{ border: `${errors.phoneNumber ? "2px solid red" : ''}` }}
                                />

                            </div>
                            <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.phoneNumber?.message}</label>

                            <div className="form-outline mb-4">
                                <label className={' ' + styles.labelinputs}>Email</label>
                                <input type="email" id="form3Example3" name='email' {...register('email', {
                                    required: "email should be provided",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Please enter a valid email address"
                                    },
                                    validate: {
                                        noBaddomain: (fieldvalue) => {
                                            if (fieldvalue.endsWith("outlook.com")) {
                                                return "outlook.com domain is not supported"
                                            }


                                        }
                                    }
                                })} className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    style={{ border: `${errors.email ? "2px solid red" : ''}` }} />
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.email?.message}</label>
                            </div>




                            <div className="form-outline mb-3">
                                <label className={' ' + styles.labelinputs}>Password</label>
                                <span className='d-flex align-items-center' style={{ position: 'relative' }}>
                                    <input type="password" id="form3Example4" name='password'{...register('password', {
                                        required: "Password must be provided",
                                        minLength: {
                                            value: '8',
                                            message: 'Please enter atleast 8 characters',
                                        }




                                    })} className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e) => setValue(e.target.value)}
                                        style={{ border: `${errors.password ? "2px solid red" : ""}` }} /> <i className='bi bi-eye' onClick={() => seepassword()} style={{ position: 'absolute', right: '10px', cursor: 'pointer' }} /></span>
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.password?.message}</label>

                            </div>


                            <div className="form-outline mb-3">
                                <label className={' ' + styles.labelinputs}>Confirm Password</label>
                                <input type="password" id="form3Example4" name='confirmpassword'{...register('confirmpassword', {
                                    required: "Password must be provided",
                                    minLength: {
                                        value: '8',
                                        message: 'Please enter atleast 8 characters',
                                    }



                                })} className="form-control form-control-lg"
                                    placeholder="Enter confirm password"
                                    style={{ border: `${errors.confirmpassword ? "2px solid red" : ''}` }} />
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.confirmpassword?.message}</label>
                            </div>



                            <div className="d-flex justify-content-between align-items-center">


                            </div>

                            <div className="text-center text-lg-start mt-2 pt-2">

                                <input type='submit' className='btn-accounts' style={{ borderRadius: '10px', width: '100%' }} value={'Signup'} />

                                <div className='d-flex gap-2 mt-2'>
                                    <button type="button" className={"btn  w-50 mt-2 " + styles.socialLinks}
                                        style={{ paddingLeft: '1rem', paddingRight: '1rem', border: '1px solid #94A3B8' }}><i className='bi bi-google px-2'></i>Signup with Google</button>

                                    <button type="button" className="btn   w-50 mt-2"
                                        style={{ paddingLeft: '1rem', paddingRight: '1rem', border: '1px solid #94A3B8' }}><i className='bi bi-facebook px-2'></i>Signup with Facebook</button>

                                </div>

                                <div className='d-flex justify-content-center mt-3'>
                                    <label className={' ' + styles.labelinputs}>Already have an account? <Link className='' to={'/signup'} style={{ color: '#009FD1' }} >Sign in</Link></label>

                                </div>


                            </div>

                        </form>

                        <DevTool control={control} />
                    </div>
                    <div className={"col-md-9 col-lg-6 col-xl-5 "}>
                        <img src="Artwork.png"
                            className={"img-fluid animate__animated animate__shakeY animate__slower 10s animate__infinite	infinite "} alt="Sample image" />
                    </div>

                </div>
            </div>


        </section>

    )
}
