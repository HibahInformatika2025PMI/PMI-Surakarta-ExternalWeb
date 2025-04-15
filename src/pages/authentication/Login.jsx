import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

import Heading from '../../themes/typography/Heading';
import Description from '../../themes/typography/Description';
import PrimaryColor from '../../themes/color_pallete/PrimaryColor';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center'>
      <Heading className={'text-xl sm:text-2xl mb-1'}>Selamat Datang!</Heading>
      <Description className={'mb-3 sm:mb-5 text-center'} style={{ color:PrimaryColor .grey }}>Log in ke akun Anda</Description>
      
      <form className="w-full space-y-3 sm:space-y-4" onSubmit={handleLogin}>
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Username / Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Username / Email"
              className="w-full pl-10 pr-3 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring focus:border-red-500"
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring focus:border-red-500"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-xs sm:text-sm text-gray-700">
              Ingat Saya?
            </label>
          </div>
          <a href="#" className="text-xs sm:text-sm text-red-600 hover:underline">
            Lupa Password?
          </a>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 sm:py-3 mt-2 sm:mt-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login;