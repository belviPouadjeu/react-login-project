import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='align-element border border-red-900 flex flex-col md:flex-row min-h-screen'>
            {/* Left container */}
            <div className='border border-blue-500 w-full max-w-[640px] bg-green-600 h-[864px]'>
                <div className="max-w-[150px] h-[58px] left-0 sm:left-10 relative">
                    <img 
                        src={logo}
                        alt="Company logo"    
                    />
                </div>

                <div className='w-full max-w-[469px] bg-red-600 border border-white relative sm:left-[70px] h-[168px] top-10 px-4'>
                    <h1 className='font-bold font-afacad text-5xl mb-1'>Sign in</h1>

                    <div className='w-full max-w-[400px] text-[24px] leading-[100%]'>
                        <h2 className='font-bold font-afacad mt-2'>Welcome back!</h2>
                        <p className="font-afacad leading-[100%]">
                        Log in to manage your services, deals, and technical opportunities
                        </p>
                    </div>

                    <div className='mt-1'>
                        <span className='text-gray-500 font-inter'>Don't have an account? </span>
                        <Link to='/signup'>
                        <span className='font-semibold underline font-inter'>Create now</span>
                        </Link>
                    </div>
                </div>

            </div>
            {/* Right container */}
            <div className='border border-green-700 bg-bgAvatar w-full max-w-[766px] h-[1024px]'>Avatar section</div>
        </section>
    )
}

export default Login