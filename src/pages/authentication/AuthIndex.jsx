import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock, FaEye, FaEyeSlash, FaIdCard, FaEnvelope } from 'react-icons/fa'
import beranda1PMI from '../../assets/images/beranda1_pmi.png'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor';
import Heading from '../../themes/typography/Heading';
import Description from '../../themes/typography/Description';

const AuthIndex = () => {
  const [tab, setTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Background */}
      <img src={ beranda1PMI } alt="PMI Surakarta" className='w-full object-cover'/>
      <div className='absolute inset-0' style={{ background:PrimaryColor.red, mixBlendMode:'multiply' }} />

      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-center z-10'>
        <div className="relative z-10 max-w-md w-full mx-auto p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab buttons */}
          <div className="flex border-b-0 mb-6">
            <button
              onClick={() => setTab('login')}
              className={`w-1/2 py-3 px-4 text-center rounded-tl-lg ${
                tab === 'login' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-red-600 border border-red-600'
              } transition-all duration-300`}
            >
              Login
            </button>
            <button
              onClick={() => setTab('register')}
              className={`w-1/2 py-3 px-4 text-center rounded-tr-lg ${
                tab === 'register' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-red-600 border border-red-600'
              } transition-all duration-300`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {tab === 'login' && (
            <div className='flex flex-col items-center'>
              <Heading className={'text-2xl mb-1'}>Selamat Datang!</Heading>
              <Description className={'mb-5'} style={{ color:PrimaryColor.grey }}>Log in ke akun Anda</Description>
              
              <form className="w-full space-y-4" onSubmit={handleLogin}>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Username / Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Username / Email"
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring"
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
                      className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring"
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
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Ingat Saya?
                    </label>
                  </div>
                  <a href="#" className="text-sm text-red-600 hover:underline">
                    Lupa Password?
                  </a>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Log In
                </button>
              </form>
            </div>
          )}

          {/* Register Form */}
          {tab === 'register' && (
            <div className='flex flex-col items-center'>
              <Heading className={'text-2xl mb-1'}>Register</Heading>
              <Description className={'mb-5'} style={{ color:PrimaryColor.grey }}>Daftar akun baru Anda</Description>
              
              <form className="w-full space-y-4" onSubmit={handleRegister}>
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">NIK</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaIdCard className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="NIK"
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring"
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
                      className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring"
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
                
                <div className="relative">
                  <label className="block text-sm font-medium mb-1">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring"
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center" 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                    </button>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthIndex