import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdBadge, MdPerson } from 'react-icons/md';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

const EditProfileCard = ({ userData }) => {
    // If userData is not provided, use default values
    const defaultData = {
        username: '',
        nik: '',
        phone: '',
        email: '',
        address: '',
        avatar: '/images/default-avatar.jpg'
    };

    // Initialize form data with userData or default values
    const [formData, setFormData] = useState({
        username: userData?.username || defaultData.username,
        nik: userData?.nik || defaultData.nik,
        phone: userData?.phone || defaultData.phone,
        email: userData?.email || defaultData.email,
        address: userData?.address || defaultData.address,
        avatar: userData?.avatar || defaultData.avatar
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add API call to update user profile
        // Example:
        // updateUserProfile(formData)
        //   .then(response => {
        //     console.log('Profile updated successfully');
        //     // Redirect to profile page or show success message
        //   })
        //   .catch(error => {
        //     console.error('Failed to update profile:', error);
        //     // Show error message
        //   });
    };

    // Handle profile picture upload
    const handlePhotoUpload = () => {
        // Implement photo upload functionality
        console.log('Upload photo clicked');
        // This would typically open a file selector
        // Example:
        // const fileInput = document.createElement('input');
        // fileInput.type = 'file';
        // fileInput.accept = 'image/*';
        // fileInput.onchange = handleFileSelected;
        // fileInput.click();
    };

    // Handle profile picture deletion
    const handlePhotoDelete = () => {
        // Implement photo deletion functionality
        console.log('Delete photo clicked');
        setFormData({
            ...formData,
            avatar: '/images/default-avatar.jpg' // Reset to default avatar
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row items-center p-15 gap-[59px] relative w-[1180px] h-[455px] bg-white rounded-lg shadow-lg">
            {/* Left Section - Avatar and Buttons */}
            <div className="w-[180px] h-[276px] flex-none order-0 flex-grow-0">
                {/* Profile Picture */}
                <div className="box-border absolute w-[180px] h-[180px] left-[60px] top-[89.5px] bg-cover bg-center border border-gray-400 rounded-lg"
                     style={{ backgroundImage: `url('${formData.avatar}')` }}>
                </div>

                {/* Upload Photo Button */}
                <button 
                    type="button"
                    onClick={handlePhotoUpload}
                    className="box-border flex flex-row justify-center items-center px-3 py-2 gap-2 absolute w-[180px] h-[31px] left-[60px] top-[291.5px] bg-[#F0BB62] border border-[#F0BB62] rounded-lg"
                >
                    <FaPencilAlt className="w-3 h-3 text-white" />
                    <span className="font-inter font-bold text-xs text-white">Ubah Foto Profil</span>
                </button>

                {/* Delete Photo Button */}
                <button 
                    type="button"
                    onClick={handlePhotoDelete}
                    className="box-border flex flex-row justify-center items-center px-3 py-2 gap-2 absolute w-[180px] h-[31px] left-[60px] top-[334.5px] bg-[#BA2145] border border-[#F0BB62] rounded-lg"
                >
                    <FaTrash className="w-3 h-3 text-white" />
                    <span className="font-inter font-bold text-xs text-white">Hapus Foto Profil</span>
                </button>
            </div>

            {/* Right Section - Form Fields */}
            <div className="w-[677px] h-[332px] flex-none order-1 flex-grow-0">
                {/* Left Column */}
                <div className="flex flex-col items-start gap-9 absolute w-[281px] h-[282px] left-[299px] top-[61.5px]">
                    {/* Username Field */}
                    <div className="w-[281px] h-[70px]">
                        <div className="absolute w-[119px] h-[25px] left-0 top-0">
                            <MdPerson className="absolute w-6 h-6 left-0 top-0 text-black" />
                            <label className="absolute w-[82px] h-[17px] left-[37px] top-[4px] font-inter font-bold text-sm text-black">
                                Username <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className="box-border absolute w-[281px] h-[33px] left-0 top-[37px] border border-[#E1E1E1] rounded-lg px-[19px] py-[8px] text-sm"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="w-[281px] h-[70px]">
                        <div className="absolute w-[86px] h-[25px] left-0 top-[106px]">
                            <MdEmail className="absolute w-6 h-6 left-0 top-0 text-black" />
                            <label className="absolute w-[49px] h-[17px] left-[37px] top-[4px] font-inter font-bold text-sm text-black">
                                Email <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="box-border absolute w-[281px] h-[33px] left-0 top-[143px] border border-[#E1E1E1] rounded-lg px-[19px] py-[8px] text-sm"
                            required
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="w-[281px] h-[70px]">
                        <div className="absolute w-[153px] h-[25px] left-0 top-[212px]">
                            <MdPhone className="absolute w-6 h-6 left-0 top-0 text-black" />
                            <label className="absolute w-[116px] h-[17px] left-[37px] top-[4px] font-inter font-bold text-sm text-black">
                                Nomor Telepon <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="box-border absolute w-[281px] h-[33px] left-0 top-[249px] border border-[#E1E1E1] rounded-lg px-[19px] py-[8px] text-sm"
                            required
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col items-start gap-9 absolute w-[296px] h-[284px] left-[680px] top-[61.5px]">
                    {/* NIK Field */}
                    <div className="w-[296px] h-[69px]">
                        <div className="absolute w-[25px] h-[25px] left-0 top-0">
                            <MdBadge className="absolute w-6 h-6 left-0 top-0 text-black" />
                            <label className="absolute w-[259px] h-[17px] left-[37px] top-[4px] font-inter font-bold text-sm text-black">
                                Nomor Induk Kependudukan (NIK) <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <input
                            type="text"
                            name="nik"
                            value={formData.nik}
                            onChange={handleInputChange}
                            className="box-border absolute w-[281px] h-[33px] left-0 top-[36px] border border-[#E1E1E1] rounded-lg px-[19px] py-[8px] text-sm"
                            required
                        />
                    </div>

                    {/* Address Field */}
                    <div className="w-[281px] h-[179px]">
                        <div className="absolute w-[97px] h-[25px] left-0 top-[105px]">
                            <MdLocationOn className="absolute w-6 h-6 left-0 top-0 text-black" />
                            <label className="absolute w-[60px] h-[17px] left-[37px] top-[4px] font-inter font-bold text-sm text-black">
                                Alamat <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="box-border absolute w-[281px] h-[142px] left-0 top-[142px] border border-[#D9D9D9] rounded-lg px-[19px] py-[15px] text-sm resize-none"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="flex flex-row justify-center items-center px-6 py-2 gap-[10px] absolute w-[93px] h-[31px] right-[219px] top-[360px] bg-[#5AAA14] rounded-lg"
                >
                    <span className="font-inter font-bold text-xs text-white">Simpan</span>
                </button>

                {/* Required Fields Note */}
                <p className="absolute w-[71px] h-[15px] left-[299px] top-[370px] font-inter text-xs text-[#D60100]">
                    *) Wajib diisi
                </p>
            </div>
        </form>
    );
};

export default EditProfileCard;
