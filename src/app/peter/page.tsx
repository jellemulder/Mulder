'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthGuard } from './components/AuthGuard';

export default function PeterDashboard() {
  const [stats] = useState({
    totalVisitors: 1250,
    pageViews: 3420,
    contactRequests: 15,
    lastUpdated: new Date().toLocaleDateString()
  });

  const [features] = useState([
    { name: 'Portfolio Gallery', status: 'planned', priority: 'high' },
    { name: 'Blog System', status: 'in-progress', priority: 'medium' },
    { name: 'Contact Form', status: 'completed', priority: 'high' },
    { name: 'Analytics Dashboard', status: 'planned', priority: 'low' },
    { name: 'User Authentication', status: 'planned', priority: 'medium' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-300';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-300';
      case 'planned': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300';
      case 'low': return 'bg-green-500/20 text-green-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">P</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Peter Pagina</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  ← Terug naar website
                </Link>
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-sm text-white">JM</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Visitors</p>
                  <p className="text-3xl font-bold text-white">{stats.totalVisitors.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Page Views</p>
                  <p className="text-3xl font-bold text-white">{stats.pageViews.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Contact Requests</p>
                  <p className="text-3xl font-bold text-white">{stats.contactRequests}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Last Updated</p>
                  <p className="text-lg font-bold text-white">{stats.lastUpdated}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Feature Development</h2>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all">
                  Add Feature
                </button>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{feature.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(feature.status)}`}>
                          {feature.status}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(feature.priority)}`}>
                          {feature.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-all">
                  <div className="text-blue-400 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8-1a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Portfolio</p>
                </button>

                <button className="p-4 bg-green-500/20 rounded-lg border border-green-500/30 hover:bg-green-500/30 transition-all">
                  <div className="text-green-400 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Blog</p>
                </button>

                <button className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-all">
                  <div className="text-purple-400 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Users</p>
                </button>

                <button className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30 hover:bg-yellow-500/30 transition-all">
                  <div className="text-yellow-400 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white font-medium">Analytics</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
