import React, { useState } from 'react';
import { Brain, Activity, TrendingUp, Zap, Play, Pause, RotateCcw, Settings } from 'lucide-react';

export const RLAgent: React.FC = () => {
  const [isTraining, setIsTraining] = useState(false);

  const modelStats = {
    accuracy: 94.7,
    episodes: 15847,
    reward: 892.3,
    learningRate: 0.001,
    explorationRate: 0.15,
    totalSteps: 1_247_892
  };

  const trainingMetrics = [
    { episode: 1000, reward: 156.8, accuracy: 67.2 },
    { episode: 2000, reward: 298.1, accuracy: 74.5 },
    { episode: 3000, reward: 445.9, accuracy: 81.3 },
    { episode: 4000, reward: 589.2, accuracy: 86.7 },
    { episode: 5000, reward: 672.4, accuracy: 89.8 },
    { episode: 6000, reward: 734.6, accuracy: 91.9 },
    { episode: 7000, reward: 798.3, accuracy: 93.2 },
    { episode: 8000, reward: 856.7, accuracy: 94.1 },
    { episode: 9000, reward: 879.5, accuracy: 94.5 },
    { episode: 10000, reward: 892.3, accuracy: 94.7 },
  ];

  const recentActions = [
    { id: 1, action: 'Move Forward', reward: 12.5, state: 'success', timestamp: '10:24:15' },
    { id: 2, action: 'Turn Left', reward: 8.2, state: 'success', timestamp: '10:24:12' },
    { id: 3, action: 'Collect Item', reward: 25.0, state: 'success', timestamp: '10:24:08' },
    { id: 4, action: 'Avoid Obstacle', reward: 15.7, state: 'success', timestamp: '10:24:03' },
    { id: 5, action: 'Move Forward', reward: -2.1, state: 'penalty', timestamp: '10:23:58' },
  ];

  const hyperparameters = [
    { name: 'Learning Rate', value: '0.001', optimal: true },
    { name: 'Discount Factor', value: '0.99', optimal: true },
    { name: 'Epsilon', value: '0.15', optimal: false },
    { name: 'Batch Size', value: '64', optimal: true },
    { name: 'Memory Size', value: '100000', optimal: true },
    { name: 'Update Frequency', value: '4', optimal: true },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto font-[font2] bg-slate-800">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-neutral-200">RL Agent Dashboard</h1>
        <p className="mt-3 text-zinc-300">Monitor and control your reinforcement learning model</p>
      </div>

      {/* Model Status */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4">
        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Brain className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{modelStats.accuracy}%</p>
              <p className="text-sm text-gray-600">Accuracy</p>
            </div>
          </div>
        </div>

        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{modelStats.episodes.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Episodes</p>
            </div>
          </div>
        </div>

        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{modelStats.reward}</p>
              <p className="text-sm text-gray-600">Avg Reward</p>
            </div>
          </div>
        </div>

        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{modelStats.totalSteps.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Total Steps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Training Controls and Progress */}
      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Training Control</h2>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${
              isTraining ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {isTraining ? 'Training' : 'Idle'}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsTraining(!isTraining)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isTraining 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isTraining ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isTraining ? 'Pause Training' : 'Start Training'}</span>
              </button>
              
              <button className="flex items-center px-4 py-2 space-x-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              
              <button className="flex items-center px-4 py-2 space-x-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Settings className="w-4 h-4" />
                <span>Configure</span>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Current Episode</span>
                <span className="font-medium">{modelStats.episodes}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-300">
                <div 
                  className="h-2 transition-all duration-300 bg-blue-600 rounded-full"
                  style={{ width: `${(modelStats.episodes / 20000) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>20,000 episodes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Hyperparameters</h2>
          <div className="space-y-3">
            {hyperparameters.map((param, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-sm font-medium text-gray-700">{param.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-900">{param.value}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    param.optimal ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart and Recent Actions */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Training Progress</h2>
          <div className="flex items-end h-64 space-x-2">
            {trainingMetrics.slice(-10).map((metric, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div 
                  className="w-full transition-all duration-300 rounded-t bg-gradient-to-t from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  style={{ height: `${(metric.reward / 1000) * 200}px` }}
                ></div>
                <span className="mt-2 text-xs text-gray-600">{metric.episode / 1000}k</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>Episodes (thousands)</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <span>Reward</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border shadow-sm bg-zinc-300 rounded-xl border-zinc-300">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Recent Actions</h2>
          <div className="space-y-3 overflow-y-auto max-h-64">
            {recentActions.map((action) => (
              <div key={action.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    action.state === 'success' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-900">{action.action}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium ${
                    action.reward > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {action.reward > 0 ? '+' : ''}{action.reward}
                  </span>
                  <span className="text-xs text-gray-500">{action.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};