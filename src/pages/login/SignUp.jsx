import { Link } from 'react-router-dom'
import { InputField, PasswordField } from '../../components'

export default function SignUp() {
    return (
        <div className="flex flex-col justify-center min-w-screen overflow-hidden px-2 py-1 sm:px-20 md:px-40 min-h-screen">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-indigo-600/40 ring ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign Up
                </h1>
                <form className="mt-6">
                    <InputField inputType='text' inputLabel='Username' />
                    <InputField inputType='email' inputLabel='Email' />
                    <PasswordField inputLabel='Password' />
                    <PasswordField inputLabel='Confirm Password' />
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 active:bg-indigo-800">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    )
}

