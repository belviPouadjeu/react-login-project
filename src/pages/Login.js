import logo from '../assets/images/logo.png';
import { Link, Form, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { FormInput, SubmitBtn  } from '../components';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const isSubmitting = navigation.state === 'submitting';
    return (
        <section className='align-element border border-red-900 flex flex-col md:flex-row min-h-screen'>
            {/* Left container */}
            <div className='border border-blue-500 w-full max-w-[640px] bg-green-600 h-[864px]'>
                <div className="max-w-[150px] h-[58px] left-0 sm:left-5 relative">
                    <img 
                        src={logo}
                        alt="Company logo"    
                    />
                </div>

                <div className='w-full max-w-[469px] bg-red-600 border border-white mt-10 px-4 mx-auto'>

                    <h1 className='font-bold font-afacad text-5xl mb-1'>Sign in</h1>

                    <div className='w-full max-w-[400px] text-[24px] leading-[100%]'>
                        <h2 className='font-bold font-afacad mt-2'>Welcome back!</h2>
                        <p className="font-afacad leading-[100%]">
                        Log in to manage your services, deals, and technical opportunities
                        </p>
                    </div>

                    <div className='mt-1'>
                        <span className='text-gray-500 font-afacad'>Don't have an account? </span>
                        <Link to='/signup'>
                        <span className='font-semibold underline font-afacad'>Create now</span>
                        </Link>
                    </div>
                </div>

                <div className='w-full max-w-[500px] bg-white border border-teal-500 mt-12 px-4 mx-auto'>
                    <Form method='post' >
                        <FormInput 
                            type='email' 
                            label='E-mail' 
                            name='email' 
                            placeholder="example@gmail.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-bgInput"
                            labelClassName="text-base font-afacad text-[#718096] mb-1 block max-md:px-4"
                        />

                        <FormInput 
                            type='password' 
                            label='Password' 
                            name='password' 
                            placeholder="@#*%" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-bgInput"
                            labelClassName="text-base text-[#718096] mb-1 block max-md:px-4 mt-6 font-afacad"
                        />

                        <SubmitBtn text='Sign in' disabled={!isFormValid || isSubmitting} />

                        <p className="text-sm text-right mt-2 mr-6">
                            <Link className="underline hover:text-black" to="/forgot-password">
                                Forgot Password?
                            </Link>
                        </p>
                    </Form>

                    
                </div>

                <div className='w-full max-w-[500px] h-[126px] bg-yellow-500 border border-teal-500 mt-6 px-4 mx-auto'>

                    <div className="mt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex-grow h-px bg-gray-300" />
                            <p className="text-sm font-semibold text-gray-500">OR</p>
                            <div className="flex-grow h-px bg-gray-300" />
                        </div>
                    </div>

                    <Link
                        className="mt-5 h-10 border border-gray-300 bg-white 
                        hover:bg-gray-100 rounded-full flex items-center justify-center 
                        relative w-full"
                    >
                        <span className="absolute left-4">
                            <FcGoogle className="text-2xl" />
                        </span>
                        
                        <span className="text-[16px] text-black font-medium text-center">
                            Continue with Google
                        </span>
                    </Link>

                </div>


                

            </div>


            {/* Right container */}
            <div className='border border-green-700 bg-bgAvatar w-full max-w-[766px] h-[1024px]'>Avatar section</div>
        </section>
    )
}

export default Login