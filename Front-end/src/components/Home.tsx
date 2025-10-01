import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto font-[font2] bg-slate-800 min-h-screen">
      <div className="mb-8">
        {/* <img src='../public/logo.jpg' className='w-12 h-12 rounded-xl'/> */}
        <h1 className="text-5xl font-bold text-neutral-200">Welcome to ROG Intelligence</h1>
        <p className="mt-2 text-zinc-300">Your centralized hub for data insights and analytics</p>
      </div>
      <div className="mb-6">
        <div className=" rounded-xl shadow-sm text-white overflow-hidden">
          <div className=" px-4  flex items-center justify-between">
            <div className="flex items-center ">
              <span className=" text-3xl font-bold text-gray-100">Overview</span>
            </div>
          </div>
          <div className="p-2">
            <p className="text-gray-100">Explore various features such as Multi-Camera View, RL Agent, and detailed Analytics Dashboard to monitor and manage your data effectively.</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="p-6 border  shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
        <h2 className="mb-4 text-2xl font-semibold text-black">User Information</h2>
        {user ? (
          <div className="text-black-000">
            <p><span className="font-medium">Name:</span> {user.name}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
          </div>
        ) : (
          <p className="text-gray-300">No user information available.</p>
        )}
      </div>
      </footer>
    </div>
  );
};

export default Home;