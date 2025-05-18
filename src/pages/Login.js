import logo from '../assets/images/logo.png';
import { Link, Form, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { FormInput, SubmitBtn  } from '../components';
import { FcGoogle } from "react-icons/fc";
import support from '../assets/images/MdOutlineSupportAgent.png';
import phrase from '../assets/images/4xl.png';
import monde from '../assets/images/svg.png';
import anglais from '../assets/images/en.svg';
import avatar from '../assets/images/Illustration.png';
import icon from '../assets/images/Icon.png';
import skip from '../assets/images/skip.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const isSubmitting = navigation.state === 'submitting';
    return (
        <section className='align-element flex flex-col md:flex-row min-h-screen'>
            {/* Left container */}
            <div className='w-full max-w-[640px] h-[864px]'>
                <div className="max-w-[150px] h-[58px] left-0 sm:left-5 relative">
                    <img 
                        src={logo}
                        alt="Company logo"    
                    />
                </div>

                <div className='w-full max-w-[469px] mt-12 px-4 mx-auto'>

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

                <div className='w-full max-w-[500px] mt-16 px-4 mx-auto'>
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
                            <Link className="underline font-afacad  hover:text-black" to="/forgot-password">
                                Forgot Password?
                            </Link>
                        </p>
                    </Form>

                    
                </div>

                <div className='w-full max-w-[500px] h-[126px] mt-10 px-4 mx-auto'>

                    <div className="mt-8">
                        <div className="flex items-center gap-4">
                            <div className="flex-grow h-px bg-gray-300" />
                            <p className="text-sm font-semibold text-gray-500 font-afacad">OR</p>
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

                        <span className="text-[16px] text-black text-center font-afacad ">
                            Continue with Google
                        </span>
                    </Link>

                </div>

            </div>


            {/* Right container */}
           <div className="relative w-full max-w-[766px] h-[950px] bg-bgAvatar rotated-overlay">

                <div className="flex cover gap-5 mt-3 ml-[200px] sm:ml-[270px] w-full max-w-[300px]">
                    <img src={support} alt='Support' className='w-[20px] h-[20px]' />
                    <img src={phrase} alt='Phrase' className='w-[78px] h-[20px]' />
                    <div className='flex'>
                    <img src={monde} alt='monde' className='w-[20px] h-[20px] mr-1' />
                    <img src={anglais} alt='Anglais' className='w-[18px] h-[18px]' />
                    </div>
                </div>

                <div className='w-[420px] h-[618px] flex flex-col mx-auto mt-20'>

                    <div className='w-full max-w-[420px] h-[280px] bg-white rounded-md relative'>
                        <div
                            className='w-[255px] h-[82px]
                                        text-[34px] pt-6 px-8
                                        font-afacad font-bold leading-[100%]'
                        >
                            Boost your IT visibility
                        </div>

                        <div
                            className='max-w-[275px] h-[82px] px-8 pt-4 text-[16px] font-medium text-[#718096]
                                        font-afacad  leading-[100%]'
                        >
                            <p>Create, shae, or buy verified IT solutions; APIs, pro tools, premium access, and tech services</p>
                        </div>

                        <div className='absolute top-0 right-0 w-[174px] h-[263px]'>
                            <img
                                src={avatar}
                                alt='Illustration'
                                className='mt-3'
                            />
                        </div>

                        <div className='w-full max-w-[257px] h-[94px] flex items-center justify-center
                                            font-afacad font-semibold bg-white p-3
                                            absolute bottom-[-87px] rounded-md right-8 sm:right-0'

                        >
                            <img
                                src={icon}
                                alt='Icon'
                                className='w-[56px] h-[56px]'
                            />
                            <div className='flex flex-col justify-center ml-4'>
                                <p>Active Projects :</p>
                                <p>12Available Offer : 87</p>
                            </div>
                        </div>

                    </div>

                    <p className="mt-32 text-[#F7FAFC] mx-auto text-white font-afacad font-bold leading-[138%] text-[40px]">Why choose us?</p>

                    <p className='text-white w-full max-w-[300px] sm:max-w-[450px] font-normal mx-auto text-center mt-4 font-afacad text-[20px]'>
                        A platform where developers and businesses connect to build real digital opportunities. Find the expertise you need
                    </p>

                </div>

                <img 
                    src={skip}
                    alt='Skip'
                    className='absolute bottom-6 left-0 right-0 m-auto'
                />


            </div>


        </section>
    )
}

export default Login