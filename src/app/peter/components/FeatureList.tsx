'use client';

interface FeatureItem {
  name: string;
  status: 'completed' | 'in-progress' | 'planned';
  priority: 'high' | 'medium' | 'low';
  description?: string;
}

interface FeatureListProps {
  features: FeatureItem[];
  onAddFeature?: () => void;
  onEditFeature?: (index: number) => void;
}

export function FeatureList({ features, onAddFeature, onEditFeature }: FeatureListProps) {
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
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Feature Development</h2>
        {onAddFeature && (
          <button 
            onClick={onAddFeature}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all"
          >
            Add Feature
          </button>
        )}
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex-1">
              <h3 className="font-semibold text-white">{feature.name}</h3>
              {feature.description && (
                <p className="text-sm text-gray-400 mt-1">{feature.description}</p>
              )}
              <div className="flex items-center space-x-2 mt-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(feature.status)}`}>
                  {feature.status}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(feature.priority)}`}>
                  {feature.priority}
                </span>
              </div>
            </div>
            {onEditFeature && (
              <button 
                onClick={() => onEditFeature(index)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
