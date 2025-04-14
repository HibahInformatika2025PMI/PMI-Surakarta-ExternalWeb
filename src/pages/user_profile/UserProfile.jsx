import React, { useState, useEffect } from 'react';
import UserProfileCard from '../../components/card/UserProfileCard';
import { useParams } from 'react-router-dom';
import beranda1PMI from '../../assets/images/beranda1_pmi.png';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useParams(); // Get userId from URL if available
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                // If userId is provided in the URL, use it; otherwise, fetch logged-in user data
                const endpoint = userId 
                    ? `API_ENDPOINT/users/${userId}` 
                    : 'API_ENDPOINT/users/me'; // Replace with your actual API endpoint
                
                // For development/testing, you can use a mocked user data
                // In production, replace with actual API call
                // const response = await fetch(endpoint, {
                //     headers: {
                //         'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token auth
                //     }
                // });
                
                // if (!response.ok) {
                //     throw new Error('Failed to fetch user data');
                // }
                
                // const data = await response.json();
                
                // Mock data for development
                const mockData = {
                    id: userId || '12345',
                    username: 'User12345',
                    nik: '3310123456789191',
                    phone: '+6285123456789',
                    email: 'emailuser@gmail.com',
                    address: 'Jl. Yosodipuro No 51, Surakarta',
                    avatar: '/images/default-avatar.jpg'
                };
                
                // Set mock data (replace with actual data in production)
                setUserData(mockData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error.message || 'Failed to load user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]); // Re-fetch when userId changes

    return (
        <div className="relative w-full min-h-screen bg-cover bg-center" 
             style={{ 
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${beranda1PMI})`
             }}>
            
            {/* Page Title */}
            <div className="px-32 py-11">
                <h1 className="text-white text-3xl font-bold">PROFIL PENGGUNA</h1>
            </div>

            {/* Profile Container */}
            <div className="flex justify-center px-32 mb-16">
                {loading ? (
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-lg">Loading profile data...</p>
                    </div>
                ) : error ? (
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    <UserProfileCard userData={userData} />
                )}
            </div>
        </div>
    );
};

export default UserProfile;
