import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';
import edi from '../assets/images/edi.jpg';
const Profile = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-8">
          <img
            src={edi}
            alt="Profile"
            className="w-full h-auto rounded-full border border-gray-300"
          />
        </div>
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
            <div className="mb-2 flex items-center">
              <FaUser className="text-gray-600 mr-2" />
              <div>
                <label className="block text-gray-700 font-semibold">Full Name:</label>
                <p className="text-gray-800">John Doe</p>
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <FaEnvelope className="text-gray-600 mr-2" />
              <div>
                <label className="block text-gray-700 font-semibold">Email:</label>
                <p className="text-gray-800">john.doe@example.com</p>
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <FaPhone className="text-gray-600 mr-2" />
              <div>
                <label className="block text-gray-700 font-semibold">Phone Number:</label>
                <p className="text-gray-800">+1234567890</p>
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <FaMapMarkerAlt className="text-gray-600 mr-2" />
              <div>
                <label className="block text-gray-700 font-semibold">Address:</label>
                <p className="text-gray-800">123 Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Update Profile</h3>
            <form>
              <div className="mb-4 flex items-center">
                <FaUser className="text-gray-600 mr-2" />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4 flex items-center">
                <FaEnvelope className="text-gray-600 mr-2" />
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4 flex items-center">
                <FaPhone className="text-gray-600 mr-2" />
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4 flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600"
              >
                <FaEdit className="mr-2" />
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
