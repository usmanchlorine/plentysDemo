import React from 'react'
import { Link } from 'react-router-dom'
import './singup.css'
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools'
export default function Signup() {
    const form = useForm({

    })
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }


    return (


        <section className="mainsection">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="manondesk.png"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form noValidate onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-outline mb-4">

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
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.email?.message}</label>
                            </div>


                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" name='password'{...register('password', {
                                    required: "Password must be provided",
                                    minLength: {
                                        value: '8',
                                        message: 'Please enter atleast 8 characters',
                                    }



                                })} className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" for="form3Example3" style={{ color: 'red' }}>{errors.password?.message}</label>
                                <a href="#!" className="text-body float-right">Forgot password?</a>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button type="button" className="btn btn-light btn-floating mx-1" >
                                    <i className="bi bi-facebook" style={{ fontSize: '64px', color: "blue" }}></i>
                                </button>

                                <button type="button" className="btn btn-light btn-floating mx-1">
                                    <i className=""><img src='googleIcon.png' width={'64px'} height={'64px'}></img></i>
                                </button>

                            </div>


                            <div className="d-flex justify-content-between align-items-center">


                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">

                                <input type='submit' className='btn-accounts' value={'login'} />

                                <button type="button" className="btn btn-accounts mt-2"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Register</button>

                            </div>

                        </form>
                        <DevTool control={control} />
                    </div>
                </div>
            </div>

        </section>


    )
}
