import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Activity, 
  Target,
  ArrowUp,
  ArrowDown,
  Eye,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '24,583',
      change: '+12.3%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Sessions',
      value: '1,429',
      change: '+8.7%',
      trend: 'up',
      icon: Activity,
      color: 'green'
    },
    {
      title: 'Conversion Rate',
      value: '3.84%',
      change: '-2.1%',
      trend: 'down',
      icon: Target,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: '$89,247',
      change: '+15.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'emerald'
    }
  ];

  const recentActivity = [
    { id: 1, user: 'Manan Shah', action: 'Logged in', time: '2 minutes ago', status: 'success' },
    { id: 2, user: 'Anjali Doshi', action: 'Updated profile', time: '5 minutes ago', status: 'info' },
    { id: 3, user: 'Nayak John', action: 'Failed login attempt', time: '8 minutes ago', status: 'warning' },
    { id: 4, user: 'Suresh Chudasma', action: 'Made purchase', time: '12 minutes ago', status: 'success' },
    { id: 5, user: 'Ranna Makwana', action: 'Viewed analytics', time: '15 minutes ago', status: 'info' },
  ];

  const chartData = [
    { month: 'Jan', users: 4000, revenue: 24000 },
    { month: 'Feb', users: 3000, revenue: 13000 },
    { month: 'Mar', users: 2000, revenue: 98000 },
    { month: 'Apr', users: 2780, revenue: 39000 },
    { month: 'May', users: 1890, revenue: 48000 },
    { month: 'Jun', users: 2390, revenue: 38000 },
  ];

  return (
    <div className="font-[font2] bg-slate-800 p-6 mx-auto max-w-7xl">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-neutral-100">Analytics Dashboard</h1>
        <p className="mt-2 text-zinc-300">Monitor your key metrics and performance indicators</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isPositive = metric.trend === 'up';
          
          return (
            <div
              key={index}
              className="p-6 transition-shadow duration-300 bg-zinc-300 border border-zinc-300 shadow-sm rounded-xl hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                  <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${isPositive ? 'text-green-700' : 'text-red-700'}`}>
                  {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{metric.value}</h3>
                <p className="mt-1 text-sm text-gray-600">{metric.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Performance Chart */}
        <div className="p-6 bg-zinc-300 border border-zinc-300 shadow-sm lg:col-span-2 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Performance Overview</h2>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                <span className="text-sm text-gray-600">Revenue</span>
              </div>
            </div>
          </div>
          
          {/* Mock Chart */}
          <div className="flex items-end h-64 space-x-4">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="flex flex-col w-full space-y-1">
                  <div 
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${(data.users / 4000) * 120}px` }}
                  ></div>
                  <div 
                    className="w-full rounded-t bg-emerald-500"
                    style={{ height: `${(data.revenue / 98000) * 100}px` }}
                  ></div>
                </div>
                <span className="mt-2 text-xs text-gray-600">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 bg-zinc-300 border border-zinc-300 shadow-sm rounded-xl">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  ${activity.status === 'success' ? 'bg-green-100' : 
                    activity.status === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'}
                `}>
                  {activity.status === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : activity.status === 'warning' ? (
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  ) : (
                    <Eye className="w-4 h-4 text-blue-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                  <p className="text-xs text-gray-500">{activity.action}</p>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        <div className="p-6 bg-zinc-300 border border-zinc-300 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Server Status</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">CPU Usage</span>
              <span className="font-medium">20%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-300 border border-zinc-300 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Memory Usage</h3>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">RAM Usage</span>
              <span className="font-medium">67%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-zinc-300 border border-zinc-300 shadow-sm rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Storage</h3>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Disk Usage</span>
              <span className="font-medium">45%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};