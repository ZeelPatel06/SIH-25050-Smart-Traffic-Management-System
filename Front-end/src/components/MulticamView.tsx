import React, { useState } from 'react';
import { Camera, Play, Maximize2, Settings, Volume2, VolumeX } from 'lucide-react';

export const MulticamView: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [mutedCameras, setMutedCameras] = useState<Set<number>>(new Set());

  const cameras = [
    { id: 0, name: 'Main Camera', location: 'Outdoor', status: 'active', resolution: '1920x1080' },
    { id: 1, name: 'Lane North', location: 'Outdoor', status: 'active', resolution: '1280x720' },
    { id: 2, name: 'Lane East', location: 'Outdoor', status: 'active', resolution: '1920x1080' },
    { id: 3, name: 'Emergency', location: 'Outdoor', status: 'maintenance', resolution: '1920x1080' },
    { id: 4, name: 'Lane West', location: 'Outdoor', status: 'active', resolution: '1280x720' },
    { id: 5, name: 'Lane South', location: 'Outdoor', status: 'active', resolution: '1280x720' },
    { id: 6, name: 'Site Location', location: 'Floor 1', status: 'active', resolution: '1920x1080' },
    { id: 7, name: 'Server Room', location: 'Floor 2', status: 'offline', resolution: '1280x720' },
  ];

  const toggleMute = (cameraId: number) => {
    const newMuted = new Set(mutedCameras);
    if (newMuted.has(cameraId)) {
      newMuted.delete(cameraId);
    } else {
      newMuted.add(cameraId);
    }
    setMutedCameras(newMuted);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="p-6 mx-auto max-w-7xl bg-slate-800">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-slate-200">Multi-Camera View</h1>
        <p className="mt-2 text-zinc-200">Monitor all security cameras from a single dashboard</p>
      </div>

      {/* Main View */}
      <div className="mb-6">
        <div className="overflow-hidden border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-300">
            <div className="flex items-center space-x-3">
              <Camera className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">{cameras[selectedCamera].name}</span>
              <span className="px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded-full">
                {cameras[selectedCamera].resolution}
              </span>
              <div className={`w-2 h-2 rounded-full ${getStatusColor(cameras[selectedCamera].status)}`}></div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded hover:bg-gray-200">
                <Play className="w-4 h-4" />
              </button>
              <button 
                onClick={() => toggleMute(selectedCamera)}
                className="p-2 rounded hover:bg-gray-200"
              >
                {mutedCameras.has(selectedCamera) ? 
                  <VolumeX className="w-4 h-4" /> : 
                  <Volume2 className="w-4 h-4" />
                }
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <Maximize2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded hover:bg-gray-200">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="text-center text-white">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">{cameras[selectedCamera].name}</p>
              <p className="text-sm opacity-75">{cameras[selectedCamera].location}</p>
              <div className="inline-block px-4 py-2 mt-4 bg-black rounded-lg bg-opacity-30">
                Live Feed Simulation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4 lg:grid-cols-4">
        {cameras.map((camera) => (
          <div
            key={camera.id}
            onClick={() => setSelectedCamera(camera.id)}
            className={`
              bg-zinc-300 rounded-lg shadow-sm border-2 cursor-pointer transition-all duration-200 overflow-hidden
              ${selectedCamera === camera.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-zinc-300 hover:border-gray-300'}
            `}
          >
            <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-50" />
              </div>
              <div className="absolute flex items-center space-x-2 top-2 left-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(camera.status)}`}></div>
                {mutedCameras.has(camera.id) && (
                  <VolumeX className="w-3 h-3 text-white" />
                )}
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="px-2 py-1 text-xs text-white bg-black bg-opacity-50 rounded">
                  {camera.name}
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">{camera.name}</h3>
              <p className="text-xs text-gray-500">{camera.location}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">{camera.resolution}</span>
                <span className={`
                  text-xs px-2 py-1 rounded-full
                  ${camera.status === 'active' ? 'bg-green-100 text-green-800' :
                    camera.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}
                `}>
                  {camera.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Control Panel */}
      <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Camera Controls</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-medium text-gray-900">Recording Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Active Recordings</span>
                <span className="font-medium text-green-600">6/8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Storage Used</span>
                <span className="font-medium">2.4 TB / 5 TB</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 font-medium text-gray-900">Alert Settings</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="border-gray-300 rounded" defaultChecked />
                <span className="ml-2 text-sm text-gray-600">Motion Detection</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">Sound Detection</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-gray-900">System Health</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Network Status</span>
                <span className="text-sm font-medium text-green-600">Excellent</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Server Load</span>
                <span className="text-sm font-medium text-yellow-600">Moderate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};