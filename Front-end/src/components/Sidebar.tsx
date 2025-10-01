import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { BarChart3, Camera, Brain, LogOut, Menu, X, Home } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, isOpen, onToggle }) => {
  const { logout, user } = useAuth();

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'multicam', label: 'Multicam View', icon: Camera },
    { id: 'rlagent', label: 'RL Agent', icon: Brain }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="fixed z-50 p-2 text-white rounded-lg shadow-lg top-4 left-4 lg:hidden bg-slate-800"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-100 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out z-50
        lg:relative lg:translate-x-0 font-[font2]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo and Company */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center ">
                <img src="../public/logo.jpg" className="w-10 h-10 rounded-xl"/>
              </div>
              <div>
                <h1 className="text-xl font-bold">ROG Intelligence</h1>
                <p className="text-sm text-slate-400">Intelligence Hub</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    onToggle();
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User info and logout */}
          <div className="p-4 border-t border-slate-700">
            <div className="p-3 mb-4 rounded-lg bg-slate-800">
              <div className="text-sm font-medium">{user?.name}</div>
              <div className="text-xs text-slate-400">{user?.email}</div>
            </div>
            <button
              onClick={logout}
              className="flex items-center w-full px-4 py-3 space-x-3 transition-all duration-200 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};