'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegisterFunc = async (data) => {
        const {email,name,password,photo} = data;
        const {data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/"
        })
        console.log(res,error)
        if(error){
            alert(error.message)
        }

        if(res){
            alert("signUp successfully")
        }
    }
    console.log(errors)
    return (
        <div className='container mx-auto min-h-[80vh] py-6 flex  justify-center items-center bg-slate-100'>
            <div className='rounded-xl p-6 bg-white'>
                <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input type="text" className="input" placeholder="Enter your name" {...register("name", { required: "Name field is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your photo url" {...register("photo", { required: "Photo url field is required" })} />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="Enter your email" {...register("email", { required: "Email field is required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input" placeholder="Enter your password" {...register("password", { required: "Password field is required" })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn btn-neutral w-full">Register</button>
                </form>

            </div>
        </div>
    );
};

export default RegisterPage;