import React from 'react';
import { FaUpload, FaEdit, FaLock } from 'react-icons/fa';
import profileImage from '../assets/images/edi.jpg';

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#180948]">Profile</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Photo */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Profile Photo</h3>
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full mb-4 border"
          />
          <label className="block text-gray-700 font-semibold mb-2">
            Choose File
            <input type="file" className="hidden" />
          </label>
          <button className="bg-[#180948] text-white px-4 py-2 rounded flex items-center hover:bg-black">
            <FaUpload className="mr-2" />
            Upload
          </button>
        </div>
        {/* Personal Info */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Personal Info <span className="text-gray-500">(Click to edit)</span></h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                value="Salim Akunor"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email"
                value="salimakunor@gmail.com"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Phone Number"
                value="0244666419"
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded-md"
                value="Ghana"
              >
                <option value="Ghana">Ghana</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Address"
                value="Jubilee Drive St., Accra"
              />
            </div>
            <button className="bg-[#180948] text-white px-4 py-2 rounded flex items-center hover:bg-black">
              <FaEdit className="mr-2" />
              Update
            </button>
          </form>
        </div>
        {/* Update Password */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Update Password</h3>
          <form>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your current password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="New password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm new password"
              />
            </div>
            <button className="bg-[#180948] text-white px-4 py-2 rounded flex items-center hover:bg-black">
              <FaLock className="mr-2" />
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
