import React from 'react';
import WarningButton from '../buttons/WarningButton';
import DangerButton from '../buttons/DangerButton';
import { MdEmail, MdPhone, MdLocationOn, MdBadge } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const UserProfileCard = ({ userData }) => {
    // If userData is not provided, use default values
    const {
        username = 'User',
        nik = '-',
        phone = '-',
        email = '-',
        address = '-',
        avatar = '/images/default-avatar.jpg'
    } = userData || {};

    const handleEdit = () => {
        // Implement edit functionality
        console.log('Edit profile clicked');
    };

    const handleLogout = () => {
        // Implement logout functionality
        console.log('Logout clicked');
        // Example: Clear token and redirect
        // localStorage.removeItem('token');
        // window.location.href = '/login';
    };

    return (
        <div className="flex flex-row justify-center items-center p-9 gap-[90px] relative w-[1180px] h-[368px] bg-white rounded-lg shadow-lg">
            {/* Left Section - Avatar and Username */}
            <div className="flex-none order-0 w-[180px] h-[233px]">
                <div className="absolute w-[180px] h-[180px] left-[130.1px] top-[67.5px]">
                    <div className="absolute w-[180px] h-[180px] rounded-full bg-cover bg-center border-2 border-gray-200"
                         style={{ backgroundImage: `url('${avatar}')` }}>
                    </div>
                </div>
                <h2 className="absolute w-[130px] h-[29px] left-[155.1px] top-[271.5px] font-inter font-bold text-2xl text-center">
                    {username}
                </h2>
            </div>

            {/* Middle Section - Personal Info */}
            <div className="flex-none order-1 w-[305.99px] h-[153.03px] absolute left-[400.1px] top-[73px]">
                <div className="space-y-6">
                    {/* NIK */}
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <MdBadge className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="ml-9">
                            <p className="text-sm font-bold text-gray-500">Nomor Induk Kependudukan (NIK)</p>
                            <p className="text-base">{nik}</p>
                        </div>
                        <div className="mt-4 border-t border-gray-200"></div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <MdPhone className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="ml-9">
                            <p className="text-sm font-bold text-gray-500">Nomor Telepon</p>
                            <p className="text-base">{phone}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Contact Info */}
            <div className="flex-none order-1 w-[305.99px] h-[153.03px] absolute left-[741.28px] top-[72px]">
                <div className="space-y-6">
                    {/* Email */}
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <MdEmail className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="ml-9">
                            <p className="text-sm font-bold text-gray-500">Email</p>
                            <p className="text-base">{email}</p>
                        </div>
                        <div className="mt-4 border-t border-gray-200"></div>
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <div className="absolute left-0 top-0">
                            <MdLocationOn className="w-6 h-6 text-gray-500" />
                        </div>
                        <div className="ml-9">
                            <p className="text-sm font-bold text-gray-500">Alamat</p>
                            <p className="text-base">{address}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="absolute right-9 bottom-9 flex gap-2">
                <button 
                    onClick={handleEdit}
                    className="bg-[#F0BB62] hover:bg-[#f9d18e] transition-colors duration-200 border border-[#F0BB62] text-white hover:text-gray-200 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-2"
                >
                    <FaPencilAlt className="w-3 h-3" />
                    Edit Profil
                </button>
                <button 
                    onClick={handleLogout}
                    className="bg-[#BA2145] hover:bg-[#d62a52] transition-colors duration-200 border border-[#BA2145] text-white hover:text-gray-200 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-2"
                >
                    <IoLogOutOutline className="w-3 h-3" />
                    Keluar
                </button>
            </div>
        </div>
    );
};

export default UserProfileCard;
