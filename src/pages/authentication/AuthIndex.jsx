import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import beranda1PMI from '../../assets/images/beranda1_pmi.png'
import PrimaryColor from '../../themes/color_pallete/PrimaryColor';
import Login from './Login';
import Register from './Register';

const AuthIndex = () => {
  const [tab, setTab] = useState('login');

  return (
    <div className='relative min-h-screen w-screen overflow-hidden'>
      {/* Background */}
      <img src={ beranda1PMI } alt="PMI Surakarta" className='w-full h-full object-cover absolute inset-0'/>
      <div className='absolute inset-0 w-full h-full' style={{ background:PrimaryColor.red, mixBlendMode:'multiply' }} />

      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-center z-10 px-4 py-8 sm:p-6'>
        <div className="relative z-10 w-full max-w-md mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab buttons */}
          <div className="flex border-b-0 mb-4 sm:mb-6">
            <button
              onClick={() => setTab('login')}
              className={`w-1/2 py-2 sm:py-3 px-2 sm:px-4 text-center text-sm sm:text-base rounded-tl-lg ${
                tab === 'login' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-red-600 border border-red-600'
              } transition-all duration-300`}
            >
              Login
            </button>
            <button
              onClick={() => setTab('register')}
              className={`w-1/2 py-2 sm:py-3 px-2 sm:px-4 text-center text-sm sm:text-base rounded-tr-lg ${
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
            <Login />
          )}

          {/* Register Form */}
          {tab === 'register' && (
            <Register />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthIndex